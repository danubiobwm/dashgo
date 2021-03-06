import {
  Box,
  Divider,
  Flex,
  Heading,
  VStack,
  SimpleGrid,
  Stack,
  HStack,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useMutation} from 'react-query'

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../../components/Form/Input";

import Header from "../../components/Header";
import { SideBar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("nome obrigatorio"),
  email: yup.string().required("E-mail obrigatorio").email("E-mail Invalido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "No mínino 6 caracteres"),
  password_confirmation: yup.string().oneOf([null, yup.ref("password")]),
});

export default function CreateUser() {
  const router = useRouter();

  const createUser = useMutation(async (user: CreateUserFormData) => {
    const response = await api.post('users',{
      user:{
        ...user,
        created_at: new Date(),
      }
    })
    return response.data.user
  },{
    onSuccess: ()=>{
      queryClient.invalidateQueries('users')
    }
  })

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });
  const { errors } = formState;

  const handleCreadeUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    await createUser.mutateAsync(values);
    router.push('/users')
  };

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreadeUser)}
        >
          <Heading size="lg" fontSize="normal">
            Criar Usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing={["8", "16"]} paddingRight="10">
            <SimpleGrid
              minChildWidth="240px"
              spacing={["8", "16"]}
              width="100%"
            >
              <Input
                name="name"
                label="Nome Completo"
                error={errors.name}
                {...register("name")}
              />
              <Input
                name="email"
                label="E-mail"
                error={errors.email}
                {...register("email")}
              />
            </SimpleGrid>
            <SimpleGrid
              minChildWidth="240px"
              spacing={["8", "16"]}
              width="100%"
            >
              <Input
                name="password"
                type="password"
                label="Senha"
                error={errors.password}
                {...register("password")}
              />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmação da Senha"
                error={errors.password_confirmation}
                {...register("password_confirmation")}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="6">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha" border="0">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                colorScheme="pink"
                border="0"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

