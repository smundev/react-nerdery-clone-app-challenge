import styled from 'styled-components'

type Props = {
  isSelected?: boolean
  visible?: boolean
  tab?: string
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

  button {
    display: flex;
    border: none;
    padding-bottom: 5px;

    font-size: ${(props) => props.theme.sizes['font-size-l']};
    background: transparent;

    color: ${(props) =>
      props.isSelected
        ? props.theme.colors['neutral-07']
        : props.theme.colors['normal-text']};
    border-bottom: ${(props) =>
      props.isSelected
        ? `2px solid ${props.theme.colors['normal-text']}`
        : 'none'};
    transition: all 0.1s ease;
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors['neutral-07']};
      border-bottom: 2px solid ${(props) => props.theme.colors['neutral-06']};
    }
  }
`
export const StyledExpandedSearch = styled.div<Props>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.body};
  flex: 1;

  @media (max-width: ${({ theme }) => theme.responsive['mobile']}) {
    display: none;
    margin: 0 0 1rem;
  }
`

export const SearchButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 0.2;

  background: ${({ theme }) => theme.colors.body};
  border: 1px solid ${({ theme }) => theme.colors['neutral-03']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border-radius: 500px;
  transition: all 0.2s ease-out;
`

export const SearchOption = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 8px 8px 8px 18px;
  border-radius: 500px;
  font-size: ${({ theme }) => theme.sizes['font-size-s']};
  font-weight: ${({ theme }) => theme.sizes['font-weight-bold']};
  cursor: pointer;

  input {
    border: none;
    background-color: transparent;
    font-size: ${({ theme }) => theme.sizes['font-size-m']};
    color: ${({ theme }) => theme.colors['neutral-07']};
    font-weight: ${({ theme }) => theme.sizes['font-weight-regular']};

    &:hover {
      background-color: ${(props) => props.theme.colors['neutral-03']};
    }
  }
  &:hover {
    background-color: ${(props) => props.theme.colors['neutral-03']};
  }
`

export const WhereWrapper = styled.div`
  position: relative;
`
export const CountriesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 406px;
  flex-wrap: wrap;
  padding: 25px;
  gap: 16px;
  div {
    img {
      border-radius: 16px;
      border: 1px solid ${({ theme }) => theme.colors['neutral-03']};
      &:hover {
        cursor: pointer;
        border: 1px solid black;
      }
    }
  }
`
