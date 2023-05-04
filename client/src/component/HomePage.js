import { Box, Button, Divider } from '@mui/material'
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const HomePage = () => {
  const [unitSystem, setUnitSystem] = useState(false)
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          width: '15%',
          backgroundColor: 'primary.main',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* logo */}
        <Box
          sx={{
            width: '100%',
            height: '20%',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            borderBottomWidth: 'thin',
            borderBottomColor: 'primary.light',
          }}
        >
          logo
        </Box>
        <Divider />
        <Box
          sx={{
            width: '100%',
            height: '80%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: '90%',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              marginTop: '10px',
            }}
          >
            <Button
              sx={{ backgroundColor: 'primary.dark', color: 'white' }}
              fullWidth
              onClick={() => {
                setUnitSystem(!unitSystem)
              }}
            >
              Unit System
            </Button>
            <Box
              sx={{
                width: '100%',
                alignItems: 'end',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {unitSystem && (
                <Box
                  sx={{
                    width: '90%',

                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                  }}
                >
                  <Link to="unitCategory">
                    <Button
                      fullWidth
                      sx={{
                        backgroundColor: 'primary.dark',
                        color: 'white',
                        marginTop: '10px',
                      }}
                    >
                      Unit Category
                    </Button>
                  </Link>
                  <Link to="unit">
                    <Button
                      fullWidth
                      sx={{
                        backgroundColor: 'primary.dark',
                        color: 'white',
                        marginTop: '10px',
                      }}
                    >
                      Unit
                    </Button>
                  </Link>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '85%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}

export default HomePage
