
import { Box, useTheme } from "@mui/material";
import Geo from "./Geo";
import Header from "../../components/Header"
const Geography = () => {
  const theme = useTheme();
  return (
<div>
      <Box height={"80vh"} sx={{border:`1px solid ${theme.palette.primary.light}` }}>
  
        <Geo isDashboard={false}/>
      </Box>
</div>

  );
};

export default Geography;
