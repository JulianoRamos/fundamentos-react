import { Button, Card, createListCollection, HStack, Input, InputGroup, Portal, Select, SimpleGrid } from "@chakra-ui/react";
import { BiFilterAlt, BiPlus } from "react-icons/bi";
import { BsDownload } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Students() {
  const status = createListCollection({
  items: [
    { label: "Inátivo", value: "inativo" },
    { label: "Atívo", value: "ativo" },
    { label: "Formado", value: "formado" },
  ],
})

  return (
    <DefaultLayout
      title="Gestão de Estudantes"
      description="Gerencie informações dos estudantes matrículados"
    >
      <HStack>
        {/*
          Input - Campo de pesquisa - SearchInput

          Select - Filtro de Status
          Button - Filtros
          Button - Exportar
          Button - Action Button - Criar um novo estudante
        */}

        {/*
        <Card>
          <SearchInput />

          <HStack>
            <FilterStatus />
            <Filter />
            <Export />
            <ActionButton />
          </HStack>
        </Card>
        */}

        <Card.Root>
          <Card.Body>
            <SimpleGrid row={2} rowGap={4}>
              <InputGroup flex="1" startElement={<LuSearch />}>
                <Input placeholder="Buscar por nome, email ou curso..." />
              </InputGroup>

              <HStack>
                <Select.Root collection={status} size="sm" width="320px">
                  <Select.HiddenSelect />
                  <Select.Control>
                    <Select.Trigger>
                      <Select.ValueText placeholder="Todos os Status" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                      <Select.Indicator />
                    </Select.IndicatorGroup>
                  </Select.Control>
                  <Portal>
                    <Select.Positioner>
                      <Select.Content>
                        {status.items.map((item) => (
                          <Select.Item item={item} key={item.value}>
                            {item.label}
                            <Select.ItemIndicator />
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Positioner>
                  </Portal>
                </Select.Root>

                <Button variant="outline">
                  <BiFilterAlt /> Filtros
                </Button>

                <Button variant="outline">
                  <BsDownload /> Exportar
                </Button>

                <Button colorPalette="purple">
                  <BiPlus /> Novo Estudante
                </Button>
              </HStack>
            </SimpleGrid>
          </Card.Body>
        </Card.Root>
      </HStack>
    </DefaultLayout>
  )
}
