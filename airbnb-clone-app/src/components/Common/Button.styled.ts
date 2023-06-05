import styled from 'styled-components'

type Props = {
  fontWeight?: string
  color?: string
  size?: string
}
export const ButtonLink = styled.button<Props>`
  border: 0;
  background-color: #ffffff;
  font-weight: ${({ theme, fontWeight }) =>
    fontWeight || theme.sizes['font-weight-light']};
  font-size: ${({ theme, size }) => size || theme.sizes['font-size-m']};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  color: ${(props) =>
    props.theme.colors[props.color || 'normal-text'] || '000'};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors['primary-02']};
  }
`

export const PrimaryButton = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: ${(props) => props.theme.sizes[props.size || 'btn-h-md']};
  border: 1px solid ${(props) => props.theme.colors['neutral-06']};
  border-radius: 12px;
  padding: 7px 16px;
  background-color: ${(props) => props.theme.colors['primary-02']};
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight || theme.sizes['font-weight-medium']};
  font-size: ${({ size, theme }) => theme.sizes[size || 'font-size-l']};
  color: ${(props) => props.theme.colors[props.color || 'secondary-text']};
  cursor: pointer;
  transition: all 0.5s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors['primary-01']};
  }
`

export const SecondaryButton = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: ${(props) => props.theme.sizes[props.size || 'btn-h-md']};
  border: 1px solid ${(props) => props.theme.colors['neutral-06']};
  border-radius: 12px;
  padding: 7px 16px;
  background-color: transparent;
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight || theme.sizes['font-weight-medium']};
  font-size: ${({ size, theme }) => theme.sizes[size || 'font-size-l']};
  color: ${(props) =>
    props.theme.colors[props.color || 'normal-text'] || '000'};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors['secondary-01']};
  }
`
