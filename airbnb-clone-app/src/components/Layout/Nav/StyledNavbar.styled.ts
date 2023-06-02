import styled from 'styled-components'

type NavigationProps = {
  visible?: boolean
}

export const StyledNavbar = styled.nav<NavigationProps>`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  height: 80px;
  border-bottom: ${({ visible, theme }) =>
    !visible ? `${theme.colors['neutral-03']} solid 1px` : 'none'};
  background-color: ${({ theme }) => theme.colors['header-bg']};

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

  @media (max-width: ${({ theme }) => theme.responsive['mobile']}) {
    flex-direction: column;
    border-bottom: none;
  }
`
export const StyledLogo = styled.img`
  display: flex;
  content: url('/images/airbnb-full.svg');
  width: 102px;
  height: 80;
  transition: all 0.2s ease-out;
  cursor: pointer;

  @media (max-width: 870px) {
    content: url('/images/airbnb-logo.svg');
    width: 30px;
  }

  @media (max-width: ${({ theme }) => theme.responsive['mobile']}) {
    content: url('/images/airbnb-full.svg');
    width: 102px;
    height: 80;
  }
`
export const Navigation = styled.div<NavigationProps>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  width: auto;
  padding: 8px 8px 8px 18px;
  background: ${({ theme }) => theme.colors.body};
  border: 1px solid ${({ theme }) => theme.colors['neutral-03']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border-radius: 500px;

  svg {
    color: ${({ theme }) => theme.colors['primary-01']};
    &:hover {
      color: ${({ theme }) => theme.colors['primary-02']};
    }
  }

  cursor: pointer;
  &:hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  }

  div :nth-child(1) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.responsive['mobile']}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 0;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    svg:last-of-type {
      display: none;
    }

    div :nth-child(1) {
      display: flex;
      font-weight: ${({ theme }) => theme.sizes['font-weight-light']};
      font-size: ${({ theme }) => theme.sizes['font-size-xl']};
    }

    div :nth-child(2) {
      display: flex;
      flex-direction: column;
      width: 100%;
      span {
        display: flex;
        font-weight: ${({ theme }) => theme.sizes['font-weight-light']};
        font-size: ${({ theme }) => theme.sizes['font-size-s']};
        color: ${({ theme }) => theme.colors['neutral-07']};
      }
    }

    div :nth-child(3),
    div :nth-child(4),
    div :nth-child(5),
    div :nth-child(6) {
      display: none;
    }
  }
`

export const BecomeHost = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  justify-content: center;
  gap: 16px;

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    margin: 0;
    text-align: inherit;
    padding: 12px;
    border-radius: 15px;

    &:hover {
      background-color: ${({ theme }) => theme.colors['neutral-01']};
    }
    @media (max-width: ${({ theme }) => theme.responsive['mobile']}) {
      display: none;
    }
  }
`

export const StyledFilter = styled.button`
  display: flex;
  justify-self: flex-end;
  aspect-ratio: 1/1;

  padding: 10px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors['neutral-03']};
  border-radius: 50%;
  display: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors['neutral-02']};
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.responsive['mobile']}) {
    display: flex;
  }
`
