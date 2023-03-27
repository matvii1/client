import { Navigate, useRoutes } from 'react-router-dom'
import FullPostPage from './pages/FullPostPage/FullPostPage'
import LoginPage from './pages/LoginPage/LoginPage'
import PostsPage from './pages/PostsPage/PostsPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import WritePostPage from './pages/WritePostPage/WritePostPage'
import { useAppSelector } from './store/hooks/redux'
import { RootState } from './store/store'

enum Roles {
  Guest = 'GUEST',
  User = 'USER',
}

export function Routes() {
  const { isAuth } = useAppSelector((state: RootState) => state.auth)
  const homeNavigate = isAuth ? '/posts' : '/login'

  const availableRoutes = [
    {
      path: '/',
      element: <Navigate to={homeNavigate} />,
      access: [Roles.User, Roles.Guest],
    },
    {
      path: '/posts',
      element: <PostsPage />,
      access: [Roles.User],
    },
    {
      path: '/posts/:postId',
      element: <FullPostPage />,
      access: [Roles.User],
    },
    {
      path: '/make-post',
      element: <WritePostPage />,
      access: [Roles.User],
    },
    {
      path: '/login',
      element: <LoginPage />,
      access: [Roles.User, Roles.Guest],
    },
    {
      path: '/register',
      element: <RegisterPage />,
      access: [Roles.User, Roles.Guest],
    },
    {
      path: '*',
      element: <Navigate to="/" />,
      access: [Roles.User, Roles.Guest],
    },
  ]

  const guestRoutes = availableRoutes.filter((route) => {
    return route.access.includes(Roles.Guest)
  })

  const routes = isAuth ? availableRoutes : guestRoutes
  const PageRoutes = useRoutes(routes)

  return PageRoutes
}
