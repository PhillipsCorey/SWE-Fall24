import React from 'react'
import { Box } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { LocalizationProvider } from '@mui/x-date-pickers';

import DaysToggleField from './daytogglefield';

export default function MeetingOptions({formData, handleChange}) {
  
  return (
    <Box>
      <DaysToggleField selectedDays={formData.selectedDays} handleChange={handleChange}/>
      <LocalizationProvider dateAdapter={AdapterDateFns} >
        <TimePicker
          label="No sooner then"
          value={formData.startTime}
          onChange={(newValue) => handleChange({ target: { name: 'startTime', value: newValue }})}
        />
        <TimePicker
          label="No later then"
          value={formData.endTime} // 1 hour later
          onChange={(newValue) => handleChange({ target: { name: 'endTime', value: newValue }})}
        />
      </LocalizationProvider>
    </Box>  
  )
}
