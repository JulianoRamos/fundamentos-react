import { Button, CloseButton, createListCollection, Dialog, HStack, Input, Portal, Select, VStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { api } from "@/services/apiClient";
import { AddButton } from "./AddButton";
import { Field } from "./ui/field";

const studentFormSchema = z.object({
  fullname: z
    .string()
    .nonempty("O nome completo é obrigatorio"),
  email: z.email("Digite um e-mail válido").nonempty("O e-mail é obrigatorio"),
  course: z.string().nonempty("O curso é obrigatorio"),
  semester: z.string().nonempty("O semestre é obrigatorio"),
  status: z.string().nonempty("O status é obrigatorio"),
  enrollmentDate: z.date("A data é obrigatoria"),
});

type AddStudentFormData = z.infer<typeof studentFormSchema>;

export function AddStudentDialog() {
    const { register, handleSubmit, formState: { errors } } = useForm<AddStudentFormData>({
      resolver: zodResolver(studentFormSchema)
    });

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

  async function handleStudent(data: AddStudentFormData) {
    console.log("OK:", data);
    const response = await api.post('/students', data);

    if (response.status === 201) {

    }
  }

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
          <Dialog.Content
            as="form"
            onSubmit={handleSubmit(handleStudent)}
          >
            <Dialog.Header>
              <Dialog.Title>Novo Estudante</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <VStack gap={4}>
                <Field
                  label="Nome Completo"
                  invalid={!!errors.fullname}
                  errorText={errors.fullname?.message}
                >
                  <Input
                    {...register("fullname")}
                    placeholder="Informe o nome completo"
                  />
                </Field>

                <Field
                  label="Email"
                  invalid={!!errors.email}
                  errorText={errors.email?.message}
                >
                  <Input {...register("email")} placeholder="Informe o email" />
                </Field>

                <Field
                  label="Curso"
                  invalid={!!errors.course}
                  errorText={errors.course?.message}
                >
                  <Select.Root collection={courses}>
                    <Select.HiddenSelect {...register("course")} />
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
                </Field>

                <HStack w="full">
                  <Field
                    label="Semestre"
                    invalid={!!errors.semester}
                    errorText={errors.semester?.message}
                  >
                    <Select.Root collection={semesters}>
                      <Select.HiddenSelect {...register("semester")} />
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
                  </Field>

                  <Field
                    label="Status"
                    invalid={!!errors.status}
                    errorText={errors.status?.message}
                  >
                    <Select.Root collection={status}>
                      <Select.HiddenSelect {...register("status")} />
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
                  </Field>
                </HStack>

                <Field
                    label="Data de Matrícula"
                    invalid={!!errors.enrollmentDate}
                    errorText={errors.enrollmentDate?.message}
                  >
                  <Input
                    {...register("enrollmentDate", { valueAsDate: true })}
                    type="date"
                  />
                </Field>
              </VStack>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancelar</Button>
              </Dialog.ActionTrigger>
              <Button type="submit" colorPalette="purple">Criar Estudante</Button>
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
