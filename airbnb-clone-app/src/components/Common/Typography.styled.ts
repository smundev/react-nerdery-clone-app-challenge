import styled from 'styled-components'

type LabelProps = {
  size?: string
  color?: string
}
export const StyledLabel = styled.label<LabelProps>`
  color: ${({ color, theme }) => theme.colors[color || 'normal-text']};
  font-size: ${({ size, theme }) => theme.sizes[size || 'font-size-l']};
`
