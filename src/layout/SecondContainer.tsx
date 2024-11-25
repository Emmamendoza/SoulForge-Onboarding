import { Box, CardMedia, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { makeStyles } from '@mui/styles';
import backgroundContainer from './../assets/backgroundContainer2.jpg';
import videoPage from './../assets/videoPage2.mp4';
import { ButtonComponent } from '../components/ButtonComponent';

export const SecondContainer = () => {
    const classes = useStyles();
  
    return (
      <Container maxWidth={false} className={classes.container}>

        <Grid container spacing={4} alignItems="center">
          {/* Video Section */}
          <Grid size={6}  className={classes.videoGrid}>
            <CardMedia
              style={{borderRadius: '20px'}}
              component="video"
              className={classes.media}
              src={videoPage}
              autoPlay
              loop
              muted
              controls
            />
          </Grid>
  
          {/* Text Section */}
          <Grid size={6} className={classes.textGrid}>
            <Typography className={classes.title} variant="h2" gutterBottom>
              Collect The Souls
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
            <Box sx={{ flexGrow: 0, marginTop: 8, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <ButtonComponent style={{ width: '20%' }} label='Try It Now' size='large' onClick={() => console.log('clicked!')} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  };
  
  const useStyles = makeStyles(() => ({
    container: {
      paddingTop: '24px',
      paddingBottom: '24px',
      backgroundImage: `url(${backgroundContainer})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
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
      alignItems: 'center'
    },
    textGrid: {
      textAlign: 'left',
      padding: '16px',
    },
    media: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
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
    }
  }));
  