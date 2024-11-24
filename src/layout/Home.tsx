import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import page1 from './../assets/page1.jpg';
import page2 from './../assets/page2.jpg';
import page3 from './../assets/page3.jpg';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.parallaxContainer}>
      <Parallax style={{ overflow: 'visible'}} pages={3}>
        <ParallaxLayer offset={0} className={classes.parallaxLayer}>
          <div className={`${classes.background} ${classes.layer1}`} />
          <div className={classes.shadowOverlay} />
          <div className={`${classes.shadowOverlay} ${classes.shadowOverlayBottom}`} />
          <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Grid size={12} className={classes.textGrid}>
              <Typography className={classes.text} variant="h1">Soul Forge</Typography>
            </Grid>
            <Grid size={12} className={classes.textGrid}>
              <Typography className={classes.text} variant="h4">Dive into the chaos, rise as the chosen</Typography>
            </Grid>
            <Grid size={12} className={classes.textGrid}>
              <KeyboardArrowDownIcon className={classes.icon} style={{fontSize: '80px'}} />
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
