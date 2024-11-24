import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { makeStyles } from '@mui/styles';
import card1 from './../assets/card1.jpeg';
import card2 from './../assets/card2.jpeg';
import card3 from './../assets/card3.jpeg';
import card4 from './../assets/card4.jpeg';
import { CardComponent } from '../components/CardComponent';

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

export const CardContainers = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.container}>
        <Grid container spacing={2}>
            <Grid size={6}>
                Video
            </Grid>
            <Grid container spacing={1} size={6}>
                {cards.map((card) => (
                    <Grid size={6}>
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
  )
}


const useStyles = makeStyles(() => ({
    container: {
      backgroundColor: '#123'
    }
  }));