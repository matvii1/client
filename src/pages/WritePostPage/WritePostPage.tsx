import { Box, Button, Grid, Paper, TextField } from '@mui/material'
import 'easymde/dist/easymde.min.css'
import { useState } from 'react'
import SimpleMDE from 'react-simplemde-editor'
import Container from '~/components/Container/Container'
import GoBack from '~/components/GoBack/GoBack'

export default function WritePostPage() {
  const [value, setValue] = useState('')

  function handleOnChange(value: string) {
    console.log(value)
  }

  const imageUrl = ''

  const options = {
    spellChecker: false,
    maxHeight: '400px',
    autofocus: true,
    placeholder: 'Start typing...',
    status: false,
  }

  function onClickRemoveImage() {}

  function handleChangeFile() {}

  return (
    <Container>
      <GoBack />
      <Paper sx={{ marginTop: '2rem', padding: '2rem' }}>
        <Button variant="contained">Upload image</Button>
        <Grid
          container
          alignItems="center"
          columnGap="2.2rem"
          margin="1rem 0 0 0">
          <input type="file" onChange={handleChangeFile} hidden />
          {imageUrl && (
            <Button
              variant="contained"
              color="error"
              sx={{ marginLeft: '1rem' }}
              onClick={onClickRemoveImage}>
              Delete
            </Button>
          )}

          <TextField
            variant="standard"
            placeholder="Title"
            sx={{ marginTop: '1rem' }}
            InputProps={{ style: { padding: 0 } }}
          />
          <TextField
            variant="standard"
            placeholder="Tags"
            sx={{ marginTop: '1rem' }}
          />
        </Grid>

        <Box sx={{ marginTop: '1.2rem' }}>
          <SimpleMDE
            value={value}
            onChange={handleOnChange}
            options={options}
          />
        </Box>
      </Paper>
    </Container>
  )
}
