import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";

import TopBAr from "./components/TopBAr";
import SideBar from "./components/SideBar";

export const drawerWidth = 240;

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

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
      <SideBar {...{ handleDrawerClose, theme }} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
    </Box>
  );
}
