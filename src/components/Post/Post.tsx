import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import axios from '~/api/axios'
import { fetchPosts, useAppDispatch, useAppSelector } from '~/App'
import { IPost } from '~/types/Post'
import { filterTags } from '~/utils/filterTags'
import { timeAgo } from '~/utils/getPostTime'
import './PostStyles.scss'

import { getAvatarPreview } from '~/utils/getAvatarPreview'
import ConfirmModal from '../Modal/ConfirmModal'
import LinkToPost from './LinkToPost'
import TagsList from './PostTagsList'
import {
  bottomIconStyles,
  CardContentInner,
  cardHeaderAvatarStyles,
  closeIconStyles,
  editIconStyles,
  IconsBox,
} from './StyledPost'

type Props = {
  post: IPost
}

export default function Post({ post }: Props) {
  const dispatch = useAppDispatch()
  const [openModal, setOpenModal] = useState(false)
  const { isAuth } = useAppSelector((state) => state.auth)
  const {
    title,
    viewsCount,
    tags,
    userId: userData,
    imageUrl,
    createdAt,
    _id,
    commentsCount,
  } = post
  const { name, _id: postAuthorId } = userData

  const avatarPreview = getAvatarPreview(name)
  const postTime = timeAgo(createdAt)

  const filteredTags = filterTags(tags)

  const currentUser = isAuth
    ? useAppSelector((state) => state.auth.userData?.userData)
    : null

  const canEdit = isAuth ? currentUser?._id === postAuthorId : false

  function handleOpenModal() {
    setOpenModal(true)
  }
  
  function handleCloseModal() {
    setOpenModal(false)
  }

  async function handleDeletePost() {
    try {
      await axios.delete(`/posts/${_id}`)

      await dispatch(fetchPosts())
      toast.success('Post has been deleted')
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <>
      <ConfirmModal
        handleClose={handleCloseModal}
        handleAction={handleDeletePost}
        isOpen={openModal}
        text="Are you sure you want to delete the post?"
        buttonText="Delete"
      />
      <Card
        variant="outlined"
        sx={{ position: 'relative' }}
        className="post-card"
      >
        <Toaster />
        {canEdit && (
          <div className="post-actions">
            <Link to={`/posts/${_id}/edit`} style={{ fontSize: '0' }}>
              <EditIcon sx={editIconStyles} />
            </Link>
            <Divider orientation="vertical" flexItem />
            <CloseRoundedIcon sx={closeIconStyles} onClick={handleOpenModal} />
          </div>
        )}
        <Box>
          {imageUrl && (
            <LinkToPost id={_id}>
              <img src={imageUrl} className="post__img" />
            </LinkToPost>
          )}
        </Box>
        <LinkToPost id={_id}>
          <CardHeader
            avatar={
              <Avatar sx={cardHeaderAvatarStyles}>{avatarPreview}</Avatar>
            }
            title={name}
            subheader={postTime}
          />
        </LinkToPost>
        <CardContent>
          <LinkToPost id={_id}>
            <CardContentInner>
              <Typography variant="h2" fontWeight="700">
                {title}
              </Typography>

              {filteredTags && !!filteredTags.length && (
                <TagsList tags={filteredTags} />
              )}

              <Grid container columnGap={3} alignItems="center" mt={3}>
                <IconsBox>
                  <VisibilityIcon color="action" sx={bottomIconStyles} />
                  {viewsCount}
                </IconsBox>
                <IconsBox>
                  <ChatBubbleOutlineIcon color="action" sx={bottomIconStyles} />
                  {commentsCount}
                </IconsBox>
              </Grid>
            </CardContentInner>
          </LinkToPost>
        </CardContent>
      </Card>
    </>
  )
}
