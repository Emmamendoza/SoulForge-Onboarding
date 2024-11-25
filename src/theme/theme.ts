import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Cinzel, serif", // Apply Cinzel globally
    h1: {
      fontFamily: "Cinzel, serif", // Cinzel font for h1
      fontWeight: 700,            // Optional: bold the h1 heading
    },
    h2: {
      fontFamily: "Cinzel, serif", // Cinzel font for h2
      fontWeight: 700,            // Bold for h2
    },
    h3: {
      fontFamily: "Cinzel, serif", // Cinzel font for h3
      fontWeight: 700,            // Bold for h3
    },
    body1: {
      fontFamily: "Cinzel, serif", // Cinzel font for body text
      fontWeight: 700,            // Regular weight for body text
      fontSize: '1.5rem',           // Optional: specific size for body text
    },
    body2: {
      fontFamily: "Cinzel, serif", // Cinzel font for body text
      fontWeight: 400,
      fontSize: '0.875rem',        // Optional: slightly smaller size for body2
    },
    caption: {
      fontFamily: "Cinzel, serif",
      fontWeight: 400,
      fontSize: '0.75rem',
    },
    button: {
      fontFamily: "Cinzel, serif", // Cinzel font for buttons
      fontWeight: 700,             // Bold for buttons
    },
  },
  palette: {
    primary: {
      main: '#2f3541', // Set primary color (you can customize this to your desired color)
    },
    secondary: {
      main: '#dc004e', // Set secondary color
    },
    error: {
      main: '#d32f2f', // Customize error color
    },
    warning: {
      main: '#f57c00', // Customize warning color
    },
    info: {
      main: '#0288d1', // Customize info color
    },
    success: {
      main: '#388e3c', // Customize success color
    },
    background: {
      default: '#f4f6f8', // Set default background color
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          textShadow: '0 0 5px rgba(255, 255, 255, 0.8), 0 0 5px rgba(255, 255, 255, 0.6)', // Glow effect
          transition: 'text-shadow 0.3s ease'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Set custom border radius for buttons
          textTransform: 'none', // Prevent uppercase text in buttons
          fontWeight: 700, // Set the font weight for buttons
        },
        contained: {
          backgroundColor: '#2f3881', // Contained button primary color
          color: '#ffffff', // Text color for contained button
          '&:hover': {
            backgroundColor: '#6b6bc7', // Hover color for contained button
            textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.8)', // Glowing text effect
            filter: 'brightness(1.2)', // Optional: Brighten the button for emphasis
          },
          padding: '8px 16px', // Adjust padding
          textTransform: 'none', // Keeps text casing normal
          border: '2px solid transparent', // Keeps the button border clean without external glow
          transition: 'all 0.3s ease', // Smooth transition for hover effect
        },
        outlined: {
          borderColor: '#1976d2', // Border color for outlined button
          color: '#1976d2', // Text color for outlined button
          '&:hover': {
            backgroundColor: 'rgba(25, 118, 210, 0.1)', // Hover color for outlined button
          },
        },
        text: {
          color: '##ffffff', // Text button color
          '&:hover': {
            backgroundColor: 'rgba(25, 118, 210, 0.1)', // Hover color for text button
          },
        },
      },
    },
  },
});
