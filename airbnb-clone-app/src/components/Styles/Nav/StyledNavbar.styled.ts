import styled from 'styled-components'

export const StyledNavbar = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 80px;
  border-bottom: solid 1px ${({ theme }) => theme.colors['neutral-03']};
  background-color: ${({ theme }) => theme.colors['header-bg']};

  @media (max-width: 840px) {
    flex-direction: column;
    border-bottom: none;
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

export const StyledUserMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 8px 8px 10px;
  gap: 4px;
  border: 1px solid ${({ theme }) => theme.colors['neutral-03']};
  cursor: pointer;
  border-radius: 500px;
  transition: all 0.2s ease-out;

  &:hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
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
