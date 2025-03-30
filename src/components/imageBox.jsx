import { Box, Text } from '@chakra-ui/react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

function ImageBox({
  title = 'Cropped Result',
  imageSrc,
  isCropper = false,
  cropperRef,
  cropperOptions = {},
}) {
  // Cropper 預設屬性
  const cropperProps = {
    ref: cropperRef,
    src: imageSrc,
    style: { height: '100%', width: '100%' },
    initialAspectRatio: 1,
    guides: true,
    viewMode: 1,
    background: false,
    ...cropperOptions,
  };

  // 裁剪結果圖片 屬性
  const imageProps = {
    src: imageSrc,
    alt: title,
    style: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
    },
  };

  // 渲染圖片或 Cropper
  const renderImage = () => {
    if (!imageSrc) {
      return (
        <Text textAlign="center" color="gray.500">
          No image selected.
        </Text>
      );
    }
    return isCropper ? <Cropper {...cropperProps} /> : <img {...imageProps} />;
  };

  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
      textAlign="center"
      borderWidth="1px"
      borderColor="gray.300"
      borderRadius="md"
      borderStyle="dashed"
      p={4}
      h="80vh"
      overflow="hidden"
    >
      {/* 標題 */}
      <Box w="100%" p="2" color="gray.500">
        {title}
      </Box>

      {/* 圖片區 */}
      <Box flex="1" display="flex" justifyContent="center" alignItems="center">
        {renderImage()}
      </Box>
    </Box>
  );
}

export default ImageBox;
