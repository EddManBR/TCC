import { app } from '../services/firebase'
import { createContext, useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

import type { ReactNode } from 'react'
import type { User } from 'firebase/auth'

type AuthContextValue = {
  signed: boolean
  signInGoogle: () => Promise<boolean>
  signInEmail: (email: string, password: string) => Promise<void>
}

const provider = new GoogleAuthProvider()
export const AuthContext = createContext<AuthContextValue>({} as AuthContextValue)

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const auth = getAuth(app)
  const [user, setUser] = useState<User>()

  async function signInGoogle() {
    try {
      const result = await signInWithPopup(auth, provider)
      const { accessToken: token } = GoogleAuthProvider.credentialFromResult(result)!

      setUser(result.user)
      sessionStorage.setItem('@firebase:token', token!)

      return true

      // sessionStorage.setItem('@firebase:user', user)

      console.log(`> User logged in using GoogleAuth -> ${token}`)
    } catch (error) {
      console.log(`> An error ocurred when trying to login using GoogleAuth -> ${error}`)
      return false
    }
  }

  async function signInEmail(email: string, password: string) {}

  return (
    <AuthContext.Provider value={{ signed: !!user, signInEmail, signInGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}
