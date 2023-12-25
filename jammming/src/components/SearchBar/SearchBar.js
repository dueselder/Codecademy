import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function SearchBar({ onSearchClick }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    onSearchClick(inputValue);
  };

  return (
    <div style={{ padding: '10px', borderRadius: '4px', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
      <TextField
        fullWidth
        size="small"
        label="Search for a song"
        variant="outlined"
        sx={{
          marginBottom: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '4px',
          input: { color: '#fff', fontSize: '1.2rem' }, // Bigger font size
          label: { color: '#fff', fontSize: '1.2rem' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' }, // Border color
            '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.8)' }, // Hover border color
            '&.Mui-focused fieldset': { borderColor: 'rgba(255, 255, 255, 1)' }, // Focused border color
          },
        }}
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<SearchRoundedIcon />}
        sx={{
          padding: '10px 20px',
          backgroundColor: '#ed2939', // Use the color from your palette
          '&:hover': {
            backgroundColor: '#c82333', // Darker shade for hover state
          },
        }}
        onClick={handleButtonClick} // Use onClick to trigger the search
      >
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
