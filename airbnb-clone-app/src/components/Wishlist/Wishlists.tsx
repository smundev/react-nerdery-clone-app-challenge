import { useWishlist } from '../../hooks/useWishlist'
import Layout from '../Layout/Layout'
import { StyledLabel } from '../Common/Typography.styled'
import styled from 'styled-components'
import { Flex } from '../Common/Flex.styled'
import { IoMdRemoveCircle } from 'react-icons/io'

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

export const Wishlists = () => {
  const { wishlist, removeItemFromWishList } = useWishlist()

  const handleRemoveWishlist = (id: string) => {
    removeItemFromWishList(parseInt(id))
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
              <img src={item.picture_url} alt={item.name} />
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
