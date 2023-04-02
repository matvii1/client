import { Avatar, Box, Skeleton } from '@mui/material'
import { commentStyles, SingleCommentsWrap } from './StyledComments'

export default function CommentsSkeleton() {
  return (
    <>
      {new Array(5).fill(0).map((_, i) => (
        <Box sx={commentStyles} key={i}>
          <SingleCommentsWrap pb={1}>
            <Skeleton variant="circular">
              <Avatar sx={{ alignSelf: 'flex-start' }}></Avatar>
            </Skeleton>
            <Box justifySelf="stretch" flexGrow={0.5}>
              <Skeleton width={80} />
              <Skeleton sx={{ width: '100%' }} height={14} />
              <Skeleton sx={{ width: '100%' }} height={14} />
            </Box>
          </SingleCommentsWrap>
        </Box>
      ))}
    </>
  )
}
