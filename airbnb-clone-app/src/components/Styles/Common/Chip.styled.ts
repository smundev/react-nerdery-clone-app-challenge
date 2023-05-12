import styled from 'styled-components'

export const Chip = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  gap: 4px;
  border: 1px solid ${({ theme }) => theme.colors['neutral-03']};

  border-radius: 500px;
`
