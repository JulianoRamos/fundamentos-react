import { CloseButton, Drawer, IconButton, Portal, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { LuBookOpen, LuCalendar, LuFileText, LuGraduationCap, LuLayoutDashboard, LuLogOut, LuMenu, LuUserPlus, LuUsers } from "react-icons/lu";
import { signOut } from "@/contexts/SessionContext";
import { NavigationItem } from "./NavigationItem";

export function Menu() {
  const router = useRouter();

  return (
    <Drawer.Root size="sm" placement="start">
      <Drawer.Trigger asChild>
        <IconButton variant="ghost" rounded="full">
          <LuMenu />
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
                  icon={<LuLayoutDashboard />}
                  label="Dashboard"
                  onClick={() => router.push('/')}
                  defaultChecked={router.asPath === '/'}
                />

                <NavigationItem
                  icon={<LuUsers />}
                  label="Estudantes"
                  onClick={() => router.push('/students')}
                  defaultChecked={router.asPath === '/students'}
                />

                <NavigationItem
                  icon={<LuGraduationCap />}
                  label="Professores"
                  onClick={() => router.push('/teachers')}
                  defaultChecked={router.asPath === '/teachers'}
                />

                <NavigationItem
                  icon={<LuBookOpen />}
                  label="Cursos"
                  onClick={() => router.push('/courses')}
                  defaultChecked={router.asPath === '/courses'}
                />

                <NavigationItem
                  icon={<LuFileText />}
                  label="Notas"
                  onClick={() => router.push('/grades')}
                  defaultChecked={router.asPath === '/grades'}
                />

                <NavigationItem
                  icon={<LuUserPlus />}
                  label="Matrículas"
                  onClick={() => router.push('/enrollment')}
                  defaultChecked={router.asPath === '/enrollment'}
                />

                <NavigationItem
                  icon={<LuCalendar />}
                  label="Calendário"
                  onClick={() => router.push('/calendar')}
                  defaultChecked={router.asPath === '/calendar'}
                />
              </VStack>
            </Drawer.Body>

            <Drawer.Footer>
              <NavigationItem icon={<LuLogOut />} label="Sair" onClick={signOut} />
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
