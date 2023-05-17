import styled from 'styled-components'

export const Chip = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 8px 8px 10px;
  gap: 4px;
  border: 1px solid ${({ theme }) => theme.colors['neutral-03']};

  border-radius: 500px;
`
