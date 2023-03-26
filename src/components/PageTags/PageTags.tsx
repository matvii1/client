import { Card, CardContent } from '@mui/material'
import DisplayPageTags from './DisplayPageTags'
import SkeletonTags from './SkeletonPageTags'
import { TagsWrap, TagTitle } from './StyledPageTag'

type Props = {
  tags: Array<string | number>
  areTagsLoading: boolean
  areTagsFailedToLoad: boolean
}

export default function PageTags({
  tags,
  areTagsLoading,
  areTagsFailedToLoad,
}: Props) {
  const doTagsExist = !areTagsLoading && !!tags.length && !areTagsFailedToLoad

  if (areTagsLoading) {
    return <SkeletonTags />
  }

  return (
    <Card variant="elevation" sx={{ display: { xs: '', md: 'block' } }}>
      <CardContent>
        <TagTitle>Tags</TagTitle>

        {!areTagsFailedToLoad ? (
          <DisplayPageTags tags={tags} doTagsExist={doTagsExist} />
        ) : (
          <p>failed to load</p>
        )}
        <TagsWrap></TagsWrap>
      </CardContent>
    </Card>
  )
}
