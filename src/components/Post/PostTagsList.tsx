import { Box } from '@mui/material'
import { Tag, TagsBox } from './StyledPost'

type Props = {
  tags: Array<string | number>
}

export default function PostTagsList({ tags }: Props) {
  return (
    <TagsBox component="ul">
      {tags.map((tag, i) => {
        const formattedTag = '#' + tag

        return (
          <Box component="li" key={i}>
            <Tag>{formattedTag}</Tag>
          </Box>
        )
      })}
    </TagsBox>
  )
}
