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
import { IPost } from '~/types/Post'
import LinkToPost from './LinkToPost'
import TagsList from './PostTagsList'
import { CardContentInner, IconsBox, iconsStyles } from './StyledPost'

type Props = {
  post: IPost
}

export default function Post({ post }: Props) {
  const { title, viewsCount, comments, tags, text, userId, createdAt, _id } =
    post
  const { name, lastName } = userId
  const [isEditShown, setIsEditShown] = useState(false)

  function handleOnMouseOver() {
    setIsEditShown(true)
  }

  function handleOnMouseLeave() {
    setIsEditShown(false)
  }

  const avatarPreview = name[0].toUpperCase()

  return (
    <Card
      variant="outlined"
      sx={{ position: 'relative' }}
      onMouseEnter={handleOnMouseOver}
      onMouseLeave={handleOnMouseLeave}
    >
      <Box
        sx={{
          ...iconsStyles,
          opacity: isEditShown ? '100%' : '0',
        }}
      >
        <EditIcon />
        <CloseRoundedIcon sx={{ fontSize: '1.6rem' }} />
      </Box>
      <Box>
        <LinkToPost id={_id}>
          <img src="/williamsburg_bridge.jpeg" className="post__img" />
        </LinkToPost>
      </Box>
      <LinkToPost id={_id}>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                fontSize: '0.8rem',
                width: '40px',
                height: '40px',
                bgcolor: blueGrey[500],
              }}
            >
              {avatarPreview}
            </Avatar>
          }
          title={name}
          subheader={createdAt}
        />
      </LinkToPost>
      <CardContent>
        <CardContentInner>
          <LinkToPost id={_id}>
            <Typography variant="h2" fontWeight="700">
              {title}
            </Typography>
          </LinkToPost>

          {tags && !!tags.length && <TagsList tags={tags} />}

          <Grid container columnGap={3} alignItems="center" mt={3}>
            <IconsBox>
              <VisibilityIcon color="action" sx={{ fontSize: 'smallIcon' }} />
              {viewsCount}
            </IconsBox>
            <IconsBox>
              <ChatBubbleOutlineIcon
                color="action"
                sx={{ fontSize: 'smallIcon' }}
              />
              {comments || 10}
            </IconsBox>
          </Grid>
        </CardContentInner>
      </CardContent>
    </Card>
  )
}
