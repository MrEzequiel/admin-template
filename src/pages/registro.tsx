import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Input from '../components/Input'

const Registro: NextPage = () => {
  const [modeRegister, setModeRegister] = useState<'login' | 'register'>(
    'login'
  )
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  useEffect(() => {
    const query = router.asPath.split('?')[1]
    const mode = query.split('=')[1]

    if (!mode) {
      setModeRegister('login')
      router.push('/registro?mode=login')
    }

    if (mode === 'register') {
      setModeRegister('register')
    } else {
      setModeRegister('login')
    }
  }, [])

  return (
    <>
      <Head>
        <title>
          Registro: {modeRegister === 'login' ? 'Entrar' : 'Cadastrar'}
        </title>
      </Head>

      <div className="flex h-screen items-center justify-center">
        <div className="relative w-1/2 h-screen hidden md:block">
          <Image
            src="/auth_image.png"
            alt="imagem da tela de autenticação"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className="flex-1 p-10">
          <h1 className="text-xl font-bold mb-5">
            {modeRegister === 'login'
              ? 'Entre com a Sua Conta'
              : 'Cadastre-se na Plataforma'}
          </h1>

          <Input label="Email" type="email" />
          <Input label="Senha" type="password" />
          <Input label="Confirmar senha" type="password" />

          <button className="w-full bg-indigo-500 hover:bg-indigo-600 transition-all text-white rounded-lg px-4 py-3 mt-6">
            Entrar
          </button>

          <hr className="my-6 border-gray-300 w-full border-dashed" />

          <button className="w-full bg-red-500 hover:bg-red-600 transition-all text-white rounded-lg px-4 py-3">
            Entrar com Google
          </button>

          <div className="mt-6">
            {modeRegister === 'login' ? (
              <p>
                <a
                  className="cursor-pointer"
                  onClick={() => {
                    router.push('/registro?mode=register')
                    setModeRegister('register')
                  }}
                >
                  <span className="text-gray-500">Não tem conta? </span>
                  <span className="text-indigo-500">Cadastre-se</span>
                </a>
              </p>
            ) : (
              <p>
                <a
                  className="cursor-pointer"
                  onClick={() => {
                    setModeRegister('login')
                  }}
                >
                  <span className="text-gray-500">Já tem conta? </span>
                  <span className="text-indigo-500">Entrar</span>
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Registro
