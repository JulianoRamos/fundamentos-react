import { Button, Link as ChakraLink, Field, Flex, Heading, HStack, Image, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { PasswordInput } from "@/components/ui/password-input";
import { toaster } from "@/components/ui/toaster";
import { useSession } from "@/contexts/SessionContext";
import loginImage from "../../public/assets/login-image.gif";

const signInFormSchema = z.object({
  email: z.email("Digite um e-mail válido").nonempty("O e-mail é obrigatorio"),
  password: z.string().nonempty("A senha é obrigatoria").min(8, "A senha deve ter pelo menos 8 caracteres"),
});

type SignInFormData = z.infer<typeof signInFormSchema>;

export default function Login() {
  const { user, signIn } = useSession();

  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signInFormSchema)
  });

  async function handleSignIn({ email, password }: SignInFormData) {
    const promise = new Promise<void>(async (resolve, reject) => {
      try {
        await signIn({ email, password });
        resolve();
        router.push('/');
      } catch {
        reject();
      }
    });

    toaster.promise(promise, {
      success: { title: 'Login realizado com sucesso.' },
      error: { title: 'E-mail ou senha incorretos.' },
      loading: { title: 'Carregando informações do usuário, aguarde...' }
    });
  }

  useEffect(() => {
    console.log(user);
  }, [user])

  return (
    <Flex w="100vw" h="100vh">
      <Flex w="50%" bg="#2C73EB" align="center" justify="center">
        <Image w={500} h={500} src={loginImage.src} />
      </Flex>
      <VStack w="50%" justify="center">
        <Stack>
          <Heading as="h1" color="black" fontSize="3xl" fontWeight="bold">Login</Heading>

          <Text color="gray.400" fontSize="lg" fontWeight="normal">Se você já é membro, você pode fazer login com seu endereço de e-mail e senha.</Text>

          <VStack as="form" onSubmit={handleSubmit(handleSignIn)} align="flex-start" gap={6} mt={10}>
            <Field.Root invalid={!!errors.email}>
              <Field.Label color="gray.500" fontSize="md">
                Email
              </Field.Label>
              <Input type="email" h={16} colorPalette="blue" borderRadius="md" color="black" {...register("email")} />
              <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.password}>
              <Field.Label color="gray.500" fontSize="md">
                Senha
              </Field.Label>
              <PasswordInput h={16} colorPalette="blue" borderRadius="md" color="black" {...register("password")} />
              <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
            </Field.Root>

            <Checkbox colorPalette="blue" color="gray.500" fontSize="md" fontWeight="medium">
              Lembre-me
            </Checkbox>

            <Button type="submit" w="full" h={16} colorPalette="blue" borderRadius="md" fontSize="md" fontWeight="medium">
              Entrar
            </Button>
          </VStack>

          <HStack justify="center" gap={1} mt={10}>
            <Text color="gray.500" fontSize="md" fontWeight="medium">Não possui uma conta?</Text>
            <ChakraLink color="blue.500" asChild>
              <NextLink href="/sign-up">Clique aqui!</NextLink>
            </ChakraLink>
          </HStack>
        </Stack>
      </VStack>
    </Flex>
  )
}
