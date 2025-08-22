import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { DefaultHeader } from "@/components/DefaultHeader";

type DefaultLayoutProps = {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Flex flexDir="column">
      <DefaultHeader />

      {children}
    </Flex>
  );
}
