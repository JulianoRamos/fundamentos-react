import { ColorPalette, Flex, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface RecentActivityProps {
  icon: IconType;
  title: string;
  time: string;
  colorPallete: ColorPalette;
}

export function RecentActivity({icon, title, time, colorPallete }: RecentActivityProps) {
  return (
    <HStack gap={6}>
      <Flex justify="center" align="center" backgroundColor={`${colorPallete}.100`} rounded="lg" p={2}>
        <Icon as={icon} size="xl" color={`${colorPallete}.700`} />
      </Flex>

      <VStack align="start" gap={1}>
        <Heading>{title}</Heading>
        <Text>{time}</Text>
      </VStack>
    </HStack>
  )
}
