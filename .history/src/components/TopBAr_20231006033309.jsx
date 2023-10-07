import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

const TopBAr = () => {
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
