import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import { IconButton } from '@mui/material'
import { Link } from 'react-router-dom'

export default function GoBack() {
  return (
    <Link to="/">
      <IconButton sx={{ marginTop: '2rem' }}>
        <ArrowBackIosNewRoundedIcon />
      </IconButton>
    </Link>
  )
}
