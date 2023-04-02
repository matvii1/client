import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
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

import ReactMarkdown from 'react-markdown'
import { useAppSelector } from '~/App'
import { filterTags } from '~/utils/filterTags'
import { getAvatarPreview } from '~/utils/getAvatarPreview'
import { timeAgo } from '~/utils/getPostTime'
import PostTagsList from '../Post/PostTagsList'
import { IconsBox } from '../Post/StyledPost'
import { avatarStyles, FullPostText } from './StyledFullPost'

export default function FullPostCard({}) {
  const { currentPost, currentPostStatus } = useAppSelector(
    (state) => state.posts
  )
  const { postComments: comments } = useAppSelector((state) => state.comments)

  const {
    title,
    text,
    userId: { name },
    createdAt,
    viewsCount,
    imageUrl,
    tags: postTags,
  } = currentPost!

  const postImage = imageUrl ? imageUrl : 'https://placehold.co/2000x2000/png'
  const tags = filterTags(postTags || [])

  const avatarPreview = getAvatarPreview(name)

  return (
    <Card variant="outlined" sx={{ position: 'relative', width: '100%' }}>
      {imageUrl && (
        <Box>
          <img src={postImage} className="post__img" />
        </Box>
      )}
      <CardHeader
        avatar={<Avatar sx={avatarStyles}>{avatarPreview}</Avatar>}
        title={name}
        subheader={timeAgo(createdAt.toString())}
      />
      <CardContent>
        <Box sx={{ paddingLeft: '2rem' }}>
          <Typography variant="h2" fontWeight="700">
            {title}
          </Typography>
          {tags && !!tags.length && <PostTagsList tags={tags} />}

          <FullPostText>
            <ReactMarkdown children={text} />
          </FullPostText>

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
              {comments?.length || 0}
            </IconsBox>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  )
}
