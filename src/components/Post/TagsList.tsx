import { Box } from '@mui/material'
import { Tag, TagsBox } from './StyledPost'

const tags = [
  { id: 1, value: 'rock' },
  { id: 2, value: 'paper' },
  { id: 3, value: 'scissors' },
  { id: 4, value: 'rock' },
  { id: 5, value: 'paper' },
  { id: 6, value: 'scissors' },
]

export default function TagsList() {
  return (
    <TagsBox component="ul">
      {tags.map((tag) => {
        const formattedTag = '#' + tag.value

        return (
          <Box component="li" key={tag.id}>
            <Tag>{formattedTag}</Tag>
          </Box>
        )
      })}
    </TagsBox>
  )
}
