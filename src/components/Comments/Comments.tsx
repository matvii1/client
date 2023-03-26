import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from '@mui/material'
import { grey } from '@mui/material/colors'
import {
  CommentsTitle,
  CommentsWrap,
  SingleCommentsWrap,
  StyledCommentText,
} from './StyledComments'

export const comments = [
  { id: 1, value: 'My comment 1', iconName: 'K' },
  { id: 2, value: 'My comment 1', iconName: 'A' },
  { id: 5, value: 'This is my longest comment', iconName: 'JS' },
]

export default function Comments() {
  return (
    <Card>
      <CardContent>
        <CommentsTitle>Comments</CommentsTitle>

        <CommentsWrap>
          {comments.map((comment, i) => {
            return (
              <Box
                key={comment.id}
                sx={{
                  borderRadius: '0.25rem',
                  padding: '0.5rem 0 0 0.5rem',
                  transition: 'background-color 0.25s ease',
                  '&:hover': {
                    backgroundColor: grey[100],
                  },
                  '&:last-child': {
                    paddingBottom: '0.75rem',
                  },
                }}>
                <SingleCommentsWrap>
                  <Avatar sx={{ alignSelf: 'flex-start' }}>
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
      </CardContent>
    </Card>
  )
}
