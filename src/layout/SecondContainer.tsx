import { CardMedia, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { makeStyles } from '@mui/styles';
import backgroundContainer from './../assets/backgroundContainer.jpg';
import videoPage from './../assets/videoPage.mp4';

export const SecondContainer = () => {
    const classes = useStyles();
  
    return (
      <Container maxWidth={false} className={classes.container}>
        <Grid container alignItems="center">
          {/* Video Section */}
          <Grid size={6}  className={classes.videoGrid}>
            <CardMedia
              style={{ borderRadius: '8px', width: '75%'}}
              component="video"
              className={classes.media}
              src={videoPage}
              autoPlay
              loop
              controls
            />
          </Grid>
          {/* Text Section */}
          <Grid size={6} className={classes.textGrid}>
            <Typography className={classes.title} variant="h2" gutterBottom>
              Collect Souls
            </Typography>
            <Typography style={{ marginBottom: '28px' }} className={classes.description} variant="h5" gutterBottom>
              Embark on an epic journey in <strong>Soul Forge</strong>, a dark fantasy RPG where the fate of entire worlds lies in your hands.
              As a chosen soul collector, you are tasked with gathering the fractured souls of legendary warriors, fallen kings, 
              and mythical beasts to restore balance to a realm teetering on the edge of destruction.
            </Typography>
            <Typography style={{ marginBottom: '28px' }} className={classes.description} variant="h5" gutterBottom>
              The more souls you collect, the closer you come to unlocking the darkness within. Will you use these powers for good, 
              or will the souls you collect consume you? In *Soul Forge*, every choice matters, and your journey is as much about 
              self-discovery as it is about saving the world. <strong>The souls are calling, will you answer?</strong>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    );
  };
  
  const useStyles = makeStyles(() => ({
    container: {
      paddingTop: '16px',
      paddingBottom: '16px',
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundContainer})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.5)',
      '@media (max-width:600px)': {
        padding: '8px', // Reduce padding for smaller screens
      },
    },
    text: {
      zIndex: 1,
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
    videoGrid: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textGrid: {
      textAlign: 'left',
      padding: '16px',
    },
    media: {
      width: '100%',
      maxWidth: '100%',
      height: 'auto'
    },
    title: {
      color: '#ffffff',
      fontWeight: 'bold',
      textAlign: 'center',
      userSelect: 'none',
      pointerEvents: 'none',
    },
    description: {
      lineHeight: '1.5',
      userSelect: 'none',
      pointerEvents: 'none',
    },
    content: {
      marginBottom: '20px'
  },
    cardGrid: {
      display: 'flex',
      justifyContent: 'center', // Center cards in their grid cells
      alignItems: 'center',
    },
  }));
  