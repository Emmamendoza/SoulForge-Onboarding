import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid2';
import { ButtonComponent } from '../components/ButtonComponent';

export const ThirdContainer = () => {
  const classes = useStyles();

    const exploreTheWorldText: string = "Explore the world of the lost continent"

  const renderAnimatedText = (text: string, baseDelay: number = 0) =>
    text.split("").map((char, index) => (
      <span
        key={index}
        className={classes.animatedText}
        style={{ animationDelay: `${baseDelay + index * 0.1}s` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <Container maxWidth={false} className={classes.container}>
        <Grid container alignItems="center">
            <Grid size={12} style={{ marginTop: '48px', marginBottom: '48px' }}>
                <Typography className={classes.text} variant="h2">
                {renderAnimatedText(exploreTheWorldText)}
                </Typography>
            </Grid>
            <Grid size={12} style={{ marginTop: '48px', marginBottom: '48px' }}>
                <Typography className={classes.text} variant="h2">
                {renderAnimatedText('Are You Ready?', exploreTheWorldText.length * 0.1)}
                </Typography>
            </Grid>
            <Grid size={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className={classes.buttonGlow}>
                <ButtonComponent 
                    style={{ width: 'auto' }} 
                    label='Test the demo' 
                    size='large' 
                    onClick={() => console.log('clicked!')} 
                />
                </div>
            </Grid>
        </Grid>
    </Container>
  );
};

const useStyles = makeStyles(() => ({
    container: {
        paddingTop: '16px',
        paddingBottom: '16px',
        background: 'transparent'
    },
    animatedText: {
        display: 'inline-block', // Needed for per-letter animation
        opacity: 0, // Start hidden
        animation: '$fadeIn 2s ease-out forwards',
    },
    '@keyframes fadeIn': {
        '0%': {
            opacity: 0
        },
        '100%': {
            opacity: 1
        },
    },
    text: {
        zIndex: 3,
        color: 'white',
        textAlign: 'center',
        userSelect: 'none',
        pointerEvents: 'none',
        fontSize: '2rem',
        '@media (min-width:600px)': {
            fontSize: '4rem',
        },
        '@media (min-width:960px)': {
            fontSize: '6rem',
        },
    },
    buttonGlow: {
        position: 'relative',
        display: 'inline-block',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'white',
          filter: 'blur(10px)',
          zIndex: -1,
          borderRadius: '8px', // Adjust to match the button's shape
          opacity: 0.5, // Glow intensity
          animation: '$pulseGlow 2s infinite ease-in-out',
        },
      },
    '@keyframes pulseGlow': {
        '0%': {
            opacity: 0.5,
            filter: 'blur(10px)',
        },
        '50%': {
            opacity: 1,
            filter: 'blur(15px)',
        },
        '100%': {
            opacity: 0.5,
            filter: 'blur(10px)',
        }
    }
}));
