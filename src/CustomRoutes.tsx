import { Navigate, useRoutes } from 'react-router-dom'
import { useAppSelector } from './hooks/redux'
import EditPostPage from './pages/EditPostPage/EditPostPage'
import FullPostPage from './pages/FullPostPage/FullPostPage'
import LoginPage from './pages/LoginPage/LoginPage'
import PostsPage from './pages/PostsPage/PostsPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import WritePostPage from './pages/WritePostPage/WritePostPage'
import { RootState } from './store/store'

enum Roles {
  Guest = 'GUEST',
  User = 'USER',
}

export function CustomRoutes() {
  const { isAuth } = useAppSelector((state: RootState) => state.auth)

  const availableRoutes = [
    {
      path: '/',
      element: <PostsPage />,
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
      access: [Roles.User, Roles.Guest],
    },
    {
      path: '/posts/:postId/edit',
      element: <EditPostPage />,
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
