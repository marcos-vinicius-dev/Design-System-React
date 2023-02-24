import { Envelope, Lock } from 'phosphor-react'
import { Button } from '../components/Button/Button'
import { Checkbox } from '../components/Checkbox/Checkbox'
import { Heading } from '../components/Heading/Heading'
import { Logo } from '../components/Logo'
import { Text } from '../components/Text/Text'
import { TextInput } from '../components/TextInput/TextInput'
import { FormEvent, useState } from 'react'
import axios from 'axios'


export function SignIn() {

    const [isUserSignedIn, setIsUserSignedIn] = useState(false)

    function handleSignIn (event: FormEvent) {
        event.preventDefault()

        axios.post('/sessions', {
            email: "teste@gmail.com",
            password: "testte"
        })

        setIsUserSignedIn(true)
    }


    return (
        <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center">
            <header className="flex flex-col items-center">
                <Logo/>

                <Heading size="lg">
                    Ignite Lab
                </Heading>

                <Text size="lg" className="text-gray-400 m-1">
                    Faça login e comece a usar
                </Text>

                <form 
                    className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4"
                    onSubmit={handleSignIn}
                >
                    { isUserSignedIn && <Text>Login realizado!</Text> }
                    <label
                        className="flex flex-col gap-3"
                        htmlFor="email"
                    >
                        <Text className="font-semibold">Endereço de e-mail</Text>
                        <TextInput.Root>
                            <TextInput.Icon>
                                <Envelope/>
                            </TextInput.Icon>
                            <TextInput.Input 
                                id="email"
                                type="email"
                                placeholder="Digite seu e-mail"
                            />
                        </TextInput.Root>
                    </label>

                    <label
                        className="flex flex-col gap-3"
                        htmlFor="password"
                    >
                        <Text className="font-semibold">Sua senha</Text>
                        <TextInput.Root>
                            <TextInput.Icon>
                                <Lock/>
                            </TextInput.Icon>
                            <TextInput.Input 
                                id="password"
                                type="password"
                                placeholder="*******"
                            />
                        </TextInput.Root>
                    </label>

                    <label htmlFor="remenber" className="flex items-center gap-2">
                        <Checkbox id="remenber" />
                        <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
                    </label>

                    <Button
                        className="mt-4"
                        type="submit"
                    >Entrar na plataforma</Button>
                </form>
            </header>

            <footer className="flex flex-col items-center gap-4 mt-8">
                <Text size="sm" asChild>
                    <a href="/" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
                </Text>
                <Text size="sm" asChild>
                    <a href="/" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</a>
                </Text>
            </footer>
        </div>
    )
}
