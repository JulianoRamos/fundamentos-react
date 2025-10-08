import { HStack} from "@chakra-ui/react";
import { StudentsHeader } from "@/components/StudentsHeader";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Students() {
  return (
    <DefaultLayout
      title="Gestão de Estudantes"
      description="Gerencie informações dos estudantes matrículados"
    >
      <HStack>
        <StudentsHeader />
      </HStack>
    </DefaultLayout>
  )
}
