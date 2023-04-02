import { Avatar, Box, Divider, Typography } from '@mui/material'
import { useAppSelector } from '~/App'
import { getAvatarPreview } from '~/utils/getAvatarPreview'
import CommentsSkeleton from '../Comments/CommentsSkeleton'
import {
  SingleCommentsWrap,
  StyledCommentText,
} from '../Comments/StyledComments'

export default function FullCommentsList() {
  const { postComments: comments, postCommentsStatus } = useAppSelector(
    (state) => state.comments
  )

  const areCommentsLoading = postCommentsStatus === 'loading'
  const areCommentsFailed = postCommentsStatus == 'failed'
  const areCommentsLoaded = postCommentsStatus == 'succeed'

  if (areCommentsLoading) {
    return <CommentsSkeleton />
  }

  if (areCommentsFailed) {
    return <Typography variant="h3">Failed to load</Typography>
  }

  if (areCommentsLoaded && !comments.length) {
    return (
      <Typography variant="body1" color="gray">
        No comments yet
      </Typography>
    )
  }

  return (
    <>
      {comments.map((comment, i) => {
        const { _id, userId: user, text } = comment
        const avatarPreview = getAvatarPreview(user.name)

        return (
          <Box key={_id}>
            <SingleCommentsWrap>
              <Avatar
                sx={{
                  alignSelf: 'flex-start',
                  fontSize: '0.9rem',
                  width: '2rem',
                  height: '2rem',
                }}
              >
                {avatarPreview}
              </Avatar>
              <Box>
                <Typography fontWeight={600}>{user.name}</Typography>
                <StyledCommentText>{text}</StyledCommentText>
              </Box>
            </SingleCommentsWrap>
            {i !== comments.length - 1 && (
              <Divider sx={{ marginTop: '1rem' }} />
            )}
          </Box>
        )
      })}
    </>
  )
}
