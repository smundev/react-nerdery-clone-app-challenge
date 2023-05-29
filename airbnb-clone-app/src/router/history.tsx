import { Navigate, createBrowserRouter, useLocation } from 'react-router-dom'
import { Home } from '../components/Home/Home'
import { Wishlists } from '../components/Wishlist/Wishlists'
import { Detail } from '../components/Listing/Detail/Detail'
import { useAuthContext } from '../context/AuthContext'
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  let location = useLocation()
  const { user, loading } = useAuthContext()

  if (loading) {
    return <div>Checking auth..</div>
  }

  if (!user) {
    return <Navigate to="/" state={{ from: location }} />
  }

  return children
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/wishlist',
    element: (
      <PrivateRoute>
        <Wishlists />
      </PrivateRoute>
    ),
  },
  {
    path: '/listing/:id',
    element: <Detail />,
  },
])
