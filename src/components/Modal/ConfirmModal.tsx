import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import { red } from '@mui/material/colors'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

const style = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1rem',
  position: 'absolute',
  top: '15%',
  right: '50%',
  transform: 'translate(50%, -50%)',
  maxWidth: 300,
  bgcolor: 'white',
  color: 'black',
  borderRadius: '0,5rem',
  boxShadow: 24,
  p: 2,
}

const modalStyles = {
  borderRadius: '10rem',
}

type Props = {
  handleClose: () => void
  handleAction: () => void
  isOpen: boolean
  text: string
  buttonText: string
}

export default function ConfirmModal({
  handleClose,
  handleAction,
  isOpen,
  text,
  buttonText,
}: Props) {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      style={modalStyles}
      closeAfterTransition
    >
      <Box sx={style}>
        <Typography>{text}</Typography>
        <Box sx={{ display: 'flex', gap: '1rem', alignSelf: 'flex-end' }}>
          <Button
            size="small"
            variant="contained"
            onClick={handleAction}
            sx={{
              background: red[400],
              maxWidth: 'max-content',
              '&:hover': { backgroundColor: red[900] },
            }}
          >
            {buttonText}
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={handleClose}
            sx={{
              maxWidth: 'max-content',
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}
