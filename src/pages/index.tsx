import { Card, ColorPalette, HStack, SimpleGrid } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BiAward, BiCalendar } from "react-icons/bi";
import { FaArrowTrendUp, FaGraduationCap } from "react-icons/fa6";
import { IoIosBook, IoMdPeople } from "react-icons/io";
import { IoAlertCircleOutline } from "react-icons/io5";
import { CardBase } from "@/components/CardBase";
import { IndicatorCard } from "@/components/IndicatorCard";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Home() {
  const recentActivities = [
    {
      id: 1,
      type: "enrollment",
      title: "Nova matrícula: Maria Silva - Engenharia de Software",
      time: "2 min atrás"
    },
    {
      id: 2,
      type: "grade",
      title: "Notas lançadas: Cálculo I - Prof. João Santos",
      time: "15 min atrás"
    },
    {
      id: 3,
      type: "course",
      title: "Novo curso criado: Análise de Dados",
      time: "1 hora atrás"
    },
    {
      id: 4,
      type: "calendar",
      title: "Evento adicionado: Semana da Computação",
      time: "2 min atrás"
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Início das Provas Finais',
      dateTime: '15 Dez 2025 às 08:00',
      color: "red",
      type: 'exam'
    },
    {
      id: 2,
      title: 'Reunião de Coordenadores',
      dateTime: '18 Dez 2025 às 14:00',
      color: "blue",
      type: 'meeting'
    },
    {
      id: 3,
      title: 'Fim do Semestre',
      dateTime: '20 Dez 2025 às 17:00',
      color: "orange",
      type: 'deadline'
    },
  ];

  const iconMapActivities: Record<string, IconType> = {
    enrollment: IoMdPeople,
    grade: BiAward,
    course: IoIosBook,
    calendar: BiCalendar,
  };

  const iconMapEvents: Record<string, IconType> = {
    exam: IoAlertCircleOutline,
    meeting: IoMdPeople,
    deadline: BiCalendar,
  };

  return (
    <DefaultLayout
      title="Dashboard Acadêmico"
      description="Visão geral do sistema universitário"
    >
      <SimpleGrid row={2}>
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

        <HStack align="start" mt={8} gap={8}>
          <Card.Root>
            <Card.Header>
              <Card.Title>Atividades Recentes</Card.Title>
            </Card.Header>
            <Card.Body gap={8}>
              {recentActivities.map((activity) => {
                const ActivityIcon = iconMapActivities[activity.type] ?? AiFillQuestionCircle;
                return (
                  <CardBase
                    key={activity.id}
                    colorPallete="blue"
                    icon={ActivityIcon}
                    title={activity.title}
                    description={activity.time}
                  />
                );
              })}
            </Card.Body>
          </Card.Root>

          <Card.Root>
            <Card.Header>
              <Card.Title>Próximos Eventos</Card.Title>
            </Card.Header>
            <Card.Body gap={8}>
              {upcomingEvents.map((event) => {
                const EventIcon = iconMapEvents[event.type] ?? AiFillQuestionCircle;
                return (
                  <CardBase
                    key={event.id}
                    colorPallete={event.color as ColorPalette}
                    icon={EventIcon}
                    title={event.title}
                    description={event.dateTime}
                  />
                );
              })}
            </Card.Body>
          </Card.Root>
        </HStack>
      </SimpleGrid>
    </DefaultLayout>
  )
}
