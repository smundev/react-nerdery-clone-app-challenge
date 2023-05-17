import styled from 'styled-components'

export const StyledScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;

  /* Hide scroll bar in all browsers */

  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const StyledScrollButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27px;
  height: 27px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors['neutral-05']};
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  transition: 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? 0 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  }
`
