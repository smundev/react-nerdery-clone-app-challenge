import styled from 'styled-components'

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 70px;
  max-width: 1120px;

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    padding: 0px 10px;
  }
`

export const StyledImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% repeat(2, 1fr);
  grid-template-rows: 2fr;
  border-radius: 15px;
  overflow: hidden;
  grid-template-areas:
    'main second third'
    'main fourth fifth';

  grid-gap: 10px;
  max-height: 553px;
  margin: 30px 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &:first-of-type {
      grid-area: main;
    }

    &:hover {
      opacity: 0.7;
      transition: opacity 0.2s ease-in-out;
      cursor: pointer;
    }
  }
  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    grid-template-columns: 2fr;
  }
`

export const HostInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  margin: 20px 0;

  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    width: 100%;
  }
`

export const Amenities = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 150px;
  margin: 10px 0;

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    height: auto;
  }
`

export const Rating = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 90px;
  justify-items: flex-start;
  padding-top: 20px;

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-right: 30px;
  }

  progress {
    accent-color: black;
  }

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    height: auto;
  }
`
export const ReviewUser = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 20px;

  p {
    font-size: ${({ theme }) => theme.sizes['font-size-l']};
    font-weight: ${({ theme }) => theme.sizes['font-weight-regular']};
  }

  & > div {
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: flex-start;
    min-width: 350px;

    img {
      border-radius: 50%;
      width: 32px;
      height: 32px;
    }
  }

  & > div > div {
    align-items: center;
    gap: 15px;
  }

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    height: auto;
    width: auto;
  }
`
