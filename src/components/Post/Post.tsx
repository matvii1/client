import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconsBox, iconsStyles } from './StyledPost'
import TagsList from './TagsList'

export default function Post() {
  const [isEditShown, setIsEditShown] = useState(false)

  function handleOnMouseOver() {
    setIsEditShown(true)
  }
  function handleOnMouseLeave() {
    setIsEditShown(false)
  }

  return (
    <Card
      variant="outlined"
      sx={{ position: 'relative' }}
      onMouseEnter={handleOnMouseOver}
      onMouseLeave={handleOnMouseLeave}>
      <Box sx={{ ...iconsStyles, opacity: isEditShown ? '100%' : '0' }}>
        <EditIcon />
        <CloseRoundedIcon sx={{ fontSize: '1.6rem' }} />
      </Box>
      <Box>
        <Link to="/posts/1">
          <img src="/williamsburg_bridge.jpeg" className="post__img" />
        </Link>
      </Box>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              fontSize: '0.8rem',
              width: '40px',
              height: '40px',
              bgcolor: blueGrey[500],
            }}
            aria-label="recipe">
            M
          </Avatar>
        }
        title="Matvii"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Box sx={{ paddingLeft: '2rem', maxWidth: "95%" }}>
          <Link to="/posts/1">
            <Typography variant="h2" fontWeight="700">
              Roast the code 1# | Rock Paper Scissors
            </Typography>
          </Link>

          <TagsList />

          <Grid container columnGap={3} alignItems="center" mt={3}>
            <IconsBox>
              <VisibilityIcon color="action" sx={{ fontSize: 'smallIcon' }} />
              150
            </IconsBox>
            <IconsBox>
              <ChatBubbleOutlineIcon
                color="action"
                sx={{ fontSize: 'smallIcon' }}
              />
              200
            </IconsBox>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  )
}
