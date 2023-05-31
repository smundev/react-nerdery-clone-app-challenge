import { useEffect, useState } from 'react'
import Modal from '../Common/Modal'
import { PrimaryButton } from '../Common/Button.styled'
import { Flex } from '../Common/Flex.styled'
import {
  InputGroup,
  Separator,
  StyledCheckbox,
  StyledDateInput,
  StyledInput,
  StyledInputError,
} from '../Common/Input.styled'
import { StyledLabel } from '../Common/Typography.styled'
import { Controller, useForm } from 'react-hook-form'
import { MdError } from 'react-icons/md'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { SignupParams, UserResponse } from '../../api/auth/types'

type Props = {
  user: UserResponse
  error: string | null
  registerUser: (newUser: SignupParams) => void
  clearErrors: () => void
}

export const Signup = ({ user, registerUser, error, clearErrors }: Props) => {
  const [modalOpen, setModalOpen] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    registerUser({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      birthdate: data.birthdate,
      agreement: data.agreement,
    })
  })

  useEffect(() => {
    if (!error) {
      closeSignup()
    }
  }, [user])

  const openSignup = () => {
    setModalOpen(true)
  }

  const closeSignup = () => {
    setModalOpen(false)
    clearErrors()
    reset()
  }

  const SignUpForm = () => {
    return (
      <Modal isOpen={modalOpen} onClose={closeSignup} title="Sign up">
        <Flex direction="column">
          <form onSubmit={onSubmit}>
            <Flex direction="column" gap="15px">
              <InputGroup>
                <StyledInput
                  type="text"
                  placeholder="First Name"
                  {...register('firstName', { required: true })}
                  hasError={Boolean(errors.firstName)}
                />
                {errors.firstName && (
                  <StyledInputError>
                    <MdError size={16} /> Name is required
                  </StyledInputError>
                )}
                <Separator />
                <StyledInput
                  type="text"
                  placeholder="Last Name"
                  {...register('lastName', { required: true })}
                  hasError={Boolean(errors.lastName)}
                />
                {errors.lastName && (
                  <StyledInputError>
                    <MdError size={16} /> Last name is required
                  </StyledInputError>
                )}
              </InputGroup>
              <StyledLabel color="neutral-07" size="font-size-s">
                Make sure it matches the name on your government ID.
              </StyledLabel>

              <Controller
                control={control}
                name="birthdate"
                render={({ field: { onChange, value }, formState }) => (
                  <>
                    <ReactDatePicker
                      selected={value}
                      onChange={onChange}
                      className="react-datepicker-wrapper"
                      placeholderText="Select date"
                    />
                    <StyledDateInput
                      hasError={Boolean(formState.errors.birthdate)}
                    />
                  </>
                )}
                rules={{ required: true }}
              />

              {errors.birthdate && (
                <StyledInputError>
                  <MdError size={16} /> Birthdate is required
                </StyledInputError>
              )}
              <StyledLabel color="neutral-07" size="font-size-s">
                To sign up, you need to be at least 18. Your birthday won’t be
                shared with other people who use Airbnb.
              </StyledLabel>

              <StyledInput
                type="email"
                placeholder="Email address"
                {...register('email', {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                hasError={Boolean(errors.email)}
                border={true}
              />
              {errors.email && (
                <StyledInputError>
                  <MdError size={16} /> Invalid email or format
                </StyledInputError>
              )}
              <StyledLabel color="neutral-07" size="font-size-s">
                We'll email you trip confirmations and receipts.
              </StyledLabel>

              <StyledInput
                type="password"
                placeholder="Password"
                {...register('password', { required: true })}
                hasError={Boolean(errors.password)}
                border={true}
              />
              {errors.password && (
                <StyledInputError>
                  <MdError size={16} /> Password is required
                </StyledInputError>
              )}
              <p>
                By selecting <strong>Agree and continue</strong>, I agree to
                Airbnb’s &nbsp;
                <a href="#">Terms of Service, Payments Terms of Service</a>, and
                &nbsp;<a href="#">Nondiscrimination Policy</a> and acknowledge
                the&nbsp;<a href="#">Privacy Policy</a>.
              </p>
              <StyledInputError fontSize="font-size-m">
                {error}
              </StyledInputError>
              <PrimaryButton type="submit">Agree and continue</PrimaryButton>
              <Separator />
              <StyledLabel color="neutral-08" size="font-size-s">
                Airbnb will send you members-only deals, inspiration, marketing
                emails, and push notifications. You can opt out of receiving
                these at any time in your account settings or directly from the
                marketing notification.
              </StyledLabel>

              <Flex>
                <StyledCheckbox {...register('agreement')} />
                <StyledLabel color="neutral-08" size="font-size-s">
                  I don't want to receive marketing messages from Airbnb.
                </StyledLabel>
              </Flex>
            </Flex>
          </form>
        </Flex>
      </Modal>
    )
  }
  return { openSignup, closeSignup, SignUpForm }
}
