import styled from 'styled-components'

type AvataProps = {
  url?: string
}

export const StyledUserMenu = styled.div`
  display: relative;
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

export const StyledAvatar = styled.img<AvataProps>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors['neutral-03']};
  cursor: pointer;
  content: url(${({ url }) => url || '/images/placeholder.jpg'});
`
