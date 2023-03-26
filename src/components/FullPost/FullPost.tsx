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
import { useAppSelector } from '~/store/hooks/hook'
import { RootState } from '~/store/store'
import FullComments from '../FullComments/FullComments'
import PostTagsList from '../Post/PostTagsList'
import { IconsBox } from '../Post/StyledPost'
import { avatarStyles, FullPostText } from './StyledFullPost'
export default function FullPost() {
  const { tags } = useAppSelector((state: RootState) => state.tags)

  return (
    <>
      <Card variant="outlined" sx={{ position: 'relative' }}>
        <Box>
          <img src="/williamsburg_bridge.jpeg" className="post__img" />
        </Box>
        <CardHeader
          avatar={<Avatar sx={avatarStyles}>M</Avatar>}
          title="Matvii"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Box sx={{ paddingLeft: '2rem' }}>
            <Typography variant="h2" fontWeight="700">
              Roast the code 1# | Rock Paper Scissors
            </Typography>
            {tags && !!tags.length && <PostTagsList tags={tags} />}

            <FullPostText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam
              voluptatum numquam ea aut dolorem quibusdam repellat. Qui quo ex a
              nisi corrupti, sunt beatae fuga voluptate deleniti iure
              cupiditate. Hic architecto ullam blanditiis, excepturi neque
              consequatur maiores perspiciatis doloribus obcaecati accusamus
              omnis error odit sint ut quas rem sapiente suscipit, minus
              exercitationem eum pariatur? Mollitia officia amet cumque nostrum.
            </FullPostText>

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

      <FullComments />
    </>
  )
}
