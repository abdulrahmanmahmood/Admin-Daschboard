import { Box, Paper, Typography, useTheme } from "@mui/material";
import Pie from "../pieChart/pie";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Box>
      <Paper sx={{ width: "33%", height: "500px" }}>
        <Typography
          variant="h6"
          color={theme.palette.secondary.main}
          sx={{padding:"30px 30px 0 30px"}}
          fontWeight="600"
        >
          Compaign
        </Typography>

        <Box height={"350px"}>
          <Pie isDashboard={true} />
        </Box>
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper sx={{ width: "33%" }}></Paper>
      <Paper sx={{ width: "33%" }}></Paper>
    </Box>
  );
};

export default Row3;
