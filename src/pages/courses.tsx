import { Heading } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Courses() {
  return (
    <DefaultLayout
      title="Gestão de Cursos"
      description="Gerencie os cursos oferecidos pela universidade"
    >
      <Heading color="red">Cursos DO SCOTTI!</Heading>
    </DefaultLayout>
  )
}
