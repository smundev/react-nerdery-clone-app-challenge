import { useState } from 'react'
import Modal from '../Common/Modal'
import { PrimaryButton } from '../Common/Button.styled'
import { Flex } from '../Common/Flex.styled'
import {
  InputGroup,
  Separator,
  StyledCheckbox,
  StyledInput,
} from '../Common/Input.styled'
import { StyledLabel } from '../Common/Typography.styled'

export const Signup = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', name, email, password, birthDate)
  }

  const SignUpForm = () => {
    return (
      <Modal isOpen={modalOpen} onClose={closeModal} title="Sign up">
        <Flex direction="column">
          <form onSubmit={handleSubmit}>
            <Flex direction="column" gap="15px">
              <InputGroup>
                <StyledInput
                  type="text"
                  value={firstName}
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Separator />
                <StyledInput
                  type="text"
                  value={lastName}
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </InputGroup>
              <StyledLabel color="neutral-07" size="font-size-s">
                Make sure it matches the name on your government ID.
              </StyledLabel>

              <StyledInput
                type="text"
                value={lastName}
                placeholder="Birthdate"
                onChange={(e) => setBirthDate(e.target.value)}
                border={true}
              />
              <StyledLabel color="neutral-07" size="font-size-s">
                To sign up, you need to be at least 18. Your birthday won’t be
                shared with other people who use Airbnb.
              </StyledLabel>

              <StyledInput
                type="email"
                value={email}
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                border={true}
              />
              <StyledLabel color="neutral-07" size="font-size-s">
                We'll email you trip confirmations and receipts.
              </StyledLabel>

              <StyledInput
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                border={true}
              />
              <StyledLabel size="font-size-m">
                By selecting <strong>Agree and continue</strong>, I agree to
                Airbnb’s
                <a href="#"> Terms of Service, Payments Terms of Service</a>,
                and
                <a href="#"> Nondiscrimination Policy</a> and acknowledge the
                <a href="#"> Privacy Policy</a>.
              </StyledLabel>

              <PrimaryButton type="submit">Agree and continue</PrimaryButton>
              <Separator />
              <StyledLabel color="neutral-08" size="font-size-s">
                Airbnb will send you members-only deals, inspiration, marketing
                emails, and push notifications. You can opt out of receiving
                these at any time in your account settings or directly from the
                marketing notification.
              </StyledLabel>

              <Flex>
                <StyledCheckbox />
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
  return [openModal, closeModal, SignUpForm]
}
