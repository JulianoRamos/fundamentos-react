import { Button, ButtonProps } from "@chakra-ui/react";
import { LuPlus } from "react-icons/lu";

export function AddButton({ children, ...rest }: ButtonProps) {
  return (
    <Button colorPalette="purple" {...rest}>
      <LuPlus /> {children}
    </Button>
  )
}
