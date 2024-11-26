import { IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { makeStyles } from '@mui/styles';
import studioLogo from '../assets/studioLogo.png';

export const Footer = () => {
    const classes = useStyles();
  return (
    <Grid container className={classes.container}>
        <Grid size={12} className={classes.iconGrid}>
            <IconButton disabled disableRipple disableTouchRipple disableFocusRipple className={classes.iconButton}>
                <img src={studioLogo} alt="Logo" className={classes.logo} />
            </IconButton>
        </Grid>
        <Grid size={12} className={classes.registerTextGrid}>
            <Typography variant='subtitle1' className={classes.registerText}>
                Soul Forge and the Muon Studios logo are trademarks or registered trademarks of Muon Studios. All rights reserved.™
            </Typography>
        </Grid>
    </Grid>
  )
}


const useStyles = makeStyles(() => ({
    container: {
        width: '100%',
        height: '200px',
        position: 'fixed',
        bottom: 0,
        marginTop: 'auto', // Pushes the footer to the bottom
        background: 'transparent',
        // backgroundColor: '#112',
        // backgroundImage: 'linear-gradient(to top, rgba(17, 17, 34, 1), rgba(17, 17, 34, 0))', // Smooth fade
        // boxShadow: '0px -20px 50px rgba(0, 0, 0, 0.6)', // Softens the transition further
        // textAlign: 'center',
        // borderTop: 'none', // Ensure no hard border line
    },
    iconGrid: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    iconButton: {
        padding: 0,
        width: '150px',
        height: '120px',
    },
    logo: {
        width: '150px',
        height: '120px'
    },
    registerTextGrid: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'flex-start',
        padding: 0
    },
    registerText: {
        userSelect: 'none',
        pointerEvents: 'none'
    }
}))