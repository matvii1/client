import { useEffect, useState } from 'react'
import axios from '~/api/axios'
import LoadingPage from '~/pages/LoadingPage/LoadingPage'
import { setAuth, setUserData } from '~/store/slices/auth-slice'
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
  const [isFetchMeLoading, setIsFetchMeLoading] = useState(false)
  const token = window.localStorage.getItem('token')
  const isFailed = status === 'failed'
  const dispatch = useAppDispatch()

  useEffect(() => {
    setIsFetchMeLoading(true)

    axios
      .get('/auth/me')
      .then(({ data }) => {
        if (data) {
          dispatch(setAuth(true))
          dispatch(setUserData(data))
          setIsFetchMeLoading(false)
        } else {
          dispatch(setAuth(false))
          setIsFetchMeLoading(false)
        }
      })
      .catch(() => {
        dispatch(setAuth(false))
        setIsFetchMeLoading(false)
      })
      .finally(() => {
        setIsFetchMeLoading(false)
      })
  }, [token])

  return (
    <Body>
      {isFetchMeLoading ? (
        <LoadingPage />
      ) : (
        <>
          <Header />
          <Main>{isFailed ? <FailedToLoad /> : <Routes />}</Main>
          <Footer />
        </>
      )}
    </Body>
  )
}
