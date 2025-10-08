import { IconButton } from "@chakra-ui/react";
import { LuBell } from "react-icons/lu";

export function Notifications() {
  return (
    <IconButton variant="ghost" rounded="full">
      <LuBell />
    </IconButton>
  );
}
