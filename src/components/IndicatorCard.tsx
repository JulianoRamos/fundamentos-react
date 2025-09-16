import { Card, Flex, FormatNumber, FormatNumberProps, Icon, Stat } from "@chakra-ui/react";
import type { ColorPalette } from "@chakra-ui/react/styled-system";
import { IconType } from "react-icons";

interface IndicatorCardProps extends FormatNumberProps {
  label: string;
  value: number;
  indicator: string;
  icon: IconType;
  colorPallete: ColorPalette;
}

export function IndicatorCard({ label, value, indicator, icon, colorPallete, ...rest }: IndicatorCardProps) {
  const isNegative = indicator.trim().startsWith("-");
  const Indicator = isNegative ? Stat.DownIndicator : Stat.UpIndicator;

  return (
    <Card.Root _hover={{ boxShadow: "md" }}>
      <Card.Body flexDir="row" alignItems="center" gap={6}>
        <Stat.Root>
          <Stat.Label fontSize="md">{label}</Stat.Label>
          <Stat.ValueText>
            <FormatNumber value={value} {...rest} />
          </Stat.ValueText>
          <Indicator alignSelf="start">{indicator}</Indicator>
        </Stat.Root>

        <Flex justify="center" align="center" backgroundColor={`${colorPallete}.100`} rounded="lg" p={4}>
          <Icon as={icon} size="xl" color={`${colorPallete}.700`} />
        </Flex>
      </Card.Body>
    </Card.Root>
  );
}
