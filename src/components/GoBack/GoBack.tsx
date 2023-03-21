import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function GoBack() {
  const navigate = useNavigate()

  return (
    <IconButton sx={{ marginTop: '2rem' }} onClick={() => navigate(-1)}>
      <ArrowBackIosNewRoundedIcon />
    </IconButton>
  )
}
