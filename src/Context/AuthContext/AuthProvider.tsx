import { FC, PropsWithChildren, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import firebase from '../../firebase/config'
import AuthContext from '.'

import IUser from '../../interfaces/IUser'
import { useRouter } from 'next/router'

const createCookiesForAuthentication = (token: string) => {
  Cookies.set('admin-template-auth', token, {
    expires: 7
  })
}

const removeCookiesForAuthentication = () => {
  Cookies.remove('admin-template-auth')
}

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

  const [loadingAuth, setLoadingAuth] = useState(true)
  const [user, setUser] = useState<IUser | null>(null)

  const loadUser = async (user: firebase.User | null) => {
    setLoadingAuth(true)

    if (user) {
      const nomalizedUser = await nomalizeUser(user)
      setUser(nomalizedUser)
      createCookiesForAuthentication(nomalizedUser.token)
      setLoadingAuth(false)
      return nomalizedUser
    } else {
      setUser(null)
      removeCookiesForAuthentication()
      setLoadingAuth(false)
      return null
    }
  }

  const signInGoogle = async () => {
    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())

    const user = await loadUser(response.user)

    if (user) {
      router.push('/')
    }
  }

  const signOut = async () => {
    await firebase.auth().signOut()
    loadUser(null)
  }

  useEffect(() => {
    if (Cookies.get('admin-template-auth')) {
      const observer = firebase.auth().onIdTokenChanged(loadUser)

      return () => {
        observer()
      }
    } else {
      setLoadingAuth(false)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        signInGoogle,
        signOut,
        loadingAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
