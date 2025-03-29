import { useState, useEffect } from 'react';
import { Box, Flex, Button, VStack, FileUpload } from '@chakra-ui/react';
import { LuUpload, LuCrop, LuFileImage } from 'react-icons/lu';
import { MdModeEdit } from 'react-icons/md';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [acceptedFiles, setAcceptedFiles] = useState([]);

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      const imageUrl = URL.createObjectURL(acceptedFiles[0]);
      setSelectedImage(imageUrl);
    }
    console.log('Accepted files:', acceptedFiles);
  }, [acceptedFiles]);

  return (
    <Flex minH="100vh" bg="gray.50" p={4}>
      {/* Left Sidebar */}
      <Box w="20%" p={4}>
        <VStack spacing={4} align="stretch">
          {/* 上傳圖片 */}
          <FileUpload.Root accept="image/*">
            <FileUpload.HiddenInput />
            <FileUpload.Trigger asChild>
              <Button colorScheme="teal" variant="outline" w="full">
                <LuUpload />
                Upload Image
              </Button>
            </FileUpload.Trigger>
            <FileUpload.Context>
              {({ acceptedFiles }) => {
                setAcceptedFiles(acceptedFiles);
                return null;
              }}
            </FileUpload.Context>
          </FileUpload.Root>

          {/* 裁剪圖片 */}
          <Button
            colorScheme="teal"
            variant="outline"
            disabled={!selectedImage}
          >
            <LuCrop /> Crop Image
          </Button>

          {/* 編輯圖片 */}
          <Button
            colorScheme="teal"
            variant="outline"
            disabled={!selectedImage}
          >
            <MdModeEdit />
            Edit Image
          </Button>
        </VStack>
      </Box>

      {/* Right Image Area */}
      <Box w="80%" h="100%" p={4}>
        <Box
          textAlign="center"
          color="gray.500"
          borderWidth="1px"
          borderColor="gray.300"
          borderRadius="md"
          borderStyle="dashed"
          p={4}
          h="80vh"
          overflow="hidden"
        >
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                borderRadius: '8px',
                objectFit: 'contain',
              }}
            />
          ) : (
            <Box textAlign="center" color="gray.500">
              No image selected yet.
            </Box>
          )}
        </Box>
      </Box>
    </Flex>
  );
}

export default App;
