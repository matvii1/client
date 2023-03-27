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
import { useAppSelector } from '~/store/hooks/redux'
import { RootState } from '~/store/store'
import { isImage } from '~/utils/isImage'
import FullComments from '../FullComments/FullComments'
import PostTagsList from '../Post/PostTagsList'
import { IconsBox } from '../Post/StyledPost'
import SkeletonFullPost from './SkeletonFullPost'
import { avatarStyles, FullPostText } from './StyledFullPost'

export default function FullPost() {
  const {
    posts: { currentPost, currentPostStatus },
  } = useAppSelector((state: RootState) => state)

  const tags = currentPost?.tags || []

  {
    /*  TODO: 
     - add skeleton when loading
     - add comments
    */
  }

  if (currentPostStatus === 'loading') {
    return <SkeletonFullPost />
  }

  const { title, text, updatedAt, createdAt, viewsCount, imageUrl } =
    currentPost!

  const postImage = false
    ? `/${imageUrl}`
    : 'https://placehold.co/2000x2000/png'

  return (
    <>
      <Card variant="outlined" sx={{ position: 'relative' }}>
        {imageUrl && isImage(imageUrl) && (
          <Box>
            <img src={postImage} className="post__img" />
          </Box>
        )}
        <CardHeader
          avatar={<Avatar sx={avatarStyles}>M</Avatar>}
          title={title}
          subheader={`${updatedAt || createdAt}`}
        />
        <CardContent>
          <Box sx={{ paddingLeft: '2rem' }}>
            <Typography variant="h2" fontWeight="700">
              {title}
            </Typography>
            {tags && !!tags.length && <PostTagsList tags={tags} />}

            <FullPostText>{text}</FullPostText>

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
                200
              </IconsBox>
            </Grid>
          </Box>
        </CardContent>
      </Card>

      <FullComments />
    </>
  )
}
