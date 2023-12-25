import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function SearchResults({ tracks, onAdd, playlistTracks }) {


  return (
    <Paper className="search-results" elevation={0} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', padding: '16px', marginBottom: '24px' }}>
      <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'white' }} className="search-results-title">
        Search Results
      </Typography>

      <TrackList 
        tracks={tracks}
        onAdd={onAdd}
        playlistTracks={playlistTracks}
        isRemoval={false}
      />

    </Paper>
  );
}

export default SearchResults;
