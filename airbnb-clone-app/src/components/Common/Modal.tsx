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
  showHeader?: boolean
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  showHeader = true,
}) => {
  const closeModal = () => {
    onClose()
  }

  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  if (!isOpen) return null

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalContent>
        {showHeader && (
          <>
            <ModalHeader>{title}</ModalHeader>
            <Separator />
            <CloseButton onClick={closeModal}>&times;</CloseButton>
          </>
        )}
        {children}
      </ModalContent>
    </ModalContainer>
  )
}

export default Modal
