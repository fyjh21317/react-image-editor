import { Box, Flex, Button, VStack } from '@chakra-ui/react';
import { LuUpload, LuCrop } from 'react-icons/lu';
import { MdModeEdit } from 'react-icons/md';

function App() {
  return (
    <Flex minH="100vh" bg="gray.50" p={4}>
      {/* Left Sidebar */}
      <Box w="20%" p={4}>
        <VStack spacing={4} align="stretch">
          <Button colorScheme="teal" variant="outline">
            <LuUpload />
            Upload Image
          </Button>
          <Button colorScheme="teal" variant="outline" isDisabled>
            <LuCrop /> Crop Image
          </Button>
          <Button colorScheme="teal" variant="outline" isDisabled>
            <MdModeEdit />
            Edit Image
          </Button>
        </VStack>
      </Box>

      {/* Right Image Area */}
      <Box w="80%" p={4}>
        <Box
          textAlign="center"
          color="gray.500"
          borderWidth="1px"
          borderColor="gray.300"
          borderRadius="md"
          borderStyle={'dashed'}
          p={4}
        >
          No image selected yet.
        </Box>
      </Box>
    </Flex>
  );
}

export default App;
