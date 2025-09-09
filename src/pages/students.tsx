import { Heading } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Students() {
  return (
    <DefaultLayout
      title="Gestão de Estudantes"
      description="Gerencie informações dos estudantes matrículados"
    >
      <Heading color="red">Estudantes DO SCOTTI!</Heading>
    </DefaultLayout>
  )
}
