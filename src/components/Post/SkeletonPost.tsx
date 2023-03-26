import { Avatar, Card, CardHeader, Skeleton, Typography } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import { CardContentInner } from './StyledPost'

export default function SkeletonPost() {
  return (
    <Card sx={{ paddingBottom: '1rem' }}>
      <Skeleton width="auto" height={240} variant="rounded" animation="wave" />
      <CardHeader
        avatar={
          <Skeleton variant="circular" animation="wave">
            <Avatar
              sx={{
                fontSize: '0.8rem',
                width: '40px',
                height: '40px',
                bgcolor: blueGrey[500],
              }}
              aria-label="recipe">
              M
            </Avatar>
          </Skeleton>
        }
        title={<Skeleton width={70} animation="wave" />}
        subheader={<Skeleton width={180} animation="wave" />}
      />

      <CardContentInner>
        <Typography sx={{ fontSize: '0.8rem' }}>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </Typography>
      </CardContentInner>
    </Card>
  )
}
