import { Flex, Group, Separator } from "@chakra-ui/react";

import { ColorMode } from "./ColorMode";
import { Help } from "./Help";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Notifications } from "./Notifications";
import { Profile } from "./Profile";
import { Settings } from "./Settings";

export function DefaultHeader() {
  return (
    <Flex as="header" w="full" justify="space-between" borderBottomWidth={1} py={2} px={4}>
        <Flex align="center" gap={4}>
          <Menu />

          <Logo />
        </Flex>

        <Group>
          <Notifications />

          <Help />

          <Settings />

          <ColorMode />

          <Separator h={6} orientation="vertical" mx={2} />

          <Profile />
        </Group>
      </Flex>
  )
}
