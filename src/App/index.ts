import React from 'react'
import FailedToLoad from '~/pages/FailedToLoad/FailedToLoad'
import Main from '../components/Container/Main'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Routes } from '../routes'
import { useAppDispatch, useAppSelector } from '../store/hooks/hook'
import { fetchPosts } from '../store/slices/post-slice'
import { Body } from './StyledApp'

export {
  React,
  FailedToLoad,
  Main,
  Footer,
  Header,
  Routes,
  useAppDispatch,
  useAppSelector,
  fetchPosts,
  Body,
}
