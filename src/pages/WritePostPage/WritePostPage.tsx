import { LoadingButton } from '@mui/lab'
import { Box, Button, Grid, Paper, TextField } from '@mui/material'
import 'easymde/dist/easymde.min.css'
import { ChangeEvent, FormEvent, useMemo, useRef, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import SimpleMDE from 'react-simplemde-editor'
import axios from '~/api/axios'
import Container from '~/components/Container/Container'
import GoBack from '~/components/GoBack/GoBack'

export default function WritePostPage() {
  const [isLoading, setIsLoading] = useState(false)

  const [imageUrl, setImageUrl] = useState('')
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const [tags, setTags] = useState('')
  const navigate = useNavigate()

  const fileRef = useRef<HTMLInputElement | null>(null)

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Start typing...',
      status: false,
    }),
    []
  )

  function onClickRemoveImage() {
    setImageUrl('')
  }

  function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value)
  }

  function handleTagsChange(e: ChangeEvent<HTMLInputElement>) {
    setTags(e.target.value)
  }

  async function handleFileOnChange(event: ChangeEvent<HTMLInputElement>) {
    try {
      const formData = new FormData()

      if (event.target.files) {
        const file = event.target.files[0]

        formData.append('image', file)

        const { data } = await axios.post('/uploads', formData)
        toast.success('File uploaded')
        setImageUrl('http://localhost:4444' + data.url)
      }
    } catch (error) {
      toast.error('Could not upload a file')
    }
  }

  async function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
    setIsLoading(true)
    try {
      e.preventDefault()
      const fields = {
        text,
        title,
        tags: tags.split(' '),
        imageUrl,
      }

      const { data } = await axios.post('/posts', fields)

      if (data) {
        setIsLoading(false)

        setImageUrl('')
        setText('')
        setTitle('')
        setTags('')

        toast.success('Post created! \nRedirecting...')
        setTimeout(() => {
          navigate(`/posts/${data._id}`)
        }, 1000)
      }
    } catch (error: any) {
      setIsLoading(false)
      const messageText = error.response.data[0].msg

      toast.error(messageText || 'Something went wrong', { duration: 2000 })
    } finally {
      setIsLoading(false)
    }
  }

  function handleFileClick() {
    fileRef.current?.click()
  }

  return (
    <Container>
      <Toaster />
      <GoBack />
      <Paper sx={{ marginTop: '2rem', padding: '2rem' }}>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Button variant="contained" onClick={handleFileClick}>
            <input
              ref={fileRef}
              type="file"
              hidden
              onChange={handleFileOnChange}
            />
            Upload image
          </Button>

          {imageUrl && (
            <Button
              variant="contained"
              color="error"
              sx={{ maxWidth: '65%' }}
              onClick={onClickRemoveImage}
            >
              Delete
            </Button>
          )}
        </Box>

        <form onSubmit={handleOnSubmit} noValidate>
          <Grid
            container
            alignItems="center"
            columnGap="2.2rem"
            margin="1rem 0 0 0"
          >
            {imageUrl && (
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <img
                  src={imageUrl}
                  style={{
                    display: 'block',
                    width: '45%',
                    height: '100%',
                    margin: 0,
                    objectFit: 'cover',
                  }}
                />
              </Box>
            )}

            <TextField
              variant="standard"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
              required
              sx={{ marginTop: '1rem' }}
              InputProps={{ style: { padding: 0 } }}
            />
            <TextField
              variant="standard"
              value={tags}
              placeholder="Tags"
              onChange={handleTagsChange}
              sx={{ marginTop: '1rem' }}
            />
          </Grid>

          <Box sx={{ marginTop: '1.2rem' }}>
            <SimpleMDE
              value={text}
              onChange={(val) => setText(val)}
              options={options}
            />

            <LoadingButton
              loading={isLoading}
              type="submit"
              variant="contained"
              sx={{ marginTop: '1rem' }}
            >
              Post
            </LoadingButton>
          </Box>
        </form>
      </Paper>
    </Container>
  )
}
