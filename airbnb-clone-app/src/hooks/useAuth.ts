import { useEffect, useState } from 'react'
import { login } from '../api/auth/login'
import { signup } from '../api/auth/signup'
import { UserResponse, SignupParams } from '../api/auth/types'

export const useAuth = () => {
  const [user, setUser] = useState<UserResponse>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('airbnb-logged-user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

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
    } catch (error) {
      setLoading(false)
      setError('An error has ocurred while trying to login')
      setUser(null)
    }
  }

  const register = async (newUser: SignupParams) => {
    try {
      setLoading(true)
      const user = await signup(newUser)
      window.localStorage.setItem(
        'airbnb-logged-user',
        JSON.stringify(user) || ''
      )
      setUser(user)
      setLoading(false)
      setError(null)
    } catch (error: any) {
      if (error?.response?.data?.includes('already exists'))
        setError('The user already exists')
      else setError('An error has ocurred while trying to create your account')

      setLoading(false)
      setUser(null)
    }
  }

  const logOut = () => {
    window.localStorage.removeItem('airbnb-logged-user')
    setError(null)
    setUser(null)
  }

  return [user, signIn, register, logOut, loading, error, setError] as const
}
