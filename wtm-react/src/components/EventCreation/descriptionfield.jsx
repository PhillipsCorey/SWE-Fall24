import React from 'react'
import {Box, TextField} from '@mui/material'

export default function DescriptionField({eventName, eventDescription, handleChange}) {
  return (
    <Box className="section" sx={{ margin: 2 }}>
      <TextField
        label="Event Name"
        name="eventName"             
        variant="outlined"
        value={eventName}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      
      <TextField
        label="Event Description"
        variant="outlined"
        name="eventDescription"
        value={eventDescription}
        onChange={handleChange}
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />

    </Box>
  )
}
