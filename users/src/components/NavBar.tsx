import { Link } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const NavBar = ({ logIn }: { logIn: boolean }) => {
  const styleButton = {
    color: '#1976d2',
    textDecoration: 'none',
    fontSize: '17px',
    margin: '25px',
    fontWeight: 'bold'
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ left:'2vw', top:0, width: '88%', bgcolor: `#F0F0F0`,boxShadow: 0,zIndex:10,mb: 0 ,padding:0}}>
        <Toolbar sx={{ justifyContent: 'flex-start' }}>
          <Box sx={{ display: 'flex', flexGrow: 0 ,top:0}}>
            <Button color="inherit" component={Link} to='/Home' style={styleButton}>Home</Button>
            <Button color="inherit" component={Link} to='/About' style={styleButton}>About</Button>
            <Button color="inherit" component={Link} to='/RecipesList' style={styleButton}>Recipes</Button>
            {logIn && <Button color="inherit" component={Link} to='/AddRecipe' style={styleButton}>Add</Button>}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
