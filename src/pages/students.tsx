import { VStack} from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { useEffect } from "react";
import { StudentsHeader } from "@/components/StudentsHeader";
import { Table } from "@/components/Table";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { api } from "@/services/apiClient";

type Student = {
  fullname: string,
  email: string,
  course: string,
  semester: string,
  status: string,
  enrollment: string,
}

export default function Students() {
  const data: Student[] = [
    {
      fullname: "Ana Clara Ribeiro",
      email: "ana.ribeiro@example.com",
      course: "Design Gráfico",
      semester: "3º",
      status: "Ativo",
      enrollment: "202200145",
    },
    {
      fullname: "Lucas Fernandes",
      email: "lucas.fernandes@example.com",
      course: "Engenharia de Software",
      semester: "5º",
      status: "Ativo",
      enrollment: "202101223",
    },
    {
      fullname: "Mariana Souza",
      email: "mariana.souza@example.com",
      course: "Arquitetura e Urbanismo",
      semester: "7º",
      status: "Trancado",
      enrollment: "202000912",
    },
    {
      fullname: "Rafael Martins",
      email: "rafael.martins@example.com",
      course: "Publicidade e Propaganda",
      semester: "4º",
      status: "Ativo",
      enrollment: "202200334",
    },
    {
      fullname: "Beatriz Lima",
      email: "beatriz.lima@example.com",
      course: "Design de Produto",
      semester: "2º",
      status: "Ativo",
      enrollment: "202301121",
    },
    {
      fullname: "Pedro Henrique Alves",
      email: "pedro.alves@example.com",
      course: "Ciência da Computação",
      semester: "6º",
      status: "Inativo",
      enrollment: "202001589",
    },
    {
      fullname: "Carolina Oliveira",
      email: "carolina.oliveira@example.com",
      course: "Moda",
      semester: "8º",
      status: "Ativo",
      enrollment: "201901002",
    },
    {
      fullname: "Felipe Santos",
      email: "felipe.santos@example.com",
      course: "Design de Interiores",
      semester: "1º",
      status: "Ativo",
      enrollment: "202402031",
    },
    {
      fullname: "Juliana Costa",
      email: "juliana.costa@example.com",
      course: "Engenharia de Produção",
      semester: "9º",
      status: "Formando",
      enrollment: "201800876",
    },
    {
      fullname: "Vinícius Rocha",
      email: "vinicius.rocha@example.com",
      course: "Análise e Desenvolvimento de Sistemas",
      semester: "5º",
      status: "Ativo",
      enrollment: "202101777",
    },
  ];

  const columnHelper = createColumnHelper<Student>()

  const columns = [
    columnHelper.accessor("fullname", {
      header: "Estudante",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("course", {
      header: "Curso",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("semester", {
      header: "Semestre",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => info.getValue(),
    }),
     columnHelper.accessor("enrollment", {
      header: "Matrícula",
      cell: (info) => info.getValue(),
    }),
  ];

  useEffect(() => {
    async function load() {
      const { data } = await api.get('/students');

      console.log(data);
    }

    load();
  }, []);

  return (
    <DefaultLayout
      title="Gestão de Estudantes"
      description="Gerencie informações dos estudantes matrículados"
    >
      <VStack align="start">
        <StudentsHeader />

        <Table data={data} columns={columns} />
      </VStack>
    </DefaultLayout>
  )
}
