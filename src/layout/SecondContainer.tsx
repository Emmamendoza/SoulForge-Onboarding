import { CardMedia, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { makeStyles } from '@mui/styles';
import card1 from './../assets/card1.jpeg';
import card2 from './../assets/card2.jpeg';
import card3 from './../assets/card3.jpeg';
import card4 from './../assets/card4.jpeg';
import videoPage from './../assets/videoPage2.mp4';
import { CardComponent } from '../components/CardComponent';

type Card = {
    id: string;
    image: string;
    title: string
    description?: string;
};

const cards: Card[] = [
    // {
    //     id: "forest",
    //     image: card1,
    //     title: 'Forge Souls',
    //     description: 'Every path you walk shapes the world you leave behind'
    // },
    // {
    //     id: "giant",
    //     image: card2,
    //     title: 'Arcane Odyssey',
    //     description: 'Embark on an epic quest through a realm of mystery and magic'
    // },
    {
        id: "dragon",
        image: card3,
        title: 'Veil of the Void',
        description: 'Journey beyond the veil to uncover the secrets of creation'
    },
    {
        id: "battle",
        image: card4,
        title: 'Shattered Kingdoms',
        description: 'Unite the fractured realms and restore the ancient balance'
    },

]

export const SecondContainer = () => {
    const classes = useStyles();
  
    return (
      <Container maxWidth={false} className={classes.container}>
        <Grid container spacing={4} alignItems="center">
          {/* Video Section */}
          <Grid size={6} className={classes.videoGrid}>
            <CardMedia
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
              Embark on an epic journey in *Soul Forge*, a dark fantasy RPG where the fate of entire worlds lies in your hands.
              As a chosen soul collector, you are tasked with gathering the fractured souls of legendary warriors, fallen kings, 
              and mythical beasts to restore balance to a realm teetering on the edge of destruction.
            </Typography>
            <Typography style={{ marginBottom: '28px' }} className={classes.description} variant="h5" gutterBottom>
              The more souls you collect, the closer you come to unlocking the darkness within. Will you use these powers for good, 
              or will the souls you collect consume you? In *Soul Forge*, every choice matters, and your journey is as much about 
              self-discovery as it is about saving the world. The souls are calling—will you answer?
            </Typography>
  
            {/* Card Components */}
            <Grid container spacing={2}>
              {cards.map((card) => (
                <Grid key={card.id} size={6} className={classes.cardGrid}>
                  <CardComponent
                    id={card.id}
                    title={card.title}
                    image={card.image}
                    description={card.description}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  };
  
  const useStyles = makeStyles(() => ({
    container: {
      paddingTop: '24px',
      paddingBottom: '24px',
      background: 'transparent',
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
      height: 'auto',
      borderRadius: '8px',
    },
    title: {
      color: '#ffffff',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    description: {
      lineHeight: '1.5'
    },
    cardGrid: {
      display: 'flex',
      justifyContent: 'center', // Center cards in their grid cells
      alignItems: 'center',
    },
  }));
  