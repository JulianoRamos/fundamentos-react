import { IconButton } from "@chakra-ui/react";
import { IoMdHelpCircle } from "react-icons/io";

export function Help() {
  return (
    <IconButton variant="ghost" rounded="full">
      <IoMdHelpCircle />
    </IconButton>
  );
}
