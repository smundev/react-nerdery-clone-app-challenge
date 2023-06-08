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
import { useEffect, useReducer } from 'react'
import { Flex } from '../../Common/Flex.styled'
import { StickyWrapper } from '../../Common/StickyWrapper'
import { UserMenu } from './UserMenu'
import { useClickedOutside } from '../../../hooks/useClickedOutside'
import { FloatingMenuWrapper } from '../../Common/FloatingMenu.styled'
import { Link, useSearchParams } from 'react-router-dom'
import { IoSearchCircle } from 'react-icons/io5'
import { Separator } from '../../Common/Input.styled'
import { StyledAnchor, StyledLabel } from '../../Common/Typography.styled'
import { HorizontalStep } from '../../Common/HorizontalStep'
import DateRangeSelector from './DateRangeSelector'
import { reducer, initialState } from './Navbar.state'
import { formatDate } from '../../../utils/utils'

const REGION_SEARCH_CRITERIA = {
  FLEXIBLE: { label: 'Flexible', code: '' },
  EUROPE: { label: 'Europe', code: 'EU' },
  GUATEMALA: { label: 'Guatemala', code: 'GT' },
  MEXICO: { label: 'Mexico', code: 'MX' },
  SOUTH_AMERICA: { label: 'South America', code: 'SA' },
  USA: { label: 'USA', code: 'US' },
}

export const Navbar = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [searchParams, setSearchParams] = useSearchParams()

  const [clickedOutsideAdvancedSearch, componentRef] =
    useClickedOutside<HTMLDivElement>({
      dependencies: [state],
    })

  const handleManualLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation()
    dispatch({ type: 'CLOSE_ALL_FILTERS' })
    dispatch({ type: 'SET_REGION', payload: null })
    dispatch({ type: 'SET_MANUAL_LOCATION', payload: event.target.value })
  }

  const updateCountry = (selectedRegion: { label: string; code: string }) => {
    if (selectedRegion.code === REGION_SEARCH_CRITERIA.FLEXIBLE.code) {
      dispatch({ type: 'SET_REGION', payload: null })
    } else {
      dispatch({ type: 'SET_REGION', payload: selectedRegion })
    }
    dispatch({ type: 'SET_MANUAL_LOCATION', payload: selectedRegion.label })
    dispatch({ type: 'TOGGLE_COUNTRY_MENU_OPEN' })
  }

  useEffect(() => {
    const handleKeyEvent = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (state.isExpanded) dispatch({ type: 'TOGGLE_IS_EXPANDED' })
      }
    }

    window.addEventListener('keydown', handleKeyEvent)
    return () => {
      window.removeEventListener('keydown', handleKeyEvent)
    }
  }, [state.isExpanded])

  useEffect(() => {
    if (state.isExpanded && clickedOutsideAdvancedSearch) {
      dispatch({ type: 'TOGGLE_IS_EXPANDED' })
      dispatch({ type: 'CLOSE_ALL' })
    }
  }, [clickedOutsideAdvancedSearch])

  const updateSearchParams = () => {
    const accommodates = state.adults + state.children
    const params = new URLSearchParams(searchParams)
    params[accommodates > 0 ? 'set' : 'delete'](
      'accommodates_gte',
      accommodates.toString()
    )

    if (state.region) {
      params.set('address.country_code', state.region.code)
      params.delete('address.country')
    } else {
      params.delete('address.country_code')
      if (
        state.manualLocation &&
        state.manualLocation !== REGION_SEARCH_CRITERIA.FLEXIBLE.label
      ) {
        params.set('address.country', state.manualLocation)
      } else {
        params.delete('address.country')
      }
    }

    return params.toString()
  }

  const handleAdvancedSearch = () => {
    dispatch({ type: 'CLOSE_ALL_FILTERS' })
    const updatedSearchParams = updateSearchParams()
    setSearchParams(updatedSearchParams)
  }

  return (
    <StickyWrapper zIndex={2} ref={componentRef}>
      <Flex direction="column" gap="15px">
        <StyledNavbar visible={state.isExpanded}>
          <Link to="/" reloadDocument>
            <StyledLogo alt="airbnb-site-logo" />
          </Link>
          <Navigation visible={!state.isExpanded}>
            <div>
              <FiSearch />
              <ButtonLink
                fontWeight="bold"
                onClick={() => dispatch({ type: 'TOGGLE_COUNTRY_MENU_OPEN' })}
              >
                {state.manualLocation ? state.manualLocation : 'Anywhere'}
                {state.adults + state.children + state.infants > 0 ? (
                  <span>
                    {state.adults + state.children + state.infants} guests
                  </span>
                ) : (
                  <span>Any week . Add guests</span>
                )}
              </ButtonLink>
              <Divider />
              <ButtonLink
                fontWeight="bold"
                onClick={() => dispatch({ type: 'TOGGLE_DATES_MENU_OPEN' })}
              >
                {state.dates.startDate
                  ? `${formatDate(state.dates.startDate)}
                    ${
                      state.dates.endDate
                        ? ` - ${formatDate(state.dates.endDate)}`
                        : ''
                    }`
                  : 'Any week'}
              </ButtonLink>
              <Divider />
              <ButtonLink
                fontWeight="bold"
                color="neutral-06"
                onClick={() => dispatch({ type: 'TOGGLE_GUESTS_MENU_OPEN' })}
              >
                {state.adults + state.children + state.infants > 0
                  ? `${state.adults + state.children + state.infants} guests`
                  : 'Add guests'}
              </ButtonLink>
              <StyledFilter>
                <RiEqualizerLine />
              </StyledFilter>
            </div>
            <IoSearchCircle
              onClick={() => dispatch({ type: 'TOGGLE_COUNTRY_MENU_OPEN' })}
              size={35}
            />
          </Navigation>
          <StyledExpandedNavbar visible={state.isExpanded}>
            <button>Stays</button>
            <Link
              to="https://www.airbnb.com/s/experiences/online"
              target="_blank"
            >
              Online Experiences
            </Link>
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
        <StyledExpandedSearch visible={state.isExpanded}>
          <SearchButtonWrapper>
            <ExpandedMenuWrapper>
              <SearchOption
                onClick={() => dispatch({ type: 'TOGGLE_COUNTRY_MENU_OPEN' })}
              >
                Where
                <form
                  onSubmit={(evt) => {
                    evt.preventDefault()
                    handleAdvancedSearch()
                  }}
                >
                  <input
                    type="text"
                    placeholder="Search destinations"
                    value={state.manualLocation}
                    onChange={handleManualLocation}
                  />
                </form>
              </SearchOption>
              <FloatingMenuWrapper
                expanded={state.countryMenuOpen}
                left="0"
                margin="10px 10px"
              >
                <CountriesWrapper>
                  <StyledCountry
                    onClick={() =>
                      updateCountry(REGION_SEARCH_CRITERIA.FLEXIBLE)
                    }
                    isSelected={
                      state.region?.code ===
                      REGION_SEARCH_CRITERIA.FLEXIBLE.code
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
                      state.region?.code === REGION_SEARCH_CRITERIA.EUROPE.code
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
                      state.region?.code ===
                      REGION_SEARCH_CRITERIA.GUATEMALA.code
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
                      state.region?.code ===
                      REGION_SEARCH_CRITERIA.SOUTH_AMERICA.code
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
                      state.region?.code === REGION_SEARCH_CRITERIA.MEXICO.code
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
                      state.region?.code === REGION_SEARCH_CRITERIA.USA.code
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
            <ExpandedDatesWrapper role="toolbar">
              <SearchOption
                onClick={() => dispatch({ type: 'TOGGLE_DATES_MENU_OPEN' })}
              >
                Check in
                <StyledLabel size="font-size-m" color="neutral-07">
                  {state.dates.startDate
                    ? formatDate(state.dates.startDate)
                    : 'Add dates'}
                </StyledLabel>
              </SearchOption>
              <SearchOption
                onClick={() => dispatch({ type: 'TOGGLE_DATES_MENU_OPEN' })}
              >
                Check out
                <StyledLabel size="font-size-m" color="neutral-07">
                  {state.dates.endDate
                    ? formatDate(state.dates.endDate)
                    : 'Add dates'}
                </StyledLabel>
              </SearchOption>
              <FloatingMenuWrapper
                expanded={state.datesMenuOpen}
                left="0"
                margin="70px 10px"
              >
                <ExpandedMenuWrapper>
                  <DatesWrapper>
                    <Flex direction="row">
                      <Flex direction="column">
                        <DateRangeSelector
                          onDateChange={(e) => {
                            const [updatedDates] = e
                            dispatch({
                              type: 'SET_DATES',
                              payload: updatedDates,
                            })
                          }}
                        />
                      </Flex>
                    </Flex>
                  </DatesWrapper>
                </ExpandedMenuWrapper>
              </FloatingMenuWrapper>
            </ExpandedDatesWrapper>

            <ExpandedMenuWrapper>
              <SearchOption
                onClick={() => dispatch({ type: 'TOGGLE_GUESTS_MENU_OPEN' })}
              >
                <Flex direction="row">
                  <Flex direction="column">
                    Who
                    {state.adults +
                      state.infants +
                      state.pets +
                      state.children >
                    0 ? (
                      <StyledLabel size="font-size-m">
                        {state.adults + state.children} guests
                        {state.infants > 0 && `, ${state.infants} infants`}
                        {state.pets > 0 && `, ${state.pets} pets`}
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
                expanded={state.guestsMenuOpen}
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
                        onStepChange={(step) =>
                          dispatch({ type: 'SET_ADULTS', payload: step })
                        }
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
                        onStepChange={(step) =>
                          dispatch({ type: 'SET_CHILDREN', payload: step })
                        }
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
                        onStepChange={(step) =>
                          dispatch({ type: 'SET_INFANTS', payload: step })
                        }
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
                      <HorizontalStep
                        onStepChange={(step) =>
                          dispatch({ type: 'SET_PETS', payload: step })
                        }
                      />
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
