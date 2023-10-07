import { IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import { styled} from '@mui/material/styles';



// eslint-disable-next-line react/prop-types
const TopBAr = ({handleDrawerOpen, drawerWidth}) => {


  return (
    <AppBar position="fixed" open={open}>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          marginRight: 5,
          ...(open && { display: 'none' }),
        }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        Mini variant drawer
      </Typography>
    </Toolbar>
  </AppBar>
  );
}

export default TopBAr;
