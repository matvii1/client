import { RootState } from '~/store/store'
import {
  Body,
  FailedToLoad,
  Footer,
  Header,
  Main,
  Routes,
  useAppSelector,
} from '.'

export default function App() {
  const { status } = useAppSelector((state: RootState) => state.posts)
  const isFailed = status === 'failed'

  return (
    <Body>
      <Header />
      <Main>{isFailed ? <FailedToLoad /> : <Routes />}</Main>
      <Footer />
    </Body>
  )
}
