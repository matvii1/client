import FailedToLoad from '~/pages/FailedToLoad/FailedToLoad'
import Main from '../components/Container/Main'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { useAppDispatch, useAppSelector } from '../store/hooks/redux'
import { fetchPosts } from '../store/slices/post-slice'
import { Body } from './StyledApp'

export {
  FailedToLoad,
  Main,
  Footer,
  Header,
  useAppDispatch,
  useAppSelector,
  fetchPosts,
  Body,
}
