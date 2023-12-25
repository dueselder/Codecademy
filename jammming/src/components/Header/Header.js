import React from 'react';
import Typography from '@mui/material/Typography'; // Corrected import for Typography
import CssBaseline from '@mui/material/CssBaseline'; // Corrected import for CssBaseline
import Container from '@mui/material/Container';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

function Header(props) {
    const { title } = props; // Destructure props

    const headerStyle = {
        backgroundColor: '#ed2939', // Your desired background color
        padding: '16px', // Add padding as needed
        textAlign: 'center', // Center align the text
        opacity: '0.8', // Add opacity
      };
    
      const titleStyle = {
        fontFamily: "'Roboto', sans-serif", // Specify the desired font
        fontSize: '2rem', // Specify the desired font size
        color: 'white', // Specify the desired text color
      };

    return (
        <div className="header-bar" style={ headerStyle} >
        <CssBaseline />
            <Container maxWidth="lg" >
                <Typography variant="h2" component="h1" gutterBottom style={ titleStyle } className="header-title">
                    {title}
                </Typography>
            </Container>
        </div>
    );
}

Header.propTypes = {
  title: PropTypes.string.isRequired, // Title is a required string prop
};

export default Header;
