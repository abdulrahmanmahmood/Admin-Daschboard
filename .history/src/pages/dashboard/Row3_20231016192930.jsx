import { Box, Paper } from "@mui/material";
import Pie from "../pieChart/pie";

const Row3 = () => {
  return (
    <Box>
      <Paper sx={{width:"33%"}}>
        <Pie/>
      </Paper>

      <Paper sx={{width:"33%"}}></Paper>
      <Paper sx={{width:"33%"}}></Paper>
    </Box>
  );
};

export default Row3;