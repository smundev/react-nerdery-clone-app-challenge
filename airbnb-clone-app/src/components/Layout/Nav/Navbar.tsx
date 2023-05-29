import { ButtonLink } from '../../Common/Button.styled'
import { Divider } from '../../Common/Divider.styled'
import {
  CountriesWrapper,
  DatesWrapper,
  ExpandedDatesWrapper,
  ExpandedMenuWrapper,
  GuestsWrapper,
  SearchButtonWrapper,
  SearchOption,
  StyledCountry,
  StyledExpandedNavbar,
  StyledExpandedSearch,
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
import { useSearchParams } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import { IoSearchCircle } from 'react-icons/io5'
import { Separator } from '../../Common/Input.styled'
import { StyledAnchor, StyledLabel } from '../../Common/Typography.styled'
import { HorizontalStep } from '../../Common/HorizontalStep'
import DateRangeSelector from './DateRangeSelector'

const SEARCH_CRITERIA = {
  ANYWHERE: 'ANY',
  ANY_WEEK: 'WEEK',
  ADD_GUESTS: 'GUESTS',
}

const REGION_SEARCH_CRITERIA = {
  FLEXIBLE: { label: 'Flexible', code: '' },
  EUROPE: { label: 'Europe', code: 'EU' },
  GUATEMALA: { label: 'Guatemala', code: 'GT' },
  MEXICO: { label: 'Mexico', code: 'MX' },
  SOUTH_AMERICA: { label: 'South America', code: 'SA' },
  USA: { label: 'USA', code: 'US' },
}

const TOGGLE_MENU_OPTIONS = {
  COUNTRY: 'COUNTRY',
  GUESTS: 'GUESTS',
  DATES: 'DATES',
  CLOSE_ALL: 'ALL',
}

export const Navbar = () => {
  const [isExpanded, toggleIsExpanded] = useToggle(false)
  const [countryMenuOpen, toggleCountryMenuOpen] = useToggle(false)
  const [guestsMenuOpen, toggleGuestsMenuOpen] = useToggle(false)
  const [datesMenuOpen, toggleDatesMenuOpen] = useToggle(false)
  const [region, setRegion] = useState<{ label: string; code: string } | null>(
    null
  )
  const [manualLocation, setManualLocation] = useState('')
  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)
  const [pets, setPets] = useState(0)
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const location = useLocation()

  const [clickedOutsideAdvancedSearch, componentRef] = useClickedOutside({
    dependencies: [isExpanded],
  })

  const handleToggleMenu = (menu: string) => {
    switch (menu) {
      case TOGGLE_MENU_OPTIONS.COUNTRY:
        toggleCountryMenuOpen()
        if (guestsMenuOpen) toggleGuestsMenuOpen()
        if (datesMenuOpen) toggleDatesMenuOpen()
        break
      case TOGGLE_MENU_OPTIONS.GUESTS:
        toggleGuestsMenuOpen()
        if (countryMenuOpen) toggleCountryMenuOpen()
        if (datesMenuOpen) toggleDatesMenuOpen()
        break
      case TOGGLE_MENU_OPTIONS.DATES:
        toggleDatesMenuOpen()
        if (countryMenuOpen) toggleCountryMenuOpen()
        if (guestsMenuOpen) toggleGuestsMenuOpen()
        break
      case TOGGLE_MENU_OPTIONS.CLOSE_ALL:
        if (guestsMenuOpen) toggleGuestsMenuOpen()
        if (countryMenuOpen) toggleCountryMenuOpen()
        break
    }
  }

  const handleSearch = (tab: string) => {
    handleToggleMenu(tab)

    if (!isExpanded) {
      toggleIsExpanded()
    }
  }

  const handleResetFilters = () => {
    setRegion(null)
    setManualLocation('')
    setAdults(0)
    setChildren(0)
    setInfants(0)
    setPets(0)
    if (isExpanded) toggleIsExpanded()
    navigate({
      pathname: location.pathname,
      search: '',
    })
  }

  const handleManualLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation()
    setRegion(null)
    handleToggleMenu(TOGGLE_MENU_OPTIONS.CLOSE_ALL)
    setManualLocation(event.target.value)
  }

  const updateCountry = (selectedRegion: { label: string; code: string }) => {
    if (selectedRegion.code === REGION_SEARCH_CRITERIA.FLEXIBLE.code) {
      setRegion(null)
    } else {
      setRegion(selectedRegion)
    }
    setManualLocation(selectedRegion.label)
    handleToggleMenu(TOGGLE_MENU_OPTIONS.CLOSE_ALL)
  }

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isExpanded) toggleIsExpanded()
      }
      handleToggleMenu(TOGGLE_MENU_OPTIONS.CLOSE_ALL)
    }

    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [isExpanded])

  useEffect(() => {
    if (isExpanded && !datesMenuOpen && clickedOutsideAdvancedSearch) {
      toggleIsExpanded()
      handleToggleMenu(TOGGLE_MENU_OPTIONS.CLOSE_ALL)
    }
  }, [clickedOutsideAdvancedSearch])

  const handleAdvancedSearch = () => {
    handleToggleMenu(TOGGLE_MENU_OPTIONS.CLOSE_ALL)
    const accommodates = adults + children

    if (accommodates > 0)
      searchParams.set('accommodates_gte', accommodates.toString())
    else searchParams.delete('accommodates_gte')

    if (region) {
      searchParams.set('address.country_code', region.code)
      searchParams.delete('address.country')
    } else {
      searchParams.delete('address.country_code')
      if (manualLocation !== REGION_SEARCH_CRITERIA.FLEXIBLE.label)
        searchParams.set('address.country', manualLocation)
      else searchParams.delete('address.country')
    }

    navigate({
      pathname: location.pathname,
      search: searchParams.toString(),
    })
  }

  return (
    <StickyWrapper zIndex={2} ref={componentRef}>
      <Flex direction="column" gap="15px">
        <StyledNavbar visible={isExpanded}>
          <StyledLogo onClick={handleResetFilters} />
          <Navigation visible={!isExpanded}>
            <div>
              <FiSearch />
              <ButtonLink
                fontWeight="bold"
                onClick={() => handleSearch(TOGGLE_MENU_OPTIONS.COUNTRY)}
              >
                Anywhere
                <span>Any week . Add guests</span>
              </ButtonLink>
              <Divider />
              <ButtonLink
                fontWeight="bold"
                onClick={() => handleSearch(TOGGLE_MENU_OPTIONS.DATES)}
              >
                Any week
              </ButtonLink>
              <Divider />
              <ButtonLink
                fontWeight="bold"
                color="neutral-06"
                onClick={() => handleSearch(TOGGLE_MENU_OPTIONS.GUESTS)}
              >
                Add guests
              </ButtonLink>
              <StyledFilter>
                <RiEqualizerLine />
              </StyledFilter>
            </div>
            <IoSearchCircle
              onClick={() => handleSearch(SEARCH_CRITERIA.ANYWHERE)}
              size={35}
            />
          </Navigation>
          <StyledExpandedNavbar visible={isExpanded}>
            <button>Stays</button>
            <button>Experiences</button>
            <button>Online Experiences</button>
          </StyledExpandedNavbar>

          <BecomeHost>
            {/* TODO: Implement this feature later - not part of MVP
            <ButtonLink fontWeight={'bold'}>Airbnb your home</ButtonLink>
            <button>
              <Globe />
            </button>          */}
          </BecomeHost>

          <UserMenu />
        </StyledNavbar>
        <StyledExpandedSearch visible={isExpanded}>
          <SearchButtonWrapper>
            <ExpandedMenuWrapper>
              <SearchOption
                onClick={() => handleToggleMenu(TOGGLE_MENU_OPTIONS.COUNTRY)}
              >
                Where
                {
                  <input
                    type="text"
                    placeholder="Search destinations"
                    value={manualLocation}
                    onChange={handleManualLocation}
                  />
                }
              </SearchOption>
              <FloatingMenuWrapper
                expanded={countryMenuOpen}
                left="0"
                margin="10px 10px"
              >
                <CountriesWrapper>
                  <StyledCountry
                    onClick={() =>
                      updateCountry(REGION_SEARCH_CRITERIA.FLEXIBLE)
                    }
                    isSelected={
                      region?.code === REGION_SEARCH_CRITERIA.FLEXIBLE.code
                    }
                  >
                    <img
                      src="/images/flexible.webp"
                      alt="anywhere"
                      width="122"
                      height="122"
                    />
                    <StyledLabel size="font-size-m">I am Flexible</StyledLabel>
                  </StyledCountry>

                  <StyledCountry
                    onClick={() => updateCountry(REGION_SEARCH_CRITERIA.EUROPE)}
                    isSelected={
                      region?.code === REGION_SEARCH_CRITERIA.EUROPE.code
                    }
                  >
                    <img
                      src="/images/europe.webp"
                      alt="europe"
                      width="122"
                      height="122"
                    />
                    <StyledLabel size="font-size-m">Europe</StyledLabel>
                  </StyledCountry>

                  <StyledCountry
                    onClick={() =>
                      updateCountry(REGION_SEARCH_CRITERIA.GUATEMALA)
                    }
                    isSelected={
                      region?.code === REGION_SEARCH_CRITERIA.GUATEMALA.code
                    }
                  >
                    <img
                      src="/images/guatemala.webp"
                      alt="guatemala"
                      width="122"
                      height="122"
                    />
                    <StyledLabel size="font-size-m">Guatemala</StyledLabel>
                  </StyledCountry>

                  <StyledCountry
                    onClick={() =>
                      updateCountry(REGION_SEARCH_CRITERIA.SOUTH_AMERICA)
                    }
                    isSelected={
                      region?.code === REGION_SEARCH_CRITERIA.SOUTH_AMERICA.code
                    }
                  >
                    <img
                      src="/images/southamerica.webp"
                      alt="south america"
                      width="122"
                      height="122"
                    />
                    <StyledLabel size="font-size-m">South America</StyledLabel>
                  </StyledCountry>

                  <StyledCountry
                    onClick={() => updateCountry(REGION_SEARCH_CRITERIA.MEXICO)}
                    isSelected={
                      region?.code === REGION_SEARCH_CRITERIA.MEXICO.code
                    }
                  >
                    <img
                      src="/images/mexico.webp"
                      alt="mexico"
                      width="122"
                      height="122"
                    />
                    <StyledLabel size="font-size-m">Mexico</StyledLabel>
                  </StyledCountry>

                  <StyledCountry
                    onClick={() => updateCountry(REGION_SEARCH_CRITERIA.USA)}
                    isSelected={
                      region?.code === REGION_SEARCH_CRITERIA.USA.code
                    }
                  >
                    <img
                      src="/images/usa.webp"
                      alt="usa"
                      width="122"
                      height="122"
                    />
                    <StyledLabel size="font-size-m">United States</StyledLabel>
                  </StyledCountry>
                </CountriesWrapper>
              </FloatingMenuWrapper>
            </ExpandedMenuWrapper>
            <ExpandedDatesWrapper>
              <SearchOption
                onClick={() => handleToggleMenu(TOGGLE_MENU_OPTIONS.DATES)}
              >
                Check in
                <StyledLabel size="font-size-m" color="neutral-07">
                  Add dates
                </StyledLabel>
              </SearchOption>
              <SearchOption
                onClick={() => handleToggleMenu(TOGGLE_MENU_OPTIONS.DATES)}
              >
                Check out
                <StyledLabel size="font-size-m" color="neutral-07">
                  Add dates
                </StyledLabel>
              </SearchOption>
              <FloatingMenuWrapper
                expanded={datesMenuOpen}
                left="0"
                margin="70px 10px"
              >
                <ExpandedMenuWrapper>
                  <DatesWrapper>
                    <Flex direction="row">
                      <Flex direction="column">
                        <DateRangeSelector />
                      </Flex>
                    </Flex>
                  </DatesWrapper>
                </ExpandedMenuWrapper>
              </FloatingMenuWrapper>
            </ExpandedDatesWrapper>

            <ExpandedMenuWrapper>
              <SearchOption
                onClick={() => handleToggleMenu(TOGGLE_MENU_OPTIONS.GUESTS)}
              >
                <Flex direction="row">
                  <Flex direction="column">
                    Who
                    {adults + infants + pets + children > 0 ? (
                      <StyledLabel size="font-size-m">
                        {adults + children} guests{' '}
                        {infants > 0 && `, ${infants} infants`}{' '}
                        {pets > 0 && `, ${pets} pets`}
                      </StyledLabel>
                    ) : (
                      <StyledLabel size="font-size-m" color="neutral-07">
                        Add guests
                      </StyledLabel>
                    )}
                  </Flex>
                  <div
                    onClick={(event) => {
                      event.stopPropagation()
                      handleAdvancedSearch()
                    }}
                  >
                    <IoSearchCircle size={55} />
                  </div>
                </Flex>
              </SearchOption>
              <FloatingMenuWrapper
                expanded={guestsMenuOpen}
                right="0"
                margin="10px 10px"
              >
                <ExpandedMenuWrapper>
                  <GuestsWrapper>
                    <Flex direction="row">
                      <Flex direction="column">
                        <StyledLabel size="font-size-l">Adults</StyledLabel>
                        <StyledLabel size="font-size-m" color="neutral-07">
                          Ages 13 or avove
                        </StyledLabel>
                      </Flex>
                      <HorizontalStep
                        onStepChange={(step) => setAdults(step)}
                      />
                    </Flex>
                    <Separator />
                    <Flex direction="row">
                      <Flex direction="column">
                        <StyledLabel size="font-size-l">Children</StyledLabel>
                        <StyledLabel size="font-size-m" color="neutral-07">
                          Ages 2-12
                        </StyledLabel>
                      </Flex>
                      <HorizontalStep
                        onStepChange={(step) => setChildren(step)}
                      />
                    </Flex>
                    <Separator />
                    <Flex direction="row">
                      <Flex direction="column">
                        <StyledLabel size="font-size-l">Infants</StyledLabel>
                        <StyledLabel size="font-size-m" color="neutral-07">
                          Ages under 2
                        </StyledLabel>
                      </Flex>
                      <HorizontalStep
                        onStepChange={(step) => setInfants(step)}
                      />
                    </Flex>
                    <Separator />
                    <Flex direction="row">
                      <Flex direction="column">
                        <StyledLabel size="font-size-l">Pets</StyledLabel>
                        <StyledAnchor size="font-size-m" color="neutral-07">
                          Bringing a service animal?
                        </StyledAnchor>
                      </Flex>
                      <HorizontalStep onStepChange={(step) => setPets(step)} />
                    </Flex>
                  </GuestsWrapper>
                </ExpandedMenuWrapper>
              </FloatingMenuWrapper>
            </ExpandedMenuWrapper>
          </SearchButtonWrapper>
        </StyledExpandedSearch>
      </Flex>
    </StickyWrapper>
  )
}
