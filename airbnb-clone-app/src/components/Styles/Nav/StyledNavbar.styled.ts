import styled from 'styled-components'

export const StyledNavbar = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 10vh;
  background-color: ${({ theme }) => theme.colors['header-bg']};

  @media (max-width: 840px) {
    flex-direction: column;
  }
`
export const StyledLogo = styled.img`
  content: url('/images/airbnb-full.svg');
  width: 102px;
  height: 80;
  transition: all 0.2s ease-out;

  @media (max-width: 870px) {
    content: url('/images/airbnb-logo.svg');
    width: 30px;
  }

  @media (max-width: 840px) {
    content: url('/images/airbnb-full.svg');
    width: 102px;
    height: 80;
  }
`
