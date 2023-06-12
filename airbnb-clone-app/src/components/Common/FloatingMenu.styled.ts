import styled, { css } from 'styled-components'

type WrapperProps = {
  width?: string
  expanded?: boolean
  left?: string
  right?: string
  margin?: string
}
export const FloatingMenuWrapper = styled.div<WrapperProps>`
  position: absolute;
  display: ${({ expanded }) => (expanded ? 'flex' : 'none')};
  flex-direction: column;
  padding: 10px 0;
  overflow-x: hidden;
  left: ${({ left }) => (left ? left : 'auto')};
  right: ${({ right }) => (right ? right : 'auto')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  z-index: 10;

  width: ${({ width = 'auto' }) => width};
  align-items: flex-start;
  background: #ffffff;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.17);
  border-radius: 16px;
`
type ItemProps = {
  fontSize?: string
  fontWeight?: string
  separator?: boolean
}

export const FloatingMenuItem = styled.div<ItemProps>`
  width: 100%;
  padding: 8px 16px;
  font-size: ${({ fontSize = 'font-weight-regular', theme }) =>
    theme.sizes[fontSize]};
  font-weight: ${({ fontWeight = 'font-weight-regular', theme }) =>
    theme.sizes[fontWeight]};

  &:hover {
    background-color: ${(props) => props.theme.colors['neutral-01']};
    cursor: pointer;
  }

  ${({ separator }) =>
    separator &&
    css`
      &:not(:first-child)::before {
        content: '';
        display: block;
        height: 1px;
        margin: 4px 0;
        background-color: ${(props) => props.theme.colors['neutral-03']};
      }

      &:hover {
        background-color: transparent;
        cursor: initial;
      }
    `}
`
