import { IconButton } from "@chakra-ui/react";
import { IoMdSettings } from "react-icons/io";

export function Settings() {
  return (
    <IconButton variant="ghost" rounded="full">
      <IoMdSettings />
    </IconButton>
  );
}
