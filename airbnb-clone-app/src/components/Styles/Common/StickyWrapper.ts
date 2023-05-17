import styled from 'styled-components'

type Props = {
  top?: number
}
export const StickyWrapper = styled.div<Props>`
  position: sticky;
  position: -webkit-sticky;
  top: ${(props) => props.top || 0}px;
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  z-index: 10;
`
