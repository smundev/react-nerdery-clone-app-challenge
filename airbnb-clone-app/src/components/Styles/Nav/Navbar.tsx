import { ButtonLink } from '../Common/Button.styled'
import { Chip } from '../Common/Chip.styled'
import { Divider } from '../Common/Divider.styled'
import { CustomSearch, Globe } from '../Icons/Icons'
import { BecomeHost, Navigation } from './Navigation.styled'
import { StyledLogo, StyledNavbar } from './StyledNavbar.styled'
import { BiMenu, BiUserCircle } from 'react-icons/bi'

export const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLogo />
      <Navigation>
        <div>
          <ButtonLink fontWeight={'bold'}>Anywhere</ButtonLink>
          <Divider />
          <ButtonLink fontWeight={'bold'}>Any week</ButtonLink>
          <Divider />
          <ButtonLink>Add guests</ButtonLink>
        </div>
        <CustomSearch />
      </Navigation>
      <BecomeHost>
        <ButtonLink fontWeight={'bold'}>Airbnb your home</ButtonLink>
        <Globe />
      </BecomeHost>
      <Chip>
        <BiMenu fontSize="1.5em" />
        <BiUserCircle fontSize="1.5em" />
      </Chip>
    </StyledNavbar>
  )
}
