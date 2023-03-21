import TagIcon from '@mui/icons-material/Tag'
import { Card, CardContent } from '@mui/material'
import { SingleTagWrap, StyledTagText, TagsWrap, TagTitle } from './StyledTag'

const tags = [
  { id: 1, value: 'Tag 1' },
  { id: 2, value: 'Tag 2' },
  { id: 3, value: 'Tag 3' },
  { id: 4, value: 'Tag 4' },
  { id: 5, value: 'Tag 5' },
  { id: 6, value: 'Tag 6' },
]

export default function Tags() {
  return (
    <Card variant="elevation" sx={{ display: { xs: '', md: 'block' } }}>
      <CardContent>
        <TagTitle>Tags</TagTitle>

        <TagsWrap>
          {tags.map((tag) => (
            <SingleTagWrap key={tag.id}>
              <TagIcon sx={{ fontSize: '1.1rem' }} />
              <StyledTagText>{tag.value}</StyledTagText>
            </SingleTagWrap>
          ))}
        </TagsWrap>
      </CardContent>
    </Card>
  )
}
