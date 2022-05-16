import { createContext, useContext } from 'react'
import IUser from '../../interfaces/IUser'

export interface IAuthContext {
  signInGoogle: () => Promise<void>
  user?: IUser | null
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const useAuth = () => {
  const authContext = useContext(AuthContext)

  if (!authContext) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return authContext
}

export default AuthContext
