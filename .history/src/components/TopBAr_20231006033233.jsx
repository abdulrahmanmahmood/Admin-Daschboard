import { AppBar } from "@mui/material";

const TopBAr = () => {
  return (
    <AppBar position="fixed" open={open}>
    <Toolbarr>
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
    </Toolbarr>
  </AppBar>
  );
}

export default TopBAr;
