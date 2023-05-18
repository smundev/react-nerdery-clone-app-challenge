import styled from 'styled-components'

type Props = {
  top?: number
  mobileTop?: number
  zIndex?: number
}
export const StickyWrapper = styled.div<Props>`
  position: sticky;
  position: -webkit-sticky;
  top: ${(props) => props.top || 0}px;
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  z-index: ${(props) => props.zIndex || 0};

  @media (max-width: ${({ theme }) => theme.responsive['mobile']}) {
    top: ${(props) => props.mobileTop || 0}px;
  }
`
