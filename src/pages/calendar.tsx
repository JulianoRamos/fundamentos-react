import { Heading } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Calendar() {
  return (
    <DefaultLayout
      title="Calendário Acadêmico"
      description="Gerencie eventos, aulas, provas e prazos importantes"
    >
      <Heading color="red">Calendario DO SCOTTI!</Heading>
    </DefaultLayout>
  )
}
