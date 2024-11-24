import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import page1 from './../assets/page1.jpg';
import page2 from './../assets/page2.jpg';
import page3 from './../assets/page3.jpg';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRef } from 'react';

const useStyles = makeStyles(() => ({
  parallaxContainer: {
    backgroundColor: 'black',
    height: '100vh',
    width: '100%',
    position: 'relative',
    zIndex: 1
  },
  parallaxLayer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: '100vh',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(70%)',
    zIndex: -1,
  },
  layer1: {
    backgroundImage: `url(${page1})`,
  },
  layer2: {
    backgroundImage: `url(${page2})`,
  },
  layer3: {
    backgroundImage: `url(${page3})`,
  },
  shadowOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '10vh',
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
    zIndex: -1,
    pointerEvents: 'none',
  },
  shadowOverlayBottom: {
    top: 'auto',
    bottom: 0,
    height: '20vh',
    background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
  },
  textGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '24px'
  },
  text: {
    zIndex: 1,
    color: 'white',
    textAlign: 'center',
    userSelect: 'none',
    pointerEvents: 'none'
  },
  icon: {
    zIndex: 1,
    color: 'white',
    position: 'absolute',
    bottom: '120px',
    animation: '$bounce 1.5s infinite',
    cursor: 'pointer',
    pointerEvents: 'auto'
  },
  animatedText: {
    display: 'inline-block', // Needed for per-letter animation
    opacity: 0, // Start hidden
    transform: 'translateX(-50px)', // Start offset to the left
    animation: '$fadeIn 2s ease-out forwards',
  },
  '@keyframes bounce': {
    '0%': {
      transform: 'translateY(0)', // Starting position
    },
    '50%': {
      transform: 'translateY(-15px)', // Move up a bit
    },
    '100%': {
      transform: 'translateY(0)', // Return to original position
    },
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    },
  }
}));

function Home() {
  const classes = useStyles();

  const title: string = "Soul Forge";
  const description: string = "Dive into the chaos, rise as the chosen";
  const parallaxRef = useRef<IParallax>(null);

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

  const handleArrowClick = () => {
    console.log('Arrow clicked!: ', parallaxRef)
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(1)
    }
  };

  return (
    <div className={classes.parallaxContainer}>
      <Parallax style={{ overflow: 'visible'}} pages={3}>
        <ParallaxLayer offset={0} speed={-0.20} className={classes.parallaxLayer}>
          <div className={`${classes.background} ${classes.layer1}`} />
          <div className={classes.shadowOverlay} />
          <div className={`${classes.shadowOverlay} ${classes.shadowOverlayBottom}`} />
          <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Grid size={12} className={classes.textGrid}>
              <Typography className={classes.text} variant="h1">
                {renderAnimatedText(title)}
              </Typography>
            </Grid>
            <Grid size={12} className={classes.textGrid}>
              <Typography className={classes.text} variant="h4">
                {renderAnimatedText(description, title.length * 0.1)}
              </Typography>
            </Grid>
            <Grid size={12} className={classes.textGrid}>
              <KeyboardArrowDownIcon 
                className={classes.icon} 
                style={{ fontSize: '80px' }}
                onClick={handleArrowClick} // onClick event added he
              />
            </Grid>
          </Grid>
        </ParallaxLayer>
        <ParallaxLayer offset={1} className={classes.parallaxLayer}>
          <div className={`${classes.background} ${classes.layer2}`} />
          <div className={classes.shadowOverlay} />
          <div className={`${classes.shadowOverlay} ${classes.shadowOverlayBottom}`} />
          <Typography className={classes.text} variant="h1">Page 2</Typography>
        </ParallaxLayer>
        <ParallaxLayer offset={2} className={classes.parallaxLayer}>
          <div className={`${classes.background} ${classes.layer3}`} />
          <div className={classes.shadowOverlay} />
          <div className={`${classes.shadowOverlay} ${classes.shadowOverlayBottom}`} />
          <Typography className={classes.text} variant="h1">Page 3</Typography>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}


export default Home;
