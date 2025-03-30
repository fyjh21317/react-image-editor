import { useState, useRef } from 'react';
import { Box, Flex, Button, VStack } from '@chakra-ui/react';
import { LuUpload, LuCrop } from 'react-icons/lu';
import { MdOutlineClear } from 'react-icons/md';
import ImageBox from './components/ImageBox.jsx';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  // 裁剪工具實體 DOM
  const cropperRef = useRef(null);
  // 檔案上傳實體 DOM
  const fileInputRef = useRef(null);

  // 讀取上傳的圖片
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      if (imageUrl !== selectedImage) {
        setSelectedImage(imageUrl);
        // 清除之前的裁剪圖片
        setCroppedImage(null);
      }
    }
  };

  // 當點選 裁剪圖片
  const handleCrop = () => {
    try {
      const cropper = cropperRef.current?.cropper;
      if (cropper) {
        setCroppedImage(cropper.getCroppedCanvas().toDataURL());
      } else {
        console.error('Error: Cropper is not initialized.');
      }
    } catch (error) {
      console.error('Error cropping image:', error);
    }
  };

  // 當點選 清除圖片
  const handleClear = () => {
    setSelectedImage(null);
    setCroppedImage(null);
  };

  return (
    <Flex h="100vh" bg="gray.50" p={4}>
      {/* 功能列 */}
      <Box w="20%" p={4}>
        <VStack spacing={4} align="stretch">
          {/* 上傳圖片 按鈕*/}
          <Button
            variant="outline"
            w="full"
            onClick={() => fileInputRef.current.click()}
          >
            <LuUpload />
            Upload Image
          </Button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />

          {/* 裁剪圖片 按鈕*/}
          <Button
            variant="outline"
            disabled={!selectedImage}
            onClick={handleCrop}
          >
            <LuCrop /> Crop Image
          </Button>

          {/* 清除圖片 按鈕*/}
          <Button
            variant="outline"
            disabled={!selectedImage}
            onClick={handleClear}
          >
            <MdOutlineClear /> Clear Image
          </Button>
        </VStack>
      </Box>

      {/* 編輯區 */}
      <Box w="80%" h="100%" display="flex" p={4}>
        {/* 左邊：可裁剪的圖片 */}
        <ImageBox
          cropperRef={cropperRef}
          title="Original Image (Croppable)"
          imageSrc={selectedImage}
          isCropper={true}
        />

        {/* 間距 */}
        <Box w="16px" />

        {/* 右邊：裁剪後圖片 */}
        <ImageBox imageSrc={croppedImage} />
      </Box>
    </Flex>
  );
}

export default App;
