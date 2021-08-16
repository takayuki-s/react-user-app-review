import { Center } from "@chakra-ui/react";
import { VFC, memo } from "react";
import { useQRCode } from "react-qrcodes";

export const Qr: VFC = memo(() => {
  const [inputRef] = useQRCode({
    text: 'https://qiita.com/hujuu/items/b12ff32f189f5ab620ca',
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
        <p>QRコード表示ページのテストです</p>
      </Center>
      <Center>
        <canvas ref={inputRef} />
      </Center>
    </>
  )
});