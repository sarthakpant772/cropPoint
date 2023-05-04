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

const CreateUnit = () => {
  const [category, setCategory] = useState('')
  const [unit, setUnit] = useState('unitName')
  const [name, setName] = useState('')
  const [value, setValue] = useState('')
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
        <Typography variant="h4">Create Unit</Typography>
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
            <Typography variant="subtitle1">Select Category</Typography>
          </Box>
          <Box sx={{ width: '30%' }}>
            <Select
              variant="standard"
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Age"
              onChange={(e) => {
                setCategory(e.target.value)
              }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
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
            <TextField
              id="standard-basic"
              label={unit}
              variant="standard"
              disabled
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
            <Typography variant="subtitle1">Name</Typography>
          </Box>
          <Box sx={{ width: '30%' }}>
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              onChange={(e) => setName(e.target.value)}
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
            <Typography variant="subtitle1">Value</Typography>
          </Box>
          <Box sx={{ width: '30%' }}>
            <TextField
              id="standard-basic"
              label="Value"
              variant="standard"
              onChange={(e) => setValue(e.target.value)}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: '40%', height: '20%' }}>
        <Button>Submit</Button>
      </Box>
    </Paper>
  )
}

export default CreateUnit
