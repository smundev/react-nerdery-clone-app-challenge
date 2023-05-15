import styled from 'styled-components'

type Props = {
  fontWeight?: string
  color?: string
}
export const ButtonLink = styled.button<Props>`
  border: 0;
  background-color: #ffffff;
  font-weight: ${(props) => props.fontWeight || 'normal'};
  color: ${(props) =>
    props.theme.colors[props.color || 'normal-text'] || '000'};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors['primary-02']};
  }
`
