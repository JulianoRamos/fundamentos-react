import { IconButton } from "@chakra-ui/react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { useColorMode } from "../ui/color-mode";

export function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton variant="ghost" rounded="full" onClick={toggleColorMode}>
      {colorMode === 'dark' ? <IoMdMoon /> : <IoMdSunny />}
    </IconButton>
  );
}
