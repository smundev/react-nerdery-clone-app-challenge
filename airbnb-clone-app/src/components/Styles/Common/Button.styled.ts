import styled from 'styled-components'

type Props = {
  fontWeight?: string
}
export const ButtonLink = styled.button<Props>`
  border: 0;
  background-color: #ffffff;
  font-weight: ${(props) => props.fontWeight || 'normal'};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors['primary-02']};
  }
`
