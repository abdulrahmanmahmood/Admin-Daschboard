import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../pieChart/pie";
import Bar from "../barChart/bar";
import Geo from "../geography/Geo";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} gap={1} mt={3} flexWrap={"wrap"} >
      <Paper
        sx={{
          flexGrow: 1,
          minWidth: "400px",
          width: "28%",
          height: "500px",
        }}
      >
        <Typography
          variant="h6"
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
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

      <Paper
        sx={{
          flexGrow: 1,
          minWidth: "400px",
          width: "30%",
          height: "500px",
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>
        <Box height={"450px"}>
          <Bar isDashbord={true} />
        </Box>
      </Paper>
      <Paper
        sx={{
          flexGrow: 1,
          minWidth: "400px",
          width: "30%",
          height: "500px",
        }}
      >
        <Geo isDashboard={true}/>
      </Paper>
    </Stack>
  );
};

export default Row3;
