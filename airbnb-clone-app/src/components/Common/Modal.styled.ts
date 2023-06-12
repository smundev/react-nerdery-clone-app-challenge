import styled from 'styled-components'

export const ModalContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(100px, 100%, 568px);
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.body};
  padding: 20px;
  border-radius: 12px;
  gap: 16px;
  position: relative;
`

export const CloseButton = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  top: 15px;
  left: 20px;
  cursor: pointer;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.sizes['font-size-xl']};
  font-weight: ${({ theme }) => theme.sizes['font-weight-light']};
  transition: all 0.3s ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors['neutral-02']};
  }
`

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-weight: ${({ theme }) => theme.sizes['font-weight-bold']};
  font-size: ${({ theme }) => theme.sizes['font-size-l']};
`
