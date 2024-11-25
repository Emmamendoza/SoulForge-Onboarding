import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import { ButtonComponent } from './ButtonComponent';
import { MenuItem } from '@mui/material';

type NavbarPages = {
  id: string
  text: string
  onClick: (id: string) => void
}

type NavbarComponentProps = {
  pages: NavbarPages[]
}

export const NavbarComponent = ({ pages }: NavbarComponentProps) => {

  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Container maxWidth={false} className={classes.navbarContainer}>
        <Toolbar disableGutters>
          <Typography
            variant="h3"
            noWrap
            sx={{
              mr: 2,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              userSelect: 'none',
              pointerEvents: 'none'
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <MenuItem
                key={page.id}
                className={classes.navbarItem}
                onClick={() => page.onClick(page.id)}
                sx={{ my: 2 }}
              >
                <Typography variant="h6" className={classes.navbarTypography}>{page.text}</Typography>
              </MenuItem>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, marginRight: 4 }}>
            <ButtonComponent label='Try It Now' size='medium' onClick={() => console.log('clicked!')} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const useStyles = makeStyles(() => ({
  appBar: {
    width: '100%'
  },
  navbarContainer: {
    width: '100%', 
    maxWidth: '100%', 
    backgroundColor: '#112', 
    transition: 'opacity ease .3s', 
    opacity: 1, 
    borderBottom: '2px solid #33333340'
  },
  navbarItem: {
    marginRight: '16px'
  },
  navbarTypography: {
    color: 'white',
    textAlign: 'center',
    borderBottom: '1px solid transparent',
    '&:hover': {
        borderBottom: '1px solid white',
        transition: 'transform 0.3s ease',
    }
  }
}));