import { IconButton } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useColorMode } from "../ui/color-mode";

export function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton variant="ghost" rounded="full" onClick={toggleColorMode}>
      {colorMode === 'dark' ? <LuMoon /> : <LuSun />}
    </IconButton>
  );
}
