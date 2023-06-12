import styled from 'styled-components'
export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 305px;
  height: auto;
  gap: 1rem;
  z-index: 0;

  @media (max-width: ${(props) => props.theme.responsive.mobile}) {
    width: 325px;
  }

  .carousel-slider {
    border-radius: 12px;
  }
`

export const StyledImage = styled.img`
  width: inherit;
  height: inherit;
`

export const ImageWrapper = styled.div`
  width: 325px;
  height: 300px;
  cursor: pointer;
`

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  & > header {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;

    strong {
      display: flex;
      align-items: center;
      column-gap: 0.5rem;
    }
  }

  & > label {
    font-weight: ${(props) => props.theme.sizes['font-weight-regular']};
    color: ${(props) => props.theme.colors['neutral-07']};
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
  }
`
export const WishlistButton = styled.button<{
  color: string
  hoverColor: string
}>`
  position: relative;
  z-index: 10;
  border: none;
  background: none;

  svg {
    position: absolute;
    color: ${({ color, theme }) => theme.colors[color || 'white']};
    top: 2.1rem;
    right: 1.3rem;

    cursor: pointer;

    &:hover {
      color: ${({ hoverColor, theme }) =>
        theme.colors[hoverColor || 'primary-01']};
    }
  }
`
