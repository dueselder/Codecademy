import React from 'react';
import './Playlist.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tracklist from '../TrackList/TrackList';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Playlist({ playlistName, playlistTracks, onRemove, onNameChange, onSave }) {
  const handleNameChange = (event) => {
    onNameChange(event.target.value);
  };

  return (
    <Paper className="playlist" elevation={0} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
      <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'white' }} className="playlist-title">
        {playlistName}
      </Typography>
      <TextField 
        fullWidth 
        size="small" 
        label="New Playlist" 
        variant="outlined" 
        sx={{ 
          marginBottom: 2, 
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
          },
        }}
        value={playlistName} 
        onChange={handleNameChange}
      />

      <Button 
        variant="contained" 
        color="primary"
        sx={{ marginY: 2 }}
        onClick={onSave}
      >
        SAVE TO SPOTIFY
      </Button>

      <Tracklist 
        tracks={playlistTracks} 
        onRemove={onRemove}
        isRemoval={true} // 
        playlistTracks={playlistTracks} 
      />
    </Paper>
  );
}

export default Playlist;
