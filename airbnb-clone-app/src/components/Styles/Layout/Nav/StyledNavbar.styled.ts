import styled from 'styled-components'

type NavigationProps = {
  visible?: boolean
}

export const StyledNavbar = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  height: 80px;
  border-bottom: solid 1px ${({ theme }) => theme.colors['neutral-03']};
  background-color: ${({ theme }) => theme.colors['header-bg']};

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

export const StyledUserMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 0;
  padding: 8px 8px 8px 10px;
  gap: 4px;
  border: 1px solid ${({ theme }) => theme.colors['neutral-03']};
  cursor: pointer;
  border-radius: 500px;
  transition: all 0.2s ease-out;

  &:hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: ${({ theme }) => theme.responsive['mobile']}) {
    display: none;
  }
`

export const StyledAvatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors['neutral-03']};
  cursor: pointer;
  content: url('/images/placeholder.jpg');
`
export const Navigation = styled.div<NavigationProps>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  width: 350px;
  padding: 8px 8px 8px 18px;
  background: ${({ theme }) => theme.colors.body};
  border: 1px solid ${({ theme }) => theme.colors['neutral-03']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border-radius: 500px;
  transition: all 0.2s ease-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  }

  div :nth-child(1) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.responsive['mobile']}) {
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
