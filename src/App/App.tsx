import { RootState } from '~/store/store'
import {
  Body,
  FailedToLoad,
  fetchPosts,
  Footer,
  Header,
  Main,
  React,
  Routes,
  useAppDispatch,
  useAppSelector,
} from '.'

export default function App() {
  const dispatch = useAppDispatch()
  const { status } = useAppSelector((state: RootState) => state.posts)
  const isFailed = status === 'failed'

  React.useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <Body>
      <Header />
      <Main>{isFailed ? <FailedToLoad /> : <Routes />}</Main>
      <Footer />
    </Body>
  )
}
