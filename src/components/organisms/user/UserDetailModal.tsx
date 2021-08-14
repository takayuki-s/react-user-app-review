import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";
import { VFC, memo } from "react";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isOpen, isAdmin = false, onClose } = props;
  const onClickUpdate = () => alert();
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
    <ModalOverlay />
    <ModalContent pb={6}>
      <ModalHeader>ユーザー詳細</ModalHeader>
      <ModalCloseButton />
      <ModalBody mx={4}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>名前</FormLabel>
            <Input value={user?.username} isReadOnly />
          </FormControl>
          <FormControl>
            <FormLabel>フルネーム</FormLabel>
            <Input value={user?.name} isReadOnly />
          </FormControl>
          <FormControl>
            <FormLabel>メール</FormLabel>
            <Input value={user?.email} isReadOnly />
          </FormControl>
          <FormControl>
            <FormLabel>TEL</FormLabel>
            <Input value={user?.phone} isReadOnly />
          </FormControl>
        </Stack>
      </ModalBody>
      {isAdmin && (
        <ModalFooter>
          <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
        </ModalFooter>
      )}
    </ModalContent>
  </Modal>
  )
});