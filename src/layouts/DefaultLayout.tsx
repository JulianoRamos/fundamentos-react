import { Flex, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { DefaultHeader } from "@/components/DefaultHeader";

type DefaultLayoutProps = {
  children: ReactNode;
  title: string;
  description: string;
}

export function DefaultLayout({ children, title, description }: DefaultLayoutProps) {
  return (
    <Flex flexDir="column">
      <DefaultHeader />

      <Flex flexDir="column" p={8}>
        <Heading fontSize="3xl" mb={4}>{title}</Heading>

        <Text color="fg.muted" fontSize="md" mb={4}>{description}</Text>

        {children}
      </Flex>
    </Flex>
  );
}
