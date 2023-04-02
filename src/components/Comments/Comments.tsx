import { Card, CardContent, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { IComment } from '~/types/Comment'
import CommentsList from './CommentsList'
import CommentsSkeleton from './CommentsSkeleton'
import { CommentsTitle, CommentsWrap } from './StyledComments'

type Props = {
  comments: IComment[]
  isLoading: boolean
}

export default function Comments({ comments, isLoading }: Props) {
  if (isLoading) {
    return <CommentsSkeleton />
  }

  return (
    <Card>
      <CardContent>
        <CommentsTitle>Comments</CommentsTitle>

        <CommentsWrap>
          {!!comments.length ? (
            <CommentsList comments={comments} />
          ) : (
            <Typography sx={{ color: grey[600] }}>
              There are no comments yet
            </Typography>
          )}
        </CommentsWrap>
      </CardContent>
    </Card>
  )
}
