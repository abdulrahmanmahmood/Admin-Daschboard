import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TopBAr from "./components/TopBAr";
import SideBar from "./components/SideBar";

export const drawerWidth = 240;

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBAr {...{ handleDrawerOpen, open }} />
      <SideBar {...{ handleDrawerClose, open }} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <DrawerHeader /> */}
      </Box>
    </Box>
  );
}
n