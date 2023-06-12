import { Link } from 'react-router-dom'
import { StyledLabel } from './Common/Typography.styled'
import Layout from './Layout/Layout'
import Lottie from 'lottie-react'
import notFoundAnimation from '../notFound.json'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  margin: 70px 30px;
  div {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  & > div:first-child {
    gap: 10px;
  }
`

export const NotFound = () => {
  return (
    <Layout>
      <Container>
        <div>
          <StyledLabel size="font-size-xxl" fontWeight="font-weight-bold">
            We can’t seem to find the page you’re looking for
          </StyledLabel>
          <StyledLabel size="font-size-xl" fontWeight="font-weight-regular">
            Here are some helpful links instead:
          </StyledLabel>
          <StyledLabel size="font-size-l" fontWeight="font-weight-regular">
            <Link to="/">Go back to the home page</Link>
          </StyledLabel>
          <StyledLabel size="font-size-l" fontWeight="font-weight-regular">
            <Link to="https://www.airbnb.com/help/getting-started/how-to-travel">
              Traveling on Airbnb
            </Link>
          </StyledLabel>
          <StyledLabel size="font-size-l" fontWeight="font-weight-regular">
            <Link to="https://www.airbnb.com/info/why_hosthttps://www.airbnb.com/info/why_host">
              Hosting on Airbnb
            </Link>
          </StyledLabel>
          <StyledLabel size="font-size-l" fontWeight="font-weight-regular">
            <Link to="https://www.airbnb.com/trust">Trust & Safety</Link>
          </StyledLabel>
          <StyledLabel size="font-size-l" fontWeight="font-weight-regular">
            <Link to="https://www.airbnb.com/sitemaps">Sitemap</Link>
          </StyledLabel>
        </div>

        <Lottie animationData={notFoundAnimation} />
      </Container>
    </Layout>
  )
}
