import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

function EventPreview({ event }) {
  const navigate = useNavigate();

  const handleEventClick = () => {
    navigate(`/event/${event.id}`);  // Navigate to event details page
  };

  return (
    <Card sx={{ marginBottom: 2, cursor: 'pointer' }} onClick={handleEventClick}>
      <CardContent>
        <Typography variant="h5">{event.name}</Typography>
        <Typography variant="body2">{event.description}</Typography>
        <Typography variant="caption">{`Date: ${event.date}`}</Typography>
      </CardContent>
    </Card>
  );
}

export default EventPreview;
