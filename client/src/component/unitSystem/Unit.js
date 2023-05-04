import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import Paper from '@mui/material/Paper'
import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))
const Unit = () => {
  const rows = [
    {
      name: 'sarthak',
      Category: '100',
      unit: '100',
      value: '100',
      id: '100',
    },
  ]
  return (
    <Box
      sx={{
        width: '95%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '20%',
          justifyContent: 'flex-end',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Link to="/createUnit">
          <Button variant="contained" size="large" sx={{ height: '50%' }}>
            Create Unit
          </Button>
        </Link>
      </Box>
      <Box sx={{ width: '100%' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Category</StyledTableCell>
                <StyledTableCell align="right">Base unit</StyledTableCell>
                <StyledTableCell align="right">value</StyledTableCell>
                <StyledTableCell align="right">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.Category}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.unit}</StyledTableCell>
                  <StyledTableCell align="right">{row.value}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Button backgroundColor="secondary.light">
                      {' '}
                      <EditIcon />{' '}
                    </Button>
                    <Button backgroundColor="secondary.light">
                      <DeleteForeverIcon />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default Unit
