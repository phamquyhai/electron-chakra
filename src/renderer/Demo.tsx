import { Center, Box, Text } from '@chakra-ui/react';

const Parents = ({ children }: any) => {
  return (
    <Box w={['xs', 'sm', 'md']} h="md" bg="green.500" pt="4">
      {children}
    </Box>
  );
};

const Demo = () => {
  return (
    <Center h="100vh">
      <Parents>
        <Text>hi</Text>
      </Parents>
    </Center>
  );
};

export default Demo;
