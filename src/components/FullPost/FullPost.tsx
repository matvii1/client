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
import { blueGrey } from '@mui/material/colors'
import FullComments from '../FullComments/FullComments'
import { IconsBox } from '../Post/StyledPost'
import TagsList from '../Post/TagsList'
import { FullPostText } from './StyledFullPost'
export default function FullPost() {
  return (
    <>
      <Card variant="outlined" sx={{ position: 'relative' }}>
        <Box>
          <img src="/williamsburg_bridge.jpeg" className="post__img" />
        </Box>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                fontSize: '0.8rem',
                width: '30px',
                height: '30px',
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
          <Box sx={{ paddingLeft: '2rem' }}>
            <Typography variant="h2" fontWeight="700">
              Roast the code 1# | Rock Paper Scissors
            </Typography>
            <TagsList />

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
