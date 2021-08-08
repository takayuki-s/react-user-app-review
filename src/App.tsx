import React from 'react';
import theme from "./theme/theme"
import { Button, ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Button colorScheme="teal">ボタン</Button>
        <p>テストテキスト</p>
      </ChakraProvider>
    </div>
  );
}

export default App;
