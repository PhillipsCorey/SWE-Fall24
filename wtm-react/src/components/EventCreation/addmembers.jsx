import React, { useState } from 'react';
import { Box, Typography, Chip, TextField } from '@mui/material';

function AddMembers({ members, onMembersChange }) {
  const [inputValue, setInputValue] = useState(''); // Store the current input value

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    //TODO check if user has entered a valid ID and invite to meeting
    if (e.key === 'Enter' && inputValue.trim()) {
      // Add the new ID to members if it doesn't already exist
      if (!members.some((member) => member === inputValue.trim())) {
        onMembersChange([...members, inputValue.trim()]);
      }
      setInputValue(''); // Clear the input field
      e.preventDefault(); // Prevent form submission
    }
  };

  const handleDelete = (idToRemove) => {
    onMembersChange(members.filter((id) => id !== idToRemove));
  };

  return (
    <Box className="section" sx={{ margin: 2 }}>
      <Typography variant="h6">Add Friends by ID</Typography>

      <TextField
        label="Enter Friend ID"
        placeholder="Type friend ID and press Enter"
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress} // Add friend on Enter key press
        sx={{ marginBottom: 2 }}
      />

      {/* Display each selected friend as a Chip */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {members.map((id, index) => (
          <Chip
            key={index}
            label={id}
            onDelete={() => handleDelete(id)} // Remove friend ID
          />
        ))}
      </Box>
    </Box>
  );
}

export default AddMembers;
