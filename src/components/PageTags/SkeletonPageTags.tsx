import TagIcon from '@mui/icons-material/Tag'
import { Card, CardContent, Skeleton } from '@mui/material'
import { SingleTagWrap, TagsWrap, TagTitle } from './StyledPageTag'

export default function SkeletonTags() {
  return (
    <Card variant="elevation" sx={{ display: { xs: '', md: 'block' } }}>
      <CardContent>
        <TagTitle sx={{ opacity: '0.5' }}>Tags</TagTitle>

        <TagsWrap>
          {new Array(5).fill(0).map((_, i) => {
            return (
              <SingleTagWrap key={i}>
                <TagIcon
                  sx={{
                    fontSize: '1.1rem',
                    opacity: '0.25',
                  }}
                />

                <Skeleton sx={{ width: '100%' }} animation="wave"></Skeleton>
              </SingleTagWrap>
            )
          })}
        </TagsWrap>
      </CardContent>
    </Card>
  )
}
