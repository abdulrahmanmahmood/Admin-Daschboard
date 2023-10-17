import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Line from "../lineChart/Line";

const Row2 = () => {
  const theme = useTheme()
  return (
    <Stack direction={"row"}>
      <Paper sx={{border:"2px solid red" , height:"250px", width:500}}>
      <Line/>
      </Paper>
      <Box sx={{border:"2px solid red", height:"350px",}}>
      <Typography variant="h6" color={theme.palette.secondary.main} fontWeight={"bold"} p={1.2}>
        Recent Transactions 
        </Typography>
      </Box>
    </Stack>
  );
}

export default Row2;
