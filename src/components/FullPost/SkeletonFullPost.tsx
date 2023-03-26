import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Skeleton,
} from '@mui/material'
import { avatarStyles } from './StyledFullPost'

export default function SkeletonFullPost() {
  return (
    <Card variant="outlined" sx={{ position: 'relative' }}>
      <WaveSkeleton variant="rectangular" height={200} />
      <CardHeader
        avatar={
          <WaveSkeleton variant="circular">
            <Avatar sx={avatarStyles}></Avatar>
          </WaveSkeleton>
        }
        title={<WaveSkeleton width={80} height={16} />}
        subheader={<WaveSkeleton width={140} height={14} />}
      />
      <CardContent>
        <Box sx={{ paddingLeft: '2rem' }}>
          <WaveSkeleton />
          <WaveSkeleton />

          <Grid container columnSpacing={1} sx={{ marginTop: '1rem' }}>
            <Grid item>
              <WaveSkeleton width={30} />
            </Grid>
            <Grid item>
              <WaveSkeleton width={30} />
            </Grid>
            <Grid item>
              <WaveSkeleton width={30} />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  )
}

function WaveSkeleton({ ...args }) {
  return <Skeleton {...args} animation="wave" />
}
