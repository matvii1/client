import { Avatar, Box, Divider, Typography } from '@mui/material'
import { IComment } from '~/types/Comment'
import { getAvatarPreview } from '~/utils/getAvatarPreview'
import {
  commentStyles,
  SingleCommentsWrap,
  StyledCommentText,
} from './StyledComments'

type Props = {
  comments: IComment[]
}

export default function CommentsList({ comments }: Props) {
  return (
    <>
      {comments.map((comment, i) => {
        const isDivider = i !== comments.length - 1
        const {
          _id: id,
          text,
          userId: { name, lastName },
        } = comment
        const lastNameShort = lastName[0].toUpperCase()
        const avatarPreview = getAvatarPreview(name)

        return (
          <Box key={id} sx={commentStyles}>
            <SingleCommentsWrap>
              <Avatar sx={{ alignSelf: 'flex-start' }}>{avatarPreview}</Avatar>
              <Box>
                <Typography
                  fontWeight={500}
                >{`${name} ${lastNameShort}.`}</Typography>
                <StyledCommentText>{text}</StyledCommentText>
              </Box>
            </SingleCommentsWrap>
            {isDivider && <Divider sx={{ marginTop: '1rem' }} />}
          </Box>
        )
      })}
    </>
  )
}
