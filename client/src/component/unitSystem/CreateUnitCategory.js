import {
  Box,
  Button,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'

const CreateUnitCategory = () => {
  const [category, setCategory] = useState('')
  const [unit, setUnit] = useState('')

  return (
    <Paper
      sx={{
        width: '80%',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          height: '10%',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4">Create Unit Category</Typography>
      </Box>
      <Box
        sx={{
          height: '60%',
          width: '100%',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}
      >
        <Box
          sx={{
            width: '50%',
            height: '4em',
            // backgroundColor: 'primary.main',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Box sx={{ width: '30%' }}>
            <Typography variant="subtitle1">Category</Typography>
          </Box>
          <Box sx={{ width: '30%' }}>
            <TextField
              id="standard-basic"
              label={category}
              variant="standard"
              onChange={(e) => setCategory(e.target.value)}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: '50%',
            height: '4em',
            // backgroundColor: 'primary.main',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Box sx={{ width: '30%' }}>
            <Typography variant="subtitle1">Base Unit</Typography>
          </Box>
          <Box sx={{ width: '30%' }}>
            <TextField id="standard-basic" label={unit} variant="standard" />
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: '40%', height: '20%' }}>
        <Button>Submit</Button>
      </Box>
    </Paper>
  )
}

export default CreateUnitCategory
