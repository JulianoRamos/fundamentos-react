import { HStack } from "@chakra-ui/react";
import { FaArrowTrendUp, FaGraduationCap } from "react-icons/fa6";
import { IoIosBook, IoMdPeople } from "react-icons/io";
import { IndicatorCard } from "@/components/IndicatorCard";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout
      title="Dashboard Acadêmico"
      description="Visão geral do sistema universitário"
    >
      <HStack gap={8}>
        <IndicatorCard
          label="Total de Estudantes"
          value={2847}
          indicator="+12% este mês"
          icon={IoMdPeople}
          colorPallete="blue"
        />

        <IndicatorCard
          label="Professores Ativos"
          value={198}
          indicator="+3% este mês"
          icon={FaGraduationCap}
          colorPallete="green"
        />

        <IndicatorCard
          label="Cursos Oferecidos"
          value={24}
          indicator="+2% este mês"
          icon={IoIosBook}
          colorPallete="purple"
        />

        <IndicatorCard
          label="Taxa de Aprovação"
          value={0.892}
          style="percent"
          maximumFractionDigits={2}
          minimumFractionDigits={2}
          indicator="+2.1% este mês"
          icon={FaArrowTrendUp}
          colorPallete="orange"
        />
      </HStack>
    </DefaultLayout>
  )
}
