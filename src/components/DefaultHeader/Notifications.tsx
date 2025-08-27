import { IconButton } from "@chakra-ui/react";
import { IoMdNotifications } from "react-icons/io";

export function Notifications() {
  return (
    <IconButton variant="ghost" rounded="full">
      <IoMdNotifications />
    </IconButton>
  );
}
