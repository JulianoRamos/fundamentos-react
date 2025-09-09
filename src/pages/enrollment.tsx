import { Heading } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Enrollment() {
  return (
    <DefaultLayout
      title="Gestão de Matrículas"
      description="Gerencie as matrículas dos estudantes para o próximo semestre"
    >
      <Heading color="red">Matriculas DO SCOTTI!</Heading>
    </DefaultLayout>
  )
}
