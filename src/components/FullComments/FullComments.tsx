import {
  Avatar,
  Box,
  CardContent,
  Divider,
  TextField,
  Typography,
} from '@mui/material'
import { comments } from '../Comments/Comments'
import {
  CommentsTitle,
  CommentsWrap,
  SingleCommentsWrap,
  StyledCommentText,
} from '../Comments/StyledComments'
import {
  FullCommentCard,
  SendButton,
  WriteCommentBox,
} from './StyledFullComments'

export default function FullComments() {
  return (
    <FullCommentCard>
      <CardContent>
        <CommentsTitle>Comments</CommentsTitle>

        <CommentsWrap>
          {comments.map((comment, i) => {
            return (
              <Box key={comment.id}>
                <SingleCommentsWrap>
                  <Avatar
                    sx={{
                      alignSelf: 'flex-start',
                      fontSize: '0.9rem',
                      width: '2rem',
                      height: '2rem',
                    }}>
                    {comment.iconName}
                  </Avatar>
                  <Box>
                    <Typography fontWeight={600}>Name</Typography>
                    <StyledCommentText>{comment.value}</StyledCommentText>
                  </Box>
                </SingleCommentsWrap>
                {i !== comments.length - 1 && (
                  <Divider sx={{ marginTop: '1rem' }} />
                )}
              </Box>
            )
          })}
        </CommentsWrap>

        <WriteCommentBox>
          <SingleCommentsWrap>
            <Avatar
              sx={{
                alignSelf: 'flex-start',
                fontSize: '0.9rem',
                width: '2rem',
                height: '2rem',
              }}>
              {comments[0].iconName}
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <form>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Write a comment..."
                  multiline
                />
                <SendButton type='submit' variant="contained">Send</SendButton>
              </form>
            </Box>
          </SingleCommentsWrap>
        </WriteCommentBox>
      </CardContent>
    </FullCommentCard>
  )
}
