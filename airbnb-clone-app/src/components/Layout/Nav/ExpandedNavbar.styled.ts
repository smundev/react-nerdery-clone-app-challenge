import styled from 'styled-components'

type Props = {
  isSelected?: boolean
  visible?: boolean
}

export const StyledExpandedNavbar = styled.div<Props>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  margin-left: auto;
  align-items: center;
  height: 100%;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.responsive['mobile']}) {
    display: none;
    margin: 0;
  }

  button,
  a {
    display: flex;
    border: none;
    padding-bottom: 5px;
    text-decoration: none;
    font-size: ${(props) => props.theme.sizes['font-size-l']};
    background: transparent;

    color: ${(props) =>
      props.isSelected
        ? props.theme.colors['neutral-07']
        : props.theme.colors['normal-text']};

    transition: all 0.1s ease;
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors['neutral-07']};
      border-bottom: 2px solid ${(props) => props.theme.colors['neutral-06']};
    }
  }

  button {
    cursor: pointer;
    color: ${(props) => props.theme.colors['neutral-07']};
    border-bottom: 2px solid ${(props) => props.theme.colors['neutral-06']};
  }
`
export const StyledExpandedSearch = styled.div<Props>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.body};
  flex: 1;
  padding-bottom: 11px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

  @media (max-width: ${({ theme }) => theme.responsive['mobile']}) {
    margin: 0 0 1rem;
  }
`

export const SearchButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 0.6;
  height: 60px;

  background: ${({ theme }) => theme.colors.body};
  border: 1px solid ${({ theme }) => theme.colors['neutral-03']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border-radius: 500px;
  transition: all 0.2s ease-out;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.responsive['mobile']}) {
    //find and hide div with role toolbar
    div[role='toolbar'] {
      display: none;
    }
  }
`

export const SearchOption = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  height: 44px;
  padding: 8px 8px 8px 18px;
  border-radius: 500px;
  font-size: ${({ theme }) => theme.sizes['font-size-s']};
  font-weight: ${({ theme }) => theme.sizes['font-weight-bold']};
  cursor: pointer;

  div {
    background-color: transparent;
    justify-content: center;
    svg {
      &:hover {
        color: ${({ theme }) => theme.colors['primary-02']};
      }
    }
  }

  input {
    border: none;
    background-color: transparent;
    font-size: ${({ theme }) => theme.sizes['font-size-m']};
    color: ${({ theme }) => theme.colors['neutral-07']};
    font-weight: ${({ theme }) => theme.sizes['font-weight-regular']};
  }

  svg {
    color: ${({ theme }) => theme.colors['primary-01']};
    &:hover {
      color: ${({ theme }) => theme.colors['primary-02']};
    }
  }

  label {
    cursor: pointer;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors['neutral-03']};
  }
`

export const ExpandedMenuWrapper = styled.div`
  position: relative;

  input:first-of-type {
    border: none;
    height: 20px;
    &:focus {
      outline: none;
    }
  }
`
export const CountriesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 406px;
  flex-wrap: wrap;
  padding: 25px;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.responsive['mobile']}) {
    width: 300px;
  }
`

export const StyledCountry = styled.div<{ isSelected?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 16px;
    &:hover {
      cursor: pointer;
      border: 1px solid black;
    }
    border: ${({ isSelected, theme }) =>
      isSelected
        ? '1px solid black'
        : `1px solid ${theme.colors['neutral-03']}`};
  }
`

export const GuestsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 306px;
  flex-wrap: wrap;
  padding: 25px;
  gap: 16px;
`

export const DatesWrapper = styled.div`
  display: flex;
  width: 450px;
  flex-wrap: wrap;
  padding: 25px;
  gap: 16px;
`
export const ExpandedDatesWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: row;
`
