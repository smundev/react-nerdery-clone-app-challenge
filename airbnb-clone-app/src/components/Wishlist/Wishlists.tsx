import { useWishlist } from '../../hooks/useWishlist'
import Layout from '../Layout/Layout'
import { StyledLabel } from '../Common/Typography.styled'
import styled from 'styled-components'
import { Flex } from '../Common/Flex.styled'
import { IoMdRemoveCircle } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const WishListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  div {
    display: flex;
    flex-direction: column;
  }

  div > img {
    width: 250px;
    height: 250px;
    object-fit: fill;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
      transition: opacity 0.2s ease-in-out;
    }
  }

  div > div {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;

    svg {
      cursor: pointer;
      color: ${({ theme }) => theme.colors['primary-01']};

      &:hover {
        color: ${({ theme }) => theme.colors['primary-02']};
      }
    }
  }
`

const Wishlists = () => {
  const { wishlist, removeItemFromWishList } = useWishlist()
  const navigate = useNavigate()

  const handleRemoveWishlist = (id: string) => {
    removeItemFromWishList(parseInt(id))
  }

  const handleListing = (idListing: string) => {
    navigate(`/listing/${idListing}`)
  }

  return (
    <Layout>
      <Flex direction="column" padding="40px" gap="20px">
        <StyledLabel size="font-size-xxxl" fontWeight="font-weight-bold">
          Wishlist
        </StyledLabel>
        <WishListWrapper>
          {wishlist.map((item) => (
            <div key={item.id}>
              <img
                src={item.picture_url}
                alt={item.name}
                onClick={() => handleListing(item.listing_id)}
              />
              <div>
                <StyledLabel size="font-size-l" fontWeight="font-weight-bold">
                  {item.name}
                </StyledLabel>
                <IoMdRemoveCircle
                  size={25}
                  onClick={() => handleRemoveWishlist(item.id)}
                />
              </div>
            </div>
          ))}
        </WishListWrapper>
      </Flex>
    </Layout>
  )
}

export default Wishlists
