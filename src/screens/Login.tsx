import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth'

import Head from '../components/shared/Head'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { FcGoogle } from 'react-icons/fc'

export default function Login() {
  const { signInGoogle } = useContext(AuthContext)
  const navigate = useNavigate()

  async function handleGoogleClick() {
    const googleSigned = await signInGoogle()
    if (googleSigned) navigate('/')
  }

  return (
    <div className="flex flex-col relative w-screen h-screen bg-gray-800">
      <Head />
      <div className="flex justify-center items-center h-full">
        <div className="bg-[#7b5cc9] p-8 max-w-[400px] w-full mx-auto rounded-2xl">
          <h1 className="text-2xl font-bold text-center text-white">
            Para continuar, faça login no Moodie
          </h1>

          <button
            className="flex justify-center bg-white relative my-4 px-3 py-2 w-full rounded-md hover:text-violet-900"
            onClick={handleGoogleClick}
          >
            <FcGoogle className="absolute left-3 top-2 mr-4 text-2xl" />
            <span>Entrar com o Google</span>
          </button>

          <form onSubmit={(e) => e.preventDefault()}>
            <label className="text-white block mb-4">
              <span className="font-semibold">E-mail</span>
              <input
                required
                className="w-full rounded-md bg-violet-400 mt-1 px-3 py-2 border-none  focus:bg-violet-400 placeholder:text-violet-300"
                type="email"
                placeholder="john@doe.com"
              />
            </label>

            <label className="text-white block mb-6">
              <span className="font-semibold">Senha</span>
              <input
                required
                className="w-full rounded-md  bg-violet-400 mt-1 px-3 py-2 border-none  focus:bg-violet-400 placeholder:text-violet-300"
                type="password"
                placeholder="••••••••"
              />
            </label>

            {/* <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-semibold text-violet-900 hover:text-purple-800">
                  Forgot your password?
                </a>
              </div>
            </div> */}

            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md  bg-violet-800 mt-2 py-2 px-4 font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-violet-500 group-hover:text-violet-400"
                  aria-hidden="true"
                />
              </span>
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
