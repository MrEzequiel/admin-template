interface IUser {
  uid: string
  email: string | null
  name: string | null
  token: string
  provider: 'google' | 'email'
  image: string | null
}

export default IUser
