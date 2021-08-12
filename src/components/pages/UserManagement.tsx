import { Box, Image, Stack, Wrap, WrapItem, Text } from "@chakra-ui/react";
import { VFC, memo } from "react";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md" p={4} _hover={{ cursor: "pointer", opacity: "0.8"}}>
          <Stack textAlign="center">
            <Image boxSize="160px" borderRadius="full" src="https://source.unsplash.com/random" alt="プロフィール画像" m="auto"/>
            <Text fontSize="lg" fontWeight="bold">てけ</Text>
            <Text fontSize="sm" color="gray">Teke</Text>
          </Stack>
        </Box>
      </WrapItem>
    </Wrap>
  );
});