import { Box, Button, Grid, Paper, TextField } from '@mui/material'
import 'easymde/dist/easymde.min.css'
import { toast, Toaster } from 'react-hot-toast'
import SimpleMDE from 'react-simplemde-editor'
import axios from '~/api/axios'
import Container from '~/components/Container/Container'
import GoBack from '~/components/GoBack/GoBack'
import { fetchOnePost } from '~/store/slices/post-slice'
import LoadingPage from '../LoadingPage/LoadingPage'

export {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  toast,
  Toaster,
  SimpleMDE,
  axios,
  Container,
  GoBack,
  fetchOnePost,
  LoadingPage,
}
