import React from 'react';
import './TrackList.css';
import List from '@mui/material/List';
import Track from '../Track/Track';

function TrackList({ tracks, onAdd, onRemove, isRemoval, playlistTracks }) {
  return (
    <List className="tracklist">
      {tracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          onAdd={onAdd}
          onRemove={onRemove}
          isRemoval={isRemoval}
          playlistTracks={playlistTracks}
        />
      ))}
    </List>
  );
}

export default TrackList;
