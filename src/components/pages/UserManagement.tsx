import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { useCallback } from "react";
import { VFC, memo, useEffect } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: VFC = memo(() => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  useEffect(() => getUsers(), [])

  const onClickUser = useCallback(() => onOpen(), []);

  return (
    <>
      {loading ? (
        <Center h="100vh" justify="center">
         <Spinner /> 
        </Center> )
       : (
        <Wrap p={{ base: 4, md: 10 }} justify="space-around">
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <Center>
                <UserCard imageUrl="https://source.unsplash.com/random" userName={user.username} fullName={user.name} onClick={onClickUser}/>
              </Center>
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose}/>
    </>
  );
});