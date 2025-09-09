import { Card, Flex, FormatNumber, HStack, Icon, Stat } from "@chakra-ui/react";
import { FaArrowTrendUp, FaGraduationCap } from "react-icons/fa6";
import { IoIosBook, IoMdPeople } from "react-icons/io";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout
      title="Dashboard Acadêmico"
      description="Visão geral do sistema universitário"
    >
      <HStack gap={8}>
        <Card.Root>
          <Card.Body flexDir="row" alignItems="center" gap={6}>
            <Stat.Root>
              <Stat.Label fontSize="md">Total de Estudantes</Stat.Label>
              <Stat.ValueText>
                <FormatNumber value={2847} />
              </Stat.ValueText>
              <Stat.UpIndicator alignSelf="start">+12% este mês</Stat.UpIndicator>
            </Stat.Root>

            <Flex justify="center" align="center" backgroundColor="blue.100" rounded="lg" p={4}>
              <Icon size="xl" color="blue.700" >
                <IoMdPeople />
              </Icon>
            </Flex>
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Body flexDir="row" alignItems="center" gap={6}>
            <Stat.Root>
              <Stat.Label fontSize="md">Professores Ativos</Stat.Label>
              <Stat.ValueText>
                <FormatNumber value={198} />
              </Stat.ValueText>
              <Stat.UpIndicator alignSelf="start">+3% este mês</Stat.UpIndicator>
            </Stat.Root>

            <Flex justify="center" align="center" backgroundColor="green.100" rounded="lg" p={4}>
              <Icon size="xl" color="green.700" >
                <FaGraduationCap />
              </Icon>
            </Flex>
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Body flexDir="row" alignItems="center" gap={6}>
            <Stat.Root>
              <Stat.Label fontSize="md">Cursos Oferecidos</Stat.Label>
              <Stat.ValueText>
                <FormatNumber value={24} />
              </Stat.ValueText>
              <Stat.UpIndicator alignSelf="start">+2% este mês</Stat.UpIndicator>
            </Stat.Root>

            <Flex justify="center" align="center" backgroundColor="purple.100" rounded="lg" p={4}>
              <Icon size="xl" color="purple.700" >
                <IoIosBook />
              </Icon>
            </Flex>
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Body flexDir="row" alignItems="center" gap={6}>
            <Stat.Root>
              <Stat.Label fontSize="md">Taxa de Aprovação</Stat.Label>
              <Stat.ValueText>
                <FormatNumber value={0.892} style="percent" maximumFractionDigits={2} minimumFractionDigits={2} />
              </Stat.ValueText>
              <Stat.UpIndicator alignSelf="start">+2.1% este mês</Stat.UpIndicator>
            </Stat.Root>

            <Flex justify="center" align="center" backgroundColor="orange.100" rounded="lg" p={4}>
              <Icon size="xl" color="orange.700" >
                <FaArrowTrendUp />
              </Icon>
            </Flex>
          </Card.Body>
        </Card.Root>
      </HStack>
    </DefaultLayout>
  )
}
