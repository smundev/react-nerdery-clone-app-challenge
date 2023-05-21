import React from 'react'
import { UserResponse, SignupParams } from '../api/auth/types'
import { useAuth } from '../hooks/useAuth'

type AuthContextType = {
  user: UserResponse
  loading: boolean
  error: string | null
  signIn: (email: string, password: string) => void
  register: (newUser: SignupParams) => void
  logOut: () => void
  clearErrors: () => void
}

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthContext = React.createContext<AuthContextType>({
  user: null,
  loading: false,
  error: null,
  signIn: () => {},
  register: () => {},
  logOut: () => {},
  clearErrors: () => {},
})

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, signIn, register, logOut, loading, error, setError] = useAuth()

  const contextValue = {
    user,
    signIn,
    register,
    logOut,
    loading,
    error,
    clearErrors: () => setError(null),
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = React.useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }

  return context
}
