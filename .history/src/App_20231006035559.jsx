import * as React from "react";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";

import TopBAr from "./components/TopBAr";
import SideBar from "./components/SideBar";
import { useTheme } from "@emotion/react";

export const drawerWidth = 240;

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
const theme = useTheme();


  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBAr {...{ handleDrawerOpen, open }} />
      <SideBar {...{ handleDrawerClose,open }} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
    </Box>
  );
}
