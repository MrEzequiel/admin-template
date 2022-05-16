import { FC, PropsWithChildren, useState } from 'react'
import firebase from '../../firebase/config'
import AuthContext from '.'

import IUser from '../../interfaces/IUser'
import { useRouter } from 'next/router'

const nomalizeUser = async (user: firebase.User) => {
  const token = await user.getIdToken()
  const { uid, displayName, email, photoURL } = user

  const nomalizedUser: IUser = {
    token,
    uid,
    name: displayName,
    email,
    image: photoURL,
    provider: 'google'
  }

  return nomalizedUser
}

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useState<IUser | null>(null)

  const signInGoogle = async () => {
    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())

    if (response.user) {
      const user = await nomalizeUser(response.user)
      setUser(user)
      router.push('/')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signInGoogle
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
