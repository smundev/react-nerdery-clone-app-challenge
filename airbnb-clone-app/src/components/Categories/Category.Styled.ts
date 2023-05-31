import styled from 'styled-components'

type Props = {
  showShadow?: boolean
}

export const StyledCategory = styled.div<Props>`
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 2rem 1px;
  width: auto;
  height: 100%;
  background-color: #fff;
  z-index: 1;

  box-shadow: ${({ showShadow }) =>
    !showShadow ? '0px 4px 4px rgba(0, 0, 0, 0.1)' : 'none'};

  transition: all 200ms ease-in-out;

  @media (max-width: ${({ theme }) => theme.responsive['mobile']}) {
    padding: 0;
    margin-top: 0;
    padding: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    button {
      display: none;
    }
  }
`
