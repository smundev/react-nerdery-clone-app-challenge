import { useState } from 'react'
import { login } from '../api/auth/login'
import { signup } from '../api/auth/signup'
import { UserResponse, SignupParams } from '../api/auth/types'

const loadFromLocalStorage = () => {
  const storedUser = localStorage.getItem('airbnb-logged-user')
  return storedUser ? JSON.parse(storedUser) : null
}

export const useAuth = () => {
  const [user, setUser] = useState<UserResponse>(loadFromLocalStorage)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true)
      const user = await login({ email, password })
      window.localStorage.setItem(
        'airbnb-logged-user',
        JSON.stringify(user) || ''
      )
      setUser(user)
      setLoading(false)
      setError(null)
    } catch (error: any) {
      setLoading(false)
      if (error?.response?.data?.includes('Cannot find user'))
        setError('The user does not exist')
      else if (error?.response?.data?.includes('Incorrect password'))
        setError('The password is incorrect')
      else setError('An error has ocurred while trying to login')
      setUser(null)
    }
  }

  const registerUser = async (newUser: SignupParams) => {
    try {
      setLoading(true)
      const user = await signup(newUser)
      window.localStorage.setItem(
        'airbnb-logged-user',
        JSON.stringify(user) || ''
      )
      window.localStorage.setItem('show-onboarding-guidelines', 'true')
      setUser(user)
      setLoading(false)
      setError(null)
    } catch (error: any) {
      if (error?.response?.data?.includes('Email already exists'))
        setError('The email is already in use')
      else setError('An error has ocurred while trying to create your account')
      setLoading(false)
      setUser(null)
    }
  }

  const logOut = () => {
    window.localStorage.removeItem('airbnb-logged-user')
    window.localStorage.removeItem('show-onboarding-guidelines')
    setError(null)
    setUser(null)
  }

  return { user, signIn, registerUser, logOut, loading, error, setError }
}
