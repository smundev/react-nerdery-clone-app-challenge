export type User = {
  id: string
  firstName: string
  lastName: string
  email: string
  avatar: string
}

export type UserResponse = {
  accessToken: string
  user: User
} | null

export type LoginParams = {
  email: string
  password: string
}

export type SignupParams = {
  firstName: string
  lastName: string
  email: string
  birthdate: string
  agreement: boolean
  password: string
}
