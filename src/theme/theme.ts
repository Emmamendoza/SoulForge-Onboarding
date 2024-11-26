import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Cinzel, serif",
    h1: {
      fontFamily: "Cinzel, serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Cinzel, serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Cinzel, serif",
      fontWeight: 700,
    },
    body1: {
      fontFamily: "Cinzel, serif",
      fontWeight: 700,
      fontSize: '1.5rem',
    },
    body2: {
      fontFamily: "Cinzel, serif",
      fontWeight: 400,
      fontSize: '0.875rem',
    },
    caption: {
      fontFamily: "Cinzel, serif",
      fontWeight: 400,
      fontSize: '0.75rem',
    },
    button: {
      fontFamily: "Cinzel, serif",
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: '#2f3541',
    },
    secondary: {
      main: '#dc004e',
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#f57c00',
    },
    info: {
      main: '#0288d1',
    },
    success: {
      main: '#388e3c',
    },
    background: {
      default: '#f4f6f8',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          textShadow: '0 0 5px rgba(255, 255, 255, 0.8), 0 0 5px rgba(255, 255, 255, 0.6)', // Glow effect
          transition: 'text-shadow 0.3s ease'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 700,
        },
        contained: {
          backgroundColor: '#2f3881',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#364196',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.8)', // Glowing text effect
            filter: 'brightness(1.2)', // Optional: Brighten the button for emphasis
          },
          padding: '8px 16px',
          textTransform: 'none',
          border: '2px solid transparent',
          transition: 'all 0.3s ease', 
        },
        outlined: {
          borderColor: '#1976d2',
          color: '#1976d2',
          '&:hover': {
            backgroundColor: 'rgba(25, 118, 210, 0.1)',
          },
        },
        text: {
          color: '##ffffff',
          '&:hover': {
            backgroundColor: 'rgba(25, 118, 210, 0.1)',
          },
        },
      },
    },
  },
});
