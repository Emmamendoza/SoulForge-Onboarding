import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

import { makeStyles } from '@mui/styles';

type CardComponentProps = {
    id: string;
    image: string;
    title: string
    description?: string;
};

export const CardComponent = ({ id, image, title, description }: CardComponentProps) => {
    const classes = useStyles();
    return (
        <Card id={id} className={classes.card} style={{ background: `url(${image})` }}>
            <CardActionArea disableRipple className={classes.content}>
                <CardContent sx={{ backgroundColor: 'transparent', padding: 2 }}>
                    <Typography gutterBottom variant="h3" component="div" className={classes.text}>
                        {title}
                    </Typography>
                    <Typography variant="body1" className={classes.text}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};


const useStyles = makeStyles(() => ({
    card: {
        maxWidth: 500,
        width: 500,
        position: 'relative',
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&:hover $content': {
            background: 'rgba(0, 0, 0, 0.5)', // Darken the card background on hover
        },
        '&:hover $text': {
            opacity: 1, // Make the text visible on hover
            transform: 'translateY(0)', // Reset the text position
        },
    },
    content: {
        position: 'relative',
        height: '280px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.2)', // Initial subtle overlay
        transition: 'background 0.5s ease', // Smooth transition for the background darkening
    },
    text: {
        color: 'white',
        textAlign: 'center',
        textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)', // Glow effect
        opacity: 0, // Initially hide the text
        transform: 'translateY(20px)', // Slightly shift the text downward initially
        transition: 'opacity 0.5s ease, transform 0.5s ease', // Smooth transition for text appearance
    },
  }));