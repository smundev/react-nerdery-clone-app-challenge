import styled, { createGlobalStyle } from 'styled-components'

type InputProps = {
  border?: boolean
  hasError?: boolean
}

type ErrorProps = {
  fontSize?: string
}

export const StyledInput = styled.input<InputProps>`
  padding: 5px;
  border-radius: 8px;
  height: 46px;
  font-size: ${({ theme }) => theme.sizes['font-size-l']};
  font-weight: ${({ theme }) => theme.sizes['font-weight-regular']};
  border: ${({ border, hasError, theme }) =>
    hasError
      ? `1px solid ${theme.colors['error-01']}`
      : border
      ? `1px solid ${theme.colors['neutral-04']}`
      : 'none'};
`

export const StyledInputError = styled.span<ErrorProps>`
  display: flex;
  align-items: center;
  font-size: ${({ theme, fontSize }) => theme.sizes[fontSize || 'font-size-s']};
  color: ${({ theme }) => theme.colors['error-01']};
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors['neutral-04']};
  box-sizing: border-box;
`

export const Separator = styled.div<{ w?: string }>`
  height: 1px;
  width: ${({ w }) => w || '100%'};
  background-color: ${({ theme }) => theme.colors['neutral-04']};
  margin: 0;
`
export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  accent-color: black;
`
export const StyledDateInput = createGlobalStyle<InputProps>`
  .react-datepicker-wrapper{
    width: 100%;
    height: 46px;
  }
  .react-datepicker-wrapper div{
    width: 100%;
    height: 46px;
  padding: 5px;
  border-radius: 8px;
  height: 46px;
  font-size: ${({ theme }) => theme.sizes['font-size-l']};
  font-weight: ${({ theme }) => theme.sizes['font-weight-regular']};
  border: ${({ hasError, theme }) =>
    hasError
      ? `1px solid ${theme.colors['error-01']}`
      : `1px solid ${theme.colors['neutral-04']}`}}
`
