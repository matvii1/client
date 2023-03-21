import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { useRoutes } from 'react-router-dom'
import Main from './components/Container/Main'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { routes } from './routes'

const Body = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100dvh',
  backgroundColor: '#F3F2F3',
})

export default function App() {
  console.log(routes)

  const PageRoutes = useRoutes(routes)
  return (
    <Body>
      <Header />

      <Main>
        {PageRoutes}
        {/* <Routes>
          <Route
            path="/"
            element={
              isAuth ? <Navigate to="/posts" /> : <Navigate to="/login" />
            }
          />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:postId" element={<FullPostPage />} />
          <Route path="/make-post" element={<WritePostPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes> */}
      </Main>
      <Footer />
    </Body>
  )
}
