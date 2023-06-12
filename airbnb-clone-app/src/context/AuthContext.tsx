import React from 'react'
import { UserResponse, SignupParams } from '../api/auth/types'
import { useAuth } from '../hooks/useAuth'
import { Login } from '../components/Auth/Login'
import { Signup } from '../components/Auth/Signup'
import { Onboarding } from '../components/Onboarding/Onboarding'

type AuthContextType = {
  user: UserResponse
  loading: boolean
  error: string | null
  signIn: (email: string, password: string) => void
  registerUser: (newUser: SignupParams) => void
  logOut: () => void
  clearErrors: () => void
  openLogin: () => void
  openSignup: () => void
}

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthContext = React.createContext<AuthContextType>({
  user: null,
  loading: false,
  error: null,
  signIn: () => {},
  registerUser: () => {},
  logOut: () => {},
  clearErrors: () => {},
  openLogin: () => {},
  openSignup: () => {},
})

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { user, signIn, registerUser, logOut, loading, error, setError } =
    useAuth()
  const { openLogin, LoginForm } = Login({
    user,
    signIn,
    error,
    clearErrors: () => setError(null),
  })
  const { openSignup, SignUpForm } = Signup({
    user,
    registerUser,
    error,
    clearErrors: () => setError(null),
  })

  const contextValue = {
    user,
    signIn,
    registerUser,
    logOut,
    loading,
    error,
    clearErrors: () => setError(null),
    openLogin,
    openSignup,
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
      {LoginForm()}
      {SignUpForm()}
      <Onboarding user={user} />
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = React.useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }

  return context
}
