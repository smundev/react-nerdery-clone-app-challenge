import { ButtonLink } from '../Common/Button.styled'
import { Divider } from '../Common/Divider.styled'
import { CustomSearch, Globe } from '../Icons/Icons'
import { BecomeHost, Navigation } from './Navigation.styled'
import {
  StyledAvatar,
  StyledLogo,
  StyledNavbar,
  StyledUserMenu,
} from './StyledNavbar.styled'
import { BiMenu } from 'react-icons/bi'

export const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLogo />
      <Navigation>
        <div>
          <ButtonLink fontWeight="bold">Anywhere</ButtonLink>
          <Divider />
          <ButtonLink fontWeight="bold">Any week</ButtonLink>
          <Divider />
          <ButtonLink fontWeight="bold" color="neutral-06">
            Add guests
          </ButtonLink>
        </div>
        <CustomSearch />
      </Navigation>
      <BecomeHost>
        <ButtonLink fontWeight={'bold'}>Airbnb your home</ButtonLink>
        <button>
          <Globe />
        </button>
      </BecomeHost>
      <StyledUserMenu>
        <BiMenu fontSize="1.5em" />
        <StyledAvatar />
      </StyledUserMenu>
    </StyledNavbar>
  )
}
