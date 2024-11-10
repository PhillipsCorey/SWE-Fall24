import React from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';

import  '../components/EventCreation/eventcreator.css';

import AddMembers from '../components/EventCreation/addmembers';
import MeetingOptions from '../components/EventCreation/meetingoptions';
import DescriptionField from '../components/EventCreation/descriptionfield';

function EventCreator() {
  
  const [formData, setFormData] = useState({
    eventName: '',
    eventDescription: '',
    selectedDays: [true, true, true, true, true, true, true],
    startTime: '',
    endTime: '',
    members: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    setFormData((prevData) => {
      // Check if the name starts with 'selectedDays' and contains an index
      if (name.startsWith("selectedDays")) {
        const match = name.match(/\d+/); // Extract the index
        if (match) {
          const index = parseInt(match[0], 10);
          const updatedDays = [...prevData.selectedDays];
          updatedDays[index] = checked; // Update the specific index with the new checked value
  
          return { ...prevData, selectedDays: updatedDays };
        }
      }
      
      // Update other fields
      return {
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  const handleMembersChange = (newMembers) => {
    setFormData((prevData) => ({
      ...prevData,
      onMembersChange: newMembers,
    }));
  };

  const handleSubmit = () => {
    console.log("Event Created:", formData);
    //TODO Further logic to send eventData to backend can be added here
  };
  
  return (
    <div className="event-creation-container">
      <DescriptionField eventName={formData.eventName} eventDescription={formData.eventDescription} handleChange={handleChange} />
      <MeetingOptions formData={formData} handleChange={handleChange}/>
      <AddMembers members={formData.members} onMembersChange={handleMembersChange}/>
      <Button onClick={handleSubmit}>Add Event</Button> 
    </div>
  );  
}
  
export default EventCreator;