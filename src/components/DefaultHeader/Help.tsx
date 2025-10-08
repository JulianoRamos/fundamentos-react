import { IconButton } from "@chakra-ui/react";
import { LuCircleHelp } from "react-icons/lu";

export function Help() {
  return (
    <IconButton variant="ghost" rounded="full">
      <LuCircleHelp />
    </IconButton>
  );
}
