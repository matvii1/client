import { RootState } from '~/store/store'
import {
  Body,
  FailedToLoad,
  Footer,
  Header,
  Main,
  Routes,
  useAppDispatch,
  useAppSelector,
} from '.'

export default function App() {
  const { status } = useAppSelector((state: RootState) => state.posts)
  const isFailed = status === 'failed'
  const dispatch = useAppDispatch()

  // TODO: dumb auth
  // useEffect(() => {
  //   if (window.localStorage.getItem('token')) {
  //     dispatch(setAuth(true))
  //   }
  // }, [])

  return (
    <Body>
      <Header />
      <Main>{isFailed ? <FailedToLoad /> : <Routes />}</Main>
      <Footer />
    </Body>
  )
}
