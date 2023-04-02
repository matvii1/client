import { CardContent } from '@mui/material'
import { useAppSelector } from '~/App'
import { CommentsTitle, CommentsWrap } from '../Comments/StyledComments'
import CommentsList from './FullCommentsList'
import { FullCommentCard } from './StyledFullComments'
import WriteComment from './WriteComment'

export default function FullComments() {
  const { isAuth } = useAppSelector((state) => state.auth)

  return (
    <FullCommentCard>
      <CardContent>
        <CommentsTitle>Comments</CommentsTitle>

        <CommentsWrap>
          <CommentsList />
        </CommentsWrap>

        {isAuth && <WriteComment />}
      </CardContent>
    </FullCommentCard>
  )
}
