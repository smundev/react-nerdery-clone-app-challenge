import { useEffect, useState } from 'react'
import Modal from '../Common/Modal'
import styled from 'styled-components'
import { StyledAnchor, StyledLabel } from '../Common/Typography.styled'
import { PrimaryButton, SecondaryButton } from '../Common/Button.styled'
import { useToggle } from '../../hooks/useToggle'
import { BiChevronRight } from 'react-icons/bi'
import { UserResponse } from '../../api/auth/types'

const Guidelines = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 650px;
  overflow-y: auto;

  img {
    width: 44px;
    aspect-ratio: 1;
    margin: 20px 0;
  }

  p {
    align-items: center;
    line-height: 1.5em;
    text-align: left;
    color: ${({ color, theme }) => theme.colors[color || 'normal-text']};
    font-size: ${({ theme }) => theme.sizes['font-size-l']};
    font-weight: ${({ theme }) => theme.sizes['font-weight-regular']};
  }
`

export const Onboarding = ({ user }: { user: UserResponse }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [readMore, toggleReadMore] = useToggle(false)

  useEffect(() => {
    if (localStorage.getItem('show-onboarding-guidelines')) {
      openOnboarding()
    }
  }, [user])

  const openOnboarding = () => {
    setModalOpen(true)
  }

  const closeOnboarding = () => {
    setModalOpen(false)
  }

  const handleUserConditions = () => {
    if (localStorage.getItem('show-onboarding-guidelines'))
      localStorage.removeItem('show-onboarding-guidelines')
    closeOnboarding()
  }

  const handleReadMore = () => {
    toggleReadMore()
  }

  return (
    <Modal isOpen={modalOpen} onClose={closeOnboarding} showHeader={false}>
      <Guidelines>
        {!readMore ? (
          <>
            <img src="/images/airbnb-small.svg"></img>
            <StyledLabel size="font-size-l" fontWeight="font-weight-bold">
              Our community commitment
            </StyledLabel>
            <StyledLabel size="font-size-xxl" fontWeight="font-weight-bold">
              Airbnb is a community where anyone can belong
            </StyledLabel>
            <p>
              To ensure this, we’re asking you to commit to the following:
              <br />
              <br />I agree to treat everyone in the Airbnb community—regardless
              of their race, religion, national origin, ethnicity, skin color,
              disability, sex, gender identity, sexual orientation or age—with
              respect, and without judgment or bias.
            </p>
            <StyledAnchor
              fontWeight="font-weight-regular"
              size="font-size-l"
              onClick={handleReadMore}
            >
              Learn More <BiChevronRight size={25} />
            </StyledAnchor>
            <PrimaryButton onClick={handleUserConditions}>
              Agree and continue
            </PrimaryButton>
            <SecondaryButton onClick={handleUserConditions}>
              Decline
            </SecondaryButton>
          </>
        ) : (
          <>
            <StyledLabel size="font-size-xxl" fontWeight="font-weight-regular">
              About the Community Commitment
            </StyledLabel>

            <p>
              <StyledLabel size="font-size-l" fontWeight="font-weight-bold">
                Why did Airbnb create this commitment?
              </StyledLabel>
              This commitment is an important step towards creating a global
              community where everyone can truly belong. Discrimination prevents
              hosts, guests, and their families from feeling included and
              welcomed, and we have no tolerance for it. Building an Airbnb
              where everyone can belong hinges on knowing that everyone in our
              community understands this mission and agrees to help us achieve
              it.
              <br />
              <br />
              <StyledLabel size="font-size-l" fontWeight="font-weight-bold">
                What if I decline the commitment?
              </StyledLabel>
              If you decline the commitment, you won’t be able to host or book
              using Airbnb, and you have the option to cancel your account. Once
              your account is canceled, future booked trips will be canceled.
              You will still be able to browse Airbnb but you won’t be able to
              book any reservations or host any guests.
              <br />
              <br />
              <StyledLabel size="font-size-l" fontWeight="font-weight-bold">
                As a host, what if I have safety concerns about accepting
                reservations from anyone?
              </StyledLabel>
              If you will share your living spaces with a guest, you may make a
              unit available only to guests of your own gender.
              <br />
              <br />
              Under this policy, you may also turn down a guest for other
              reasons, just not on the basis of race, religion, national origin,
              ethnicity, sexual orientation, or age.
              <br />
              <br />
              In general, when considering a booking request, reflect on your
              reasoning to ensure that bias isn’t a factor.
              <br />
              <br />
              <StyledLabel size="font-size-l" fontWeight="font-weight-bold">
                What if laws in my area restrict me from hosting certain guests?
              </StyledLabel>
              Please post about the restriction on your listing, but be clear
              that it is a legal requirement in your area and that you are
              complying with local law.
              <br />
              <br />
              <StyledLabel size="font-size-l" fontWeight="font-weight-bold">
                Can I decline guests with disabilities if I don’t think my home
                is suitable for them?
              </StyledLabel>
              In many cases, Airbnb hosts are not required to make their homes
              compliant with the standards set out in the Americans with
              Disabilities Act (ADA) . However, you can’t decline a guest based
              on any actual or perceived disability. You should do your best to
              provide accurate information about your home’s accessibility
              features (or lack of them), allowing for guests with disabilities
              to decide for themselves whether the home is appropriate to their
              individual needs.
              <br />
              <br />
              <StyledLabel size="font-size-l" fontWeight="font-weight-bold">
                What if I have other questions related to the commitment?
              </StyledLabel>
              Check out our detailed FAQs in the Nondiscrimination Help Center.
              You can also review our host resources, which cover frequently
              asked questions by hosts about Airbnb’s Nondiscrimination Policy.
            </p>
            <SecondaryButton onClick={handleReadMore}>Go Back</SecondaryButton>
          </>
        )}
      </Guidelines>
    </Modal>
  )
}
