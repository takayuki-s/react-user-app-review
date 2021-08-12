import { Box, Image, Stack, Wrap, WrapItem, Text } from "@chakra-ui/react";
import { VFC, memo } from "react";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard imageUrl="https://source.unsplash.com/random" userName="てけ" fullName="teke" />
      </WrapItem>
    </Wrap>
  );
});