import { Categories } from '../Categories/Categories'
import Layout from '../Layout/Layout'
import { Listing } from '../Listing/Listing'

export const Home = () => {
  return (
    <Layout>
      <Categories />
      <Listing />
    </Layout>
  )
}
