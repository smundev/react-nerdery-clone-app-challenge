import styled from 'styled-components'

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 8px 8px 18px;
  gap: 24px;
  background: ${({ theme }) => theme.colors.body};
  border: 1px solid ${({ theme }) => theme.colors['neutral-03']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border-radius: 500px;
  transition: all 0.2s ease-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  }
`

export const BecomeHost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    margin: 0;
    text-align: inherit;
    padding: 12px;
    border-radius: 15px;

    &:hover {
      background-color: ${({ theme }) => theme.colors['neutral-01']};
    }
  }
`
