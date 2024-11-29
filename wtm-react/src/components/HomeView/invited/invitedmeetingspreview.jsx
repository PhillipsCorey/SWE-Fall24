import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import { Card, CardContent, Typography, Box, Chip, Button } from '@mui/material';
import { UserContext } from '../../../context/UserProvider';

function InvitedMeetingsPreview({ meeting, onJoin, onReject }) {
  const navigate = useNavigate();

  const {user} = useContext(UserContext);

  const handleJoin = () => {
    onJoin(user._id, meeting._id);
    setTimeout(() => {
      // Redirect after delay
      window.location.reload();
    }, 1000);
  };

  const handleReject = () => {
    onReject(user._id, meeting._id);
  };

  const daysOfWeek = ['su', 'm', 't', 'w', 'th', 'f', 'sa'];
  var selectedDays = daysOfWeek.filter((_, index) => meeting.selectedDays[index] === "true");

  // Function to check if a day is selected
  const isDaySelected = (day) => {
    return selectedDays.includes(day);
  };

  return (
    <Card sx={{ marginBottom: 2, cursor: 'pointer' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>{meeting.name}</Typography>
        <Typography variant="body2" sx={{ marginBottom: 2 }}>{meeting.description}</Typography>
        <Typography variant="caption" display="block" gutterBottom>{`Organizers: ${meeting.organizers.length}`}</Typography>
        <Typography variant="caption" display="block" gutterBottom>{`Time: ${meeting.timeRange.startTime} - ${meeting.timeRange.endTime}`}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
          {daysOfWeek.map((day) => (
            <Chip
              key={day}
              label={day.toUpperCase()}
              color={isDaySelected(day) ? 'primary' : 'default'}
              sx={{ width: 32 }}
            />
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
          <Button variant="contained" color="primary" onClick={handleJoin} sx={{ marginRight: 1 }}>Join</Button>
          <Button variant="contained" color="error" onClick={handleReject}>Reject</Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default InvitedMeetingsPreview;