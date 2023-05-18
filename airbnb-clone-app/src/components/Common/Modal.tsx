import React from 'react'
import {
  CloseButton,
  ModalContainer,
  ModalContent,
  ModalHeader,
} from './Modal.styled'
import { Separator } from './Input.styled'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const closeModal = () => {
    onClose()
  }

  if (!isOpen) return null

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <Separator />
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalContainer>
  )
}

export default Modal
