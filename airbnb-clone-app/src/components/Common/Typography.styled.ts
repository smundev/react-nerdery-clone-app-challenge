import styled from 'styled-components'

type LabelProps = {
  size?: string
  color?: string
  fontWeight?: string
}
export const StyledLabel = styled.label<LabelProps>`
  display: flex;
  align-items: center;
  color: ${({ color, theme }) => theme.colors[color || 'normal-text']};
  font-size: ${({ size, theme }) => theme.sizes[size || 'font-size-l']};
  font-weight: ${({ fontWeight, theme }) =>
    theme.sizes[fontWeight || 'font-weight-regular']};
`

export const StyledAnchor = styled.label<LabelProps>`
  display: flex;
  align-items: center;
  color: ${({ color, theme }) => theme.colors[color || 'normal-text']};
  font-size: ${({ size, theme }) => theme.sizes[size || 'font-size-l']};
  text-decoration: underline;
  font-weight: ${({ fontWeight, theme }) =>
    theme.sizes[fontWeight || 'font-weight-regular']};
  cursor: pointer;
`
