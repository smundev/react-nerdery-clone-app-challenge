import { ButtonLink } from '../../Common/Button.styled'
import { Divider } from '../../Common/Divider.styled'
import { CustomSearch, Globe } from '../../Icons/Icons'
import {
  CountriesWrapper,
  SearchButtonWrapper,
  SearchOption,
  StyledExpandedNavbar,
  StyledExpandedSearch,
  WhereWrapper,
} from './ExpandedNavbar.styled'
import { BecomeHost, Navigation, StyledFilter } from './StyledNavbar.styled'
import { StyledLogo, StyledNavbar } from './StyledNavbar.styled'

import { FiSearch } from 'react-icons/fi'
import { RiEqualizerLine } from 'react-icons/ri'
import { useToggle } from '../../../hooks/useToggle'
import { useEffect, useState } from 'react'
import { Flex } from '../../Common/Flex.styled'
import { StickyWrapper } from '../../Common/StickyWrapper'
import { UserMenu } from './UserMenu'
import { useClickedOutside } from '../../../hooks/useClickedOutside'
import { FloatingMenuWrapper } from '../../Common/FloatingMenu.styled'

const SEARCH_CRITERIA = {
  ANYWHERE: 'ANY',
  ANY_WEEK: 'WEEK',
  ADD_GUESTS: 'GUESTS',
}

export const Navbar = () => {
  const [isExpanded, toggleIsExpanded] = useToggle(false)
  const [activeSearch, setActiveSearch] = useState('')
  const [whereOpen, toggleWhereOpen] = useToggle(false)

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
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (whereOpen) toggleWhereOpen()
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [whereOpen, isExpanded])

  const handleAdvancedSearch = () => {
    toggleWhereOpen()
  }

  useEffect(() => {
    if (isExpanded && clickedOutside) {
      toggleIsExpanded()
      if (whereOpen) toggleWhereOpen()
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
            <WhereWrapper>
              <SearchOption onClick={toggleWhereOpen}>
                Where
                <input type="text" placeholder="Search destinations" />
              </SearchOption>
              <FloatingMenuWrapper
                expanded={whereOpen}
                left="0"
                margin="10px 10px"
              >
                <CountriesWrapper>
                  <Flex direction="column">
                    <img
                      src="/images/flexible.webp"
                      alt="paris"
                      width="122"
                      height="122"
                    />
                    <span>I am Flexible</span>
                  </Flex>
                  <Flex direction="column">
                    <img
                      src="/images/europe.webp"
                      alt="paris"
                      width="122"
                      height="122"
                    />
                    <span>Europe</span>
                  </Flex>
                  <Flex direction="column">
                    <img
                      src="/images/guatemala.webp"
                      alt="paris"
                      width="122"
                      height="122"
                    />
                    <span>Guatemala</span>
                  </Flex>
                  <Flex direction="column">
                    <img
                      src="/images/southamerica.webp"
                      alt="paris"
                      width="122"
                      height="122"
                    />
                    <span>South America</span>
                  </Flex>
                  <Flex direction="column">
                    <img
                      src="/images/mexico.webp"
                      alt="paris"
                      width="122"
                      height="122"
                    />
                    <span>Mexico</span>
                  </Flex>
                  <Flex direction="column">
                    <img
                      src="/images/usa.webp"
                      alt="paris"
                      width="122"
                      height="122"
                    />
                    <span>United States</span>
                  </Flex>
                </CountriesWrapper>
              </FloatingMenuWrapper>
            </WhereWrapper>
            <SearchOption>
              Check in <input type="text" placeholder="Search destinations" />
            </SearchOption>
            <SearchOption>
              Check out <input type="text" placeholder="Search destinations" />
            </SearchOption>
            <SearchOption>
              Who <input type="text" placeholder="Add guests" />
            </SearchOption>
          </SearchButtonWrapper>
        </StyledExpandedSearch>
      </Flex>
    </StickyWrapper>
  )
}
