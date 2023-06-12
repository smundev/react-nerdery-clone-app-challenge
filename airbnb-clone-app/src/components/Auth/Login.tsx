import { useEffect, useState } from 'react'
import Modal from '../Common/Modal'
import { Flex } from '../Common/Flex.styled'
import {
  InputGroup,
  Separator,
  StyledInput,
  StyledInputError,
} from '../Common/Input.styled'
import { PrimaryButton } from '../Common/Button.styled'
import { useForm } from 'react-hook-form'
import { MdError } from 'react-icons/md'
import { UserResponse } from '../../api/auth/types'

type Props = {
  user: UserResponse
  error: string | null
  signIn: (email: string, password: string) => void
  clearErrors: () => void
}

export const Login = ({ user, error, signIn, clearErrors }: Props) => {
  const [modalOpen, setModalOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    signIn(data.email, data.password)
  })

  useEffect(() => {
    if (!error) {
      closeLogin()
    }
  }, [user])

  const openLogin = () => {
    setModalOpen(true)
  }

  const closeLogin = () => {
    setModalOpen(false)
    clearErrors()
    reset()
  }

  const LoginForm = () => {
    return (
      <Modal isOpen={modalOpen} onClose={closeLogin} title="Log in">
        <Flex direction="column">
          <form onSubmit={onSubmit}>
            <Flex direction="column" gap="15px">
              <h2>Welcome to Airbnb</h2>
              <InputGroup>
                <StyledInput
                  type="email"
                  placeholder="Email address"
                  {...register('email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  hasError={Boolean(errors.email)}
                />
                {errors.email && (
                  <StyledInputError>
                    <MdError size={16} /> Invalid email or format
                  </StyledInputError>
                )}
                <Separator />
                <StyledInput
                  type="password"
                  placeholder="Password"
                  {...register('password', { required: true })}
                  hasError={Boolean(errors.password)}
                />
                {errors.password && (
                  <StyledInputError>
                    <MdError size={16} />
                    Password is required
                  </StyledInputError>
                )}
              </InputGroup>
              <StyledInputError fontSize="font-size-m">
                {error}
              </StyledInputError>
              <PrimaryButton role="button" type="submit">
                Login
              </PrimaryButton>
            </Flex>
          </form>
        </Flex>
      </Modal>
    )
  }
  return { openLogin, closeLogin, LoginForm }
}
