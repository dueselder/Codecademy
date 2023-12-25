import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


function Track({ track, onAdd, onRemove, isRemoval, playlistTracks }) {
  const handleAddClick = () => {
    onAdd(track);
  };

  const handleRemoveClick = () => {
    onRemove(track);
  };

  const isTrackInPlaylist = playlistTracks?.some((playlistTrack) => playlistTrack.id === track.id);

  const renderActionButton = () => {
    if (isRemoval) {
      return (
        <Button variant="outlined" color="secondary" onClick={handleRemoveClick}>
          REMOVE
        </Button>
      );
    }

    if (isTrackInPlaylist) {
      return (
        <Button variant="contained" color="secondary" disabled>
          ADDED
        </Button>
      );
    }

    return (
      <Button variant="contained" color="primary" onClick={handleAddClick}>
        ADD
      </Button>
    );
  };

  return (
    <ListItem className="track">
      <ListItemAvatar>
        <Avatar alt={track.name} src={track.images[0].url} />
      </ListItemAvatar>
      <ListItemText primary={track.name} secondary={`${track.artist} | ${track.album}`} />
      {renderActionButton()}
    </ListItem>
  );
}

export default Track;
