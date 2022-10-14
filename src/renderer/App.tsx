import { ChakraProvider } from '@chakra-ui/react';

import Demo from './Demo';

export default function App() {
  return (
    <ChakraProvider>
      <Demo />
    </ChakraProvider>
  );
}
