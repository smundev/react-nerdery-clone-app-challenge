type State = {
  isExpanded: boolean
  countryMenuOpen: boolean
  guestsMenuOpen: boolean
  datesMenuOpen: boolean
  region: { label: string; code: string } | null
  manualLocation: string
  adults: number
  children: number
  infants: number
  pets: number
  dates: {
    startDate: Date | null
    endDate: Date | null
    key: string
  }
}

export const initialState: State = {
  isExpanded: false,
  countryMenuOpen: false,
  guestsMenuOpen: false,
  datesMenuOpen: false,
  region: null,
  manualLocation: '',
  adults: 0,
  children: 0,
  infants: 0,
  pets: 0,
  dates: {
    startDate: null,
    endDate: null,
    key: 'selection',
  },
}

type Action =
  | { type: 'TOGGLE_IS_EXPANDED' }
  | { type: 'TOGGLE_COUNTRY_MENU_OPEN' }
  | { type: 'TOGGLE_GUESTS_MENU_OPEN' }
  | { type: 'TOGGLE_DATES_MENU_OPEN' }
  | { type: 'CLOSE_ALL_FILTERS' }
  | { type: 'CLOSE_ALL' }
  | { type: 'SET_REGION'; payload: { label: string; code: string } | null }
  | { type: 'SET_MANUAL_LOCATION'; payload: string }
  | { type: 'SET_ADULTS'; payload: number }
  | { type: 'SET_CHILDREN'; payload: number }
  | { type: 'SET_INFANTS'; payload: number }
  | { type: 'SET_PETS'; payload: number }
  | {
      type: 'SET_DATES'
      payload: {
        startDate: Date | null
        endDate: Date | null
        key: string
      }
    }

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'TOGGLE_IS_EXPANDED':
      return { ...state, isExpanded: !state.isExpanded }
    case 'TOGGLE_COUNTRY_MENU_OPEN':
      return {
        ...state,
        isExpanded: true,
        countryMenuOpen: !state.countryMenuOpen,
        guestsMenuOpen: false,
        datesMenuOpen: false,
      }
    case 'TOGGLE_GUESTS_MENU_OPEN':
      return {
        ...state,
        isExpanded: true,
        countryMenuOpen: false,
        guestsMenuOpen: !state.guestsMenuOpen,
        datesMenuOpen: false,
      }
    case 'TOGGLE_DATES_MENU_OPEN':
      return {
        ...state,
        isExpanded: true,
        countryMenuOpen: false,
        guestsMenuOpen: false,
        datesMenuOpen: !state.datesMenuOpen,
      }
    case 'CLOSE_ALL_FILTERS':
      return {
        ...state,
        countryMenuOpen: false,
        guestsMenuOpen: false,
        datesMenuOpen: false,
      }
    case 'CLOSE_ALL':
      return {
        ...state,
        isExpanded: false,
        countryMenuOpen: false,
        guestsMenuOpen: false,
        datesMenuOpen: false,
      }
    case 'SET_REGION':
      return { ...state, region: action.payload }
    case 'SET_MANUAL_LOCATION':
      return { ...state, manualLocation: action.payload }
    case 'SET_ADULTS':
      return { ...state, adults: action.payload }
    case 'SET_CHILDREN':
      return { ...state, children: action.payload }
    case 'SET_INFANTS':
      return { ...state, infants: action.payload }
    case 'SET_PETS':
      return { ...state, pets: action.payload }
    case 'SET_DATES':
      return { ...state, dates: action.payload }
    default:
      return state
  }
}
