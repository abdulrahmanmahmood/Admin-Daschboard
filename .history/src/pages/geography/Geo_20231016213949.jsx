/* eslint-disable react/prop-types */
import { ResponsiveChoropleth } from "@nivo/geo";
import { data } from "./data";
import {geo}from "./world_countries"
import { useTheme } from "@mui/material";



const Geo = ({isDashboard}) => {
  const theme = useTheme();

  return (
    <ResponsiveChoropleth
isDashboard
    />
  );
}

export default Geo;
