import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


export default function DaysToggleField({selectedDays, handleChange}) {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const handleToggle = (dayIndex) => {
    const newDays = [...selectedDays];
    newDays[dayIndex] = !newDays[dayIndex];
    handleChange({ target: { name: 'selectedDays', value: newDays } });
  };

  return (
    <ToggleButtonGroup>
      {daysOfWeek.map((day, index) => (
        <ToggleButton
          key={index}
          value={day}
          selected={selectedDays[index]}
          onChange={() => handleToggle(index)}
        >
          {day}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
