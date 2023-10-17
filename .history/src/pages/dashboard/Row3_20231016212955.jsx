import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../pieChart/pie";
import Bar from "../barChart/bar";
import Geo from "../geography/Geo";

const Row3 = () => {
  const theme = useTheme();
  const paperStyles = {
    flexGrow: 1,
    minWidth: "400px",
    width: "30%",  // Adjust the width as needed
    height: "500px",  // Adjust the height as needed
  };
  return (
<Stack direction="row" gap={1} mt={3}>
  {/* Campaign */}
  <Paper sx={paperStyles}>
    <Typography variant="h6" color={theme.palette.secondary.main} sx={headerStyles}>
      Campaign
    </Typography>

    <Box height={350}>
      <Pie isDashboard={true} />
    </Box>

    <Typography variant="h6" align="center" sx={revenueStyles}>
      $48,352 revenue generated
    </Typography>

    <Typography variant="body2" sx={expenditureStyles} align="center">
      Includes extra misc expenditures and costs
    </Typography>
  </Paper>

  {/* Sales Quantity */}
  <Paper sx={paperStyles}>
    <Typography color={theme.palette.secondary.main} variant="h6" sx={headerStyles}>
      Sales Quantity
    </Typography>

    <Box height={450}>
      <Bar isDashboard={true} />
    </Box>
  </Paper>

  {/* Geography */}
  <Paper sx={paperStyles}>
    <Geo isDashboard={true} />
  </Paper>
</Stack>

  );
};

export default Row3;
