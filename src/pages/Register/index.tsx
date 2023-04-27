import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { Input } from "../../components/inputRegister";

import {
    Button,
    Buttons,
    Form,
    Main,
    TabSignIn,
    Title,
    View
} from "./styleds"

type RegisterForm = {
    name: string;
    username: string;
    password: string;
    confirmPassword: string;
}

const schema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório!"),
    username: yup.string().required("Usuário é obrigatório!"),
    password: yup.string().required("Senha é obrigatório!"),
    confirmPassword: yup.string().required("Confirmar senha é obrigatório!")
})

export const Register = () => {
    const { register, handleSubmit, formState } = useForm<RegisterForm>({
        resolver: yupResolver(schema)
    })

    const errors = formState.errors;

    const handleRegister = (data: RegisterForm) => {
        console.log(data);
    }

    return (
        <Main>
            <View>
                <Form onSubmit={handleSubmit(handleRegister)}>
                    <Title>CADASTRE-SE</Title>
                    <Input
                        label="Nome Completo"
                        type="name"
                        placeholder="Informe seu nome"
                        error={errors.name}
                        {...register('name')}
                    />
                    <Input
                        label="Usuario"
                        type='username'
                        placeholder="Informe usuario"
                        error={errors.username}
                        {...register('username')}
                    />
                    <Input
                        label="Senha"
                        type="password"
                        placeholder="Informe sua senha"
                        error={errors.password}
                        {...register('password')}
                    />
                    <Input
                        label="Confirmar Senha"
                        type="confirmPassword"
                        placeholder="Confirme sua senha"
                        error={errors.confirmPassword}
                        {...register('confirmPassword')}
                    />
                    <Buttons>
                        <Button type="submit">CADASTRAR</Button>
                        <TabSignIn href="/">
                            <Button type="button">JÁ TENHO CADASTRO</Button>
                        </TabSignIn>
                    </Buttons>
                </Form>
            </View>
        </Main>
    )
}
