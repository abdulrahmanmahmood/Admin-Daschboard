import { ResponsiveChoropleth } from "@nivo/geo";
import { data } from "./data";
import {geo}from "./world_countries"
import { Box, useTheme } from "@mui/material";
const Geography = () => {
  const theme = useTheme();
  return (
    <Box height={"80vh"} sx={{border:`1px solid ${theme.palette.primary.light}` }}>
  
    </Box>

  );
};

export default Geography;
