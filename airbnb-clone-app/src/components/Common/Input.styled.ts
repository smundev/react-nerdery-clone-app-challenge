import styled from 'styled-components'

type InputProps = {
  border?: boolean
}

export const StyledInput = styled.input<InputProps>`
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors['neutral-04']};
  border-radius: 8px;
  height: 46px;
  font-size: ${({ theme }) => theme.sizes['font-size-l']};
  font-weight: ${({ theme }) => theme.sizes['font-weight-regular']};
  border: ${({ border, theme }) =>
    border ? `1px solid ${theme.colors['neutral-04']}` : 'none'};
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors['neutral-04']};
  box-sizing: border-box;
`

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors['neutral-04']};
  margin: 0;
`
export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  accent-color: black;
`
