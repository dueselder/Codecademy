import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid'; 
import Container from '@mui/material/Container';
import Header from '../Header/Header';
import mockTracks from './mockTracks';


// Custom MUI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#ed2939',
    },
    secondary: {
      main: '#bfc0c0', 
    },
    background: {
      default: '#12191e', 
      paper: '#2a3439', 
    },
    text: {
      primary: '#e5e5e5', 
      secondary: '#6b554b', 
    },
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    h1: {
      fontSize: '2rem', 
    },
    // Add other typography styles as needed
  },
  components: {
    // Customizing specific components (example with Button)
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4, // Example style override
          // Add other overrides as needed
        },
      },
    },
  },
});

function App() {
  const [tracks, setTracks] = useState(mockTracks);
  const [playlistName, setPlaylistName] = useState("PLAYLIST");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const searchTracks = (searchInput) => {
    if (searchInput === "") {
      setTracks(mockTracks); // Reset to the original tracks when search input is empty
    } else {
      const filteredTracks = mockTracks.filter(track =>
        track.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        track.artist.toLowerCase().includes(searchInput.toLowerCase()) ||
        track.album.toLowerCase().includes(searchInput.toLowerCase())
      );
      setTracks(filteredTracks);
    }
  };

  const updatePlaylistName = (newName) => {
    setPlaylistName(newName);
  };
  
  const addTrack = (track) => {
    if (!playlistTracks.some(playlistTrack => playlistTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };
  
  const removeTrack = (track) => {
    const filteredTracks = playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id);
    setPlaylistTracks(filteredTracks);
  };



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="Jammming" backgroundColor="rgba(0, 0, 0, 0.8)" />
      <Container maxWidth="lg" sx={{ padding: '24px', marginTop: '16px', backgroundColor: 'transparent' }}>
        
        <SearchBar onSearchClick={searchTracks} />
        <Grid container spacing={4} alignItems="flex-start" justifyContent="center">
          <Grid item xs={12} md={6}>
            <SearchResults 
              tracks={tracks} 
              onAdd={addTrack}
              playlistTracks={playlistTracks}  
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Playlist 
            playlistName={playlistName} 
            playlistTracks={playlistTracks} 
            updatePlaylistName={updatePlaylistName} 
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
          />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;