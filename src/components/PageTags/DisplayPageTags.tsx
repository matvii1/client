import TagIcon from '@mui/icons-material/Tag'
import { Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { ITag } from '~/types/Tag'
import { SingleTagWrap, StyledTagText } from './StyledPageTag'

type DisplayPageProps = {
  tags: ITag[]
  doTagsExist: boolean
}

export default function DisplayPageTags({
  tags,
  doTagsExist,
}: DisplayPageProps) {
  return (
    <>
      {doTagsExist ? (
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
      ) : (
        <Typography sx={{ color: grey[600] }}>
          There are no tags yet
        </Typography>
      )}
    </>
  )
}
