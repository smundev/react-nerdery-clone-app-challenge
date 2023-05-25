import styled from 'styled-components'
export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 305px;
  height: auto;
  gap: 1rem;
  z-index: 0;

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

  @media (max-width: 688px) {
    width: 525px;
    height: 500px;
  }
`

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;

  & > header {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

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
  }
`
