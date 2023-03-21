import { Navigate } from 'react-router-dom'
import FullPost from './components/FullPost/FullPost'
import PostsPage from './pages/PostsPage/PostsPage'

export const isAuth = true

const navigateTo = !isAuth ? '/login' : '/posts'

export const routes = [
  {
    path: '/',
    element: <Navigate to={navigateTo} />,
  },
  {
    path: '/posts',
    element: <PostsPage />,
    children: [
      {
        path: ':postId',
        element: <FullPost />,
      },
    ],
  },
]
