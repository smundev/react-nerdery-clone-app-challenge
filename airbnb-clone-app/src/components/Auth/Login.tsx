import { useState } from 'react'
import Modal from '../Common/Modal'
import { Flex } from '../Common/Flex.styled'
import { InputGroup, Separator, StyledInput } from '../Common/Input.styled'
import { PrimaryButton } from '../Common/Button.styled'

export const Login = () => {
  const [modalOpen, setModalOpen] = useState(false)
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
    console.log('Form submitted:', name, email, password)
  }

  const LoginForm = () => {
    return (
      <Modal isOpen={modalOpen} onClose={closeModal} title="Log in">
        <Flex direction="column">
          <form onSubmit={handleSubmit}>
            <Flex direction="column" gap="15px">
              <h2>Welcome to Airbnb</h2>
              <InputGroup>
                <StyledInput
                  type="email"
                  value={email}
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Separator />
                <StyledInput
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
              <PrimaryButton type="submit">Agree and continue</PrimaryButton>
            </Flex>
          </form>
        </Flex>
      </Modal>
    )
  }
  return [openModal, closeModal, LoginForm]
}
