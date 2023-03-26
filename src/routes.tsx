import { Navigate, useRoutes } from 'react-router-dom'
import FullPostPage from './components/FullPostPage/FullPostPage'
import LoginPage from './pages/LoginPage/LoginPage'
import PostsPage from './pages/PostsPage/PostsPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import WritePostPage from './pages/WritePostPage/WritePostPage'
import { useAppSelector } from './store/hooks/hook'
import { RootState } from './store/store'

export function Routes() {
  const isAuth = useAppSelector((state: RootState) => state.auth.value)
  const navigateTo = isAuth ? '/posts' : '/login'

  const routes = [
    {
      path: '/',
      element: <Navigate to={navigateTo} />,
    },
    {
      path: '/posts',
      element: <PostsPage />,
    },
    {
      path: '/posts/:postId',
      element: <FullPostPage />,
    },
    {
      path: '/make-post',
      element: <WritePostPage />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ]

  const PageRoutes = useRoutes(routes)

  return PageRoutes
}
