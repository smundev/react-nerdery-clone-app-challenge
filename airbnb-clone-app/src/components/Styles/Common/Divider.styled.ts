import styled from 'styled-components'

export const Divider = styled.span`
  width: 24px;
  height: 0;

  margin-left: 16px;
  margin-right: 16px;

  border: 1px solid ${({ theme }) => theme.colors['neutral-02']};
  transform: rotate(90deg);
  flex: none;
  order: 1;
  flex-grow: 0;
`
