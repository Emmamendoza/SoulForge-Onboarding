import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid2';
import { CardComponent } from '../components/CardComponent';
import card1 from './../assets/card1.jpg';
import card2 from './../assets/card2.jpg';
import card3 from './../assets/card3.jpg';
import card4 from './../assets/card4.jpg';

type Card = {
    id: string;
    image: string;
    title: string
    description?: string;
};

const cards: Card[] = [
    {
        id: "forest",
        image: card1,
        title: 'Forge Souls',
        description: 'Every path you walk shapes the world you leave behind'
    },
    {
        id: "giant",
        image: card2,
        title: 'Arcane Odyssey',
        description: 'Embark on an epic quest through a realm of mystery and magic'
    },
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

export const ThirdContainer = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.container}>
      <Grid container className={classes.content}>
        <Grid size={12}>
            <Typography variant='h4'>
                Choose Your Weapon
            </Typography>
        </Grid>
        {/* Card Components */}
        <Grid container spacing={2}>
            {cards.map((card) => (
            <Grid key={card.id} size={3} className={classes.cardGrid}>
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
    </Container>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
    zIndex: 1,
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
