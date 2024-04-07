import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Work() {
  return (
    <Box
      sx={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        paddingTop: "50px",
        paddingLeft: "150px",
      }}
    >
      <Typography
        sx={{
          fontSize: "35px",
          color: "GrayText",
        }}
      >
        Work
      </Typography>
      
    </Box>
  )
}
