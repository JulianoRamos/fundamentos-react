import { Portal, Select, SelectRootProps } from "@chakra-ui/react";

interface FilterSelectProps extends SelectRootProps {
  placeholder: string;
}

export function FilterSelect({ collection, placeholder, value, onValueChange }: FilterSelectProps) {
  return (
    <Select.Root
      collection={collection}
      size="md"
      width="320px"
      value={value}
      onValueChange={onValueChange}
    >
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={placeholder} />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {collection.items.map((item) => (
              <Select.Item item={item} key={item.value}>
                {item.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}
