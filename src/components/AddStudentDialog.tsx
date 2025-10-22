import { Button, CloseButton, createListCollection, Dialog, HStack, Input, Portal, Select } from "@chakra-ui/react";
import { AddButton } from "./AddButton";
import { Field } from "./ui/field";

export function AddStudentDialog() {
  const courses = createListCollection({
    items: [
      { label: "Análise e Desenvolvimento de Sistemas", value: "ads" },
      { label: "Direito", value: "direito" },
      { label: "Administração", value: "adm" },
    ],
  });

  const semesters = createListCollection({
    items: [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
      { label: "6", value: "6" },
      { label: "7", value: "7" },
      { label: "8", value: "8" },
      { label: "9", value: "9" },
      { label: "10", value: "10" },
    ],
  });

  const status = createListCollection({
    items: [
      { label: "Atívo", value: "ativo" },
      { label: "Inátivo", value: "inativo" },
      { label: "Formado", value: "formado" },
    ],
  });

  return (
    <Dialog.Root lazyMount>
      <Dialog.Trigger asChild>
        <AddButton>
          Novo Estudante
        </AddButton>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Novo Estudante</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Field label="Nome Completo">
                <Input placeholder="Informe o nome completo" />
              </Field>

              <Field label="Email">
                <Input placeholder="Informe o email" />
              </Field>

              <Select.Root collection={courses}>
                <Select.HiddenSelect />
                <Select.Label>Curso</Select.Label>
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText placeholder="Selecione um curso" />
                  </Select.Trigger>
                  <Select.IndicatorGroup>
                    <Select.Indicator />
                  </Select.IndicatorGroup>
                </Select.Control>

                <Select.Positioner>
                  <Select.Content>
                    {courses.items.map((course) => (
                      <Select.Item item={course} key={course.value}>
                        {course.label}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Select.Root>

              <HStack>
                <Select.Root collection={semesters}>
                  <Select.HiddenSelect />
                  <Select.Label>Semestre</Select.Label>
                  <Select.Control>
                    <Select.Trigger>
                      <Select.ValueText placeholder="Selecione um semestre" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                      <Select.Indicator />
                    </Select.IndicatorGroup>
                  </Select.Control>

                  <Select.Positioner>
                    <Select.Content>
                      {semesters.items.map((semester) => (
                        <Select.Item item={semester} key={semester.value}>
                          {semester.label}
                          <Select.ItemIndicator />
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Positioner>
                </Select.Root>

                <Select.Root collection={status}>
                  <Select.HiddenSelect />
                  <Select.Label>Status</Select.Label>
                  <Select.Control>
                    <Select.Trigger>
                      <Select.ValueText placeholder="Selecione um status" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                      <Select.Indicator />
                    </Select.IndicatorGroup>
                  </Select.Control>

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
                </Select.Root>
              </HStack>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancelar</Button>
              </Dialog.ActionTrigger>
              <Button>Criar Estudante</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
