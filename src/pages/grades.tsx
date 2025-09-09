import { Heading } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Grades() {
  return (
    <DefaultLayout
      title="Gestão de Notas"
      description="Gerencie as notas e avaliações dos estudantes"
    >
      <Heading color="red">Notas DO SCOTTI!</Heading>
    </DefaultLayout>
  )
}
