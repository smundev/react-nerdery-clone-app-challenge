import { Suspense, lazy } from 'react'
import { Navigate, createBrowserRouter, useLocation } from 'react-router-dom'
import { Home } from '../components/Home/Home'
import { useAuthContext } from '../context/AuthContext'
import { NotFound } from '../components/NotFound'

const Wishlists = lazy(() => import('../components/Wishlist/Wishlists'))
const Detail = lazy(() => import('../components/Listing/Detail/Detail'))

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
        <Suspense fallback="Loading wishlist...">
          <Wishlists />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: '/listing/:id',
    element: (
      <Suspense fallback="Loading listing detail...">
        <Detail />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
