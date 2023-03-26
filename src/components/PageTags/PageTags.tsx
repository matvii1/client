import TagIcon from '@mui/icons-material/Tag'
import { Card, CardContent, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { ITag } from '~/types/Tag'
import SkeletonTags from './SkeletonPageTags'
import {
  SingleTagWrap,
  StyledTagText,
  TagsWrap,
  TagTitle,
} from './StyledPageTag'

type Props = {
  tags: Array<string | number>
  areTagsLoading: boolean
}

export default function PageTags({ tags, areTagsLoading }: Props) {
  const doTagsExist = !areTagsLoading && !!tags.length

  if (areTagsLoading) {
    return <SkeletonTags />
  }

  return (
    <Card variant="elevation" sx={{ display: { xs: '', md: 'block' } }}>
      <CardContent>
        <TagTitle>Tags</TagTitle>

        <TagsWrap>
          {doTagsExist ? (
            <DisplayPageTags tags={tags} />
          ) : (
            <Typography sx={{ color: grey[600] }}>
              There are no tags yet
            </Typography>
          )}
        </TagsWrap>
      </CardContent>
    </Card>
  )
}

function DisplayPageTags({ tags }: { tags: ITag[] }) {
  return (
    <>
      {tags.map((tag, i) => {
        return (
          <SingleTagWrap key={i}>
            <TagIcon sx={{ fontSize: '1.1rem' }} />
            <StyledTagText>{tag}</StyledTagText>
          </SingleTagWrap>
        )
      })}
    </>
  )
}
