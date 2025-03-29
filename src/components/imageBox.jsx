import { Box } from '@chakra-ui/react';
/**
 * https://react-cropper.github.io/react-cropper/
 */
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

function ImageBox({ title, imageSrc, isCropper = false, cropperRef }) {
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
      <Box w="100%" p="2" color="gray.500">
        {title}
      </Box>

      <Box flex="1" display="flex" justifyContent="center" alignItems="center">
        {imageSrc ? (
          isCropper ? (
            <Cropper
              ref={cropperRef}
              src={imageSrc}
              style={{ height: '100%', width: '100%' }}
              initialAspectRatio={1}
              guides={true}
              viewMode={1}
              background={false}
            />
          ) : (
            <img
              src={imageSrc}
              alt={title}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '8px',
              }}
            />
          )
        ) : (
          <Box textAlign="center" color="gray.500">
            No image selected yet.
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default ImageBox;
