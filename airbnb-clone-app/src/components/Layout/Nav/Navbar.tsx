import { ButtonLink } from '../../Common/Button.styled'
import { Divider } from '../../Common/Divider.styled'
import { CustomSearch, Globe } from '../../Icons/Icons'
import {
  SearchButtonWrapper,
  StyledExpandedNavbar,
  StyledExpandedSearch,
} from './ExpandedNavbar.styled'
import { BecomeHost, Navigation, StyledFilter } from './StyledNavbar.styled'
import { StyledLogo, StyledNavbar } from './StyledNavbar.styled'

import { FiSearch } from 'react-icons/fi'
import { RiEqualizerLine } from 'react-icons/ri'
import { useToggle } from '../../hooks/useToggle'
import { useEffect, useState } from 'react'
import { Flex } from '../../Common/Flex.styled'
import { StickyWrapper } from '../../Common/StickyWrapper'
import { UserMenu } from './UserMenu'
import { useClickedOutside } from '../../hooks/useClickedOutside'

const SEARCH_CRITERIA = {
  ANYWHERE: 'ANY',
  ANY_WEEK: 'WEEK',
  ADD_GUESTS: 'GUESTS',
}

export const Navbar = () => {
  const [isExpanded, toggleIsExpanded] = useToggle(false)
  const [activeSearch, setActiveSearch] = useState('')
  const [clickedOutside, componentRef] = useClickedOutside({
    dependencies: [isExpanded],
  })

  const handleSearch = (tab: string) => {
    if (!isExpanded) {
      toggleIsExpanded()
      setActiveSearch(tab)
    }
  }

  useEffect(() => {
    if (isExpanded && clickedOutside) {
      toggleIsExpanded()
      setActiveSearch('')
    }
  }, [clickedOutside])

  return (
    <StickyWrapper zIndex={2} ref={componentRef}>
      <Flex direction="column" gap="15px">
        <StyledNavbar visible={isExpanded}>
          <StyledLogo />
          <Navigation visible={!isExpanded}>
            <div>
              <FiSearch />
              <ButtonLink
                fontWeight="bold"
                onClick={() => {
                  handleSearch(SEARCH_CRITERIA.ANYWHERE)
                }}
              >
                Anywhere
                <span>Any week . Add guests</span>
              </ButtonLink>
              <Divider />
              <ButtonLink
                fontWeight="bold"
                onClick={() => {
                  handleSearch(SEARCH_CRITERIA.ANY_WEEK)
                }}
              >
                Any week
              </ButtonLink>
              <Divider />
              <ButtonLink
                fontWeight="bold"
                color="neutral-06"
                onClick={() => {
                  handleSearch(SEARCH_CRITERIA.ADD_GUESTS)
                }}
              >
                Add guests
              </ButtonLink>
              <StyledFilter>
                <RiEqualizerLine />
              </StyledFilter>
            </div>
            <CustomSearch />
          </Navigation>
          <StyledExpandedNavbar visible={isExpanded} tab={activeSearch}>
            <button>Stays</button>
            <button>Experiences</button>
            <button>Online Experiences</button>
          </StyledExpandedNavbar>
          <BecomeHost>
            <ButtonLink fontWeight={'bold'}>Airbnb your home</ButtonLink>
            <button>
              <Globe />
            </button>
          </BecomeHost>
          <UserMenu />
        </StyledNavbar>
        <StyledExpandedSearch visible={isExpanded} tab={activeSearch}>
          <SearchButtonWrapper>
            <div>
              Where <input type="text" placeholder="Search destinations" />
            </div>
            <div>
              Check in <input type="text" placeholder="Search destinations" />
            </div>
            <div>
              Check out <input type="text" placeholder="Search destinations" />
            </div>
            <div>
              Who <input type="text" placeholder="Add guests" />
            </div>
          </SearchButtonWrapper>
        </StyledExpandedSearch>
      </Flex>
    </StickyWrapper>
  )
}
