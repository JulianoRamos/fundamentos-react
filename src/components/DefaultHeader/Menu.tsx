import { IconButton } from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";

export function Menu() {
  return (
    <IconButton variant="ghost" rounded="full">
      <IoMdMenu />
    </IconButton>
  );
}
