import { FormEvent, useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Input from '../components/Input'

import { useAuth } from '../Context/AuthContext'

const Registro: NextPage = () => {
  const [modeRegister, setModeRegister] = useState<'login' | 'register'>(
    'login'
  )
  const router = useRouter()

  const { loadingAuth, user, signInGoogle, signIn, signUp } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const query = router.asPath.split('?')[1]
    const mode = query ? query.split('=')[1] : null

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

  useEffect(() => {
    setConfirmPassword('')
    setEmail('')
    setPassword('')
  }, [modeRegister])

  useEffect(() => {
    if (user?.token) {
      router.push('/')
    }
  }, [user, router])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      if (modeRegister === 'login') {
        setLoading(true)
        await signIn(email, password)
      } else {
        if (!confirmPassword.trim()) return
        setLoading(true)
        await signUp(email, password)
      }
    } finally {
      setLoading(false)
    }
  }

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

          <form onSubmit={handleSubmit}>
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              label="Senha"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {modeRegister === 'register' && (
              <Input
                label="Confirmar senha"
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
            )}

            <button
              type="submit"
              className={`w-full flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 transition-all text-white rounded-lg px-4 py-3 mt-6 ${
                loading && 'cursor-default hover:bg-indigo-500'
              }`}
              disabled={loading}
            >
              {loading ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid"
                >
                  <circle cx={33} cy={50} fill="#3730a3" r={17}>
                    <animate
                      attributeName="cx"
                      repeatCount="indefinite"
                      dur="1.639344262295082s"
                      keyTimes="0;0.5;1"
                      values="33;67;33"
                      begin="-0.819672131147541s"
                    />
                  </circle>
                  <circle cx={67} cy={50} fill="#312e81" r={17}>
                    <animate
                      attributeName="cx"
                      repeatCount="indefinite"
                      dur="1.639344262295082s"
                      keyTimes="0;0.5;1"
                      values="33;67;33"
                      begin="0s"
                    />
                  </circle>
                  <circle cx={33} cy={50} fill="#3730a3" r={17}>
                    <animate
                      attributeName="cx"
                      repeatCount="indefinite"
                      dur="1.639344262295082s"
                      keyTimes="0;0.5;1"
                      values="33;67;33"
                      begin="-0.819672131147541s"
                    />
                    <animate
                      attributeName="fill-opacity"
                      values="0;0;1;1"
                      calcMode="discrete"
                      keyTimes="0;0.499;0.5;1"
                      dur="1.639344262295082s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              ) : modeRegister === 'login' ? (
                'Entrar'
              ) : (
                'Cadastrar'
              )}
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full border-dashed" />

          <button
            onClick={signInGoogle}
            className="w-full bg-red-500 hover:bg-red-600 transition-all text-white rounded-lg px-4 py-3"
            disabled={loading}
          >
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
