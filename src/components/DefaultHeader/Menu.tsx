import { CloseButton, Drawer, IconButton, Portal, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { FaGraduationCap, FaUserPlus } from "react-icons/fa6";
import { IoIosBook, IoMdMenu, IoMdPeople } from "react-icons/io";
import { IoCalendarClear, IoLogOut } from "react-icons/io5";
import { PiFileTextFill } from "react-icons/pi";
import { RiDashboardFill } from "react-icons/ri";
import { signOut } from "@/contexts/SessionContext";
import { NavigationItem } from "./NavigationItem";

export function Menu() {
  const router = useRouter();

  return (
    <Drawer.Root size="sm" placement="start">
      <Drawer.Trigger asChild>
        <IconButton variant="ghost" rounded="full">
          <IoMdMenu />
        </IconButton>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Cesul - Sistema Academico</Drawer.Title>
            </Drawer.Header>

            <Drawer.Body>
              <VStack>
                <NavigationItem
                  icon={<RiDashboardFill />}
                  label="Dashboard"
                  onClick={() => router.push('/')}
                  defaultChecked={router.asPath === '/'}
                />

                <NavigationItem
                  icon={<IoMdPeople />}
                  label="Estudantes"
                  onClick={() => router.push('/students')}
                  defaultChecked={router.asPath === '/students'}
                />

                <NavigationItem
                  icon={<FaGraduationCap />}
                  label="Professores"
                  onClick={() => router.push('/teachers')}
                  defaultChecked={router.asPath === '/teachers'}
                />

                <NavigationItem
                  icon={<IoIosBook />}
                  label="Cursos"
                  onClick={() => router.push('/courses')}
                  defaultChecked={router.asPath === '/courses'}
                />

                <NavigationItem
                  icon={<PiFileTextFill />}
                  label="Notas"
                  onClick={() => router.push('/grades')}
                  defaultChecked={router.asPath === '/grades'}
                />

                <NavigationItem
                  icon={<FaUserPlus />}
                  label="Matrículas"
                  onClick={() => router.push('/enrollment')}
                  defaultChecked={router.asPath === '/enrollment'}
                />

                <NavigationItem
                  icon={<IoCalendarClear />}
                  label="Calendário"
                  onClick={() => router.push('/calendar')}
                  defaultChecked={router.asPath === '/calendar'}
                />
              </VStack>
            </Drawer.Body>

            <Drawer.Footer>
              <NavigationItem icon={<IoLogOut />} label="Sair" onClick={signOut} />
            </Drawer.Footer>

            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
