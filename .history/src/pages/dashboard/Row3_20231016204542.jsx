import { Box, Paper, Typography, useTheme } from "@mui/material";
import Pie from "../pieChart/pie";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Box>
      <Paper sx={{ width: "33%", height: "350px" }}>
        <Typography
          variant="h6"
          color={theme.palette.secondary.main}
          sx={{padding:"30px "}}
        ></Typography>
        <Pie isDashboard={true} />
      </Paper>

      <Paper sx={{ width: "33%" }}></Paper>
      <Paper sx={{ width: "33%" }}></Paper>
    </Box>
  );
};

export default Row3;
