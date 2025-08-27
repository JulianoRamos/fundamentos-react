import { Flex, Group, IconButton, Image, Separator } from "@chakra-ui/react";
import { IoMdHelpCircle, IoMdMenu, IoMdMoon, IoMdNotifications, IoMdSettings, IoMdSunny } from "react-icons/io";

import { Avatar } from "../ui/avatar";
import { useColorMode } from "../ui/color-mode";
import { Logo } from "./Logo";

export function DefaultHeader() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex w="full" justify="space-between" borderBottomWidth={1} py={2} px={4}>
        <Flex align="center" gap={4}>
          <IconButton variant="ghost" rounded="full">
            <IoMdMenu />
          </IconButton>

          <Logo />
        </Flex>

        <Group>
          <IconButton variant="ghost" rounded="full">
            <IoMdNotifications />
          </IconButton>

          <IconButton variant="ghost" rounded="full">
            <IoMdHelpCircle />
          </IconButton>

          <IconButton variant="ghost" rounded="full">
            <IoMdSettings />
          </IconButton>

          <IconButton variant="ghost" rounded="full" onClick={toggleColorMode}>
            {colorMode === 'dark' ? <IoMdMoon /> : <IoMdSunny />}
          </IconButton>

          <Separator h={6} orientation="vertical" mx={2} />

          <Avatar name="Juliano Ramos" colorPalette="purple" src="https://avatars.githubusercontent.com/u/6463742?v=4" />
        </Group>
      </Flex>
  )
}
