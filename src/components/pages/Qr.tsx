import { Center } from "@chakra-ui/react";
import { VFC, memo } from "react";
import { useQRCode } from "react-qrcodes";
import { useParams } from "react-router";

export const Qr: VFC = memo(() => {
  const { id } = useParams<{id: string}>();
  const [inputRef] = useQRCode({
    text: `${id}`,
    options: {
      level: 'H', 
      margin: 5, 
      scale: 1, 
      width: 300,
    },
  });
  return (
    <>
      <Center>
        <p>受付者にこの画面を見せてください</p>
      </Center>
      <Center>
        <p>コンパスID={id}</p>
      </Center>
      <Center>
        <canvas ref={inputRef} />
      </Center>
    </>
  )
});