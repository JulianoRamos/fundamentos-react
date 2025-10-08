import { IconButton } from "@chakra-ui/react";
import { LuSettings } from "react-icons/lu";

export function Settings() {
  return (
    <IconButton variant="ghost" rounded="full">
      <LuSettings />
    </IconButton>
  );
}
