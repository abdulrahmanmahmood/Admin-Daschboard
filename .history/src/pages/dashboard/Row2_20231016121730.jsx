import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Line from "../lineChart/Line";

const Row2 = () => {
  const theme = useTheme()
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1} mt={3}>
      <Paper sx={{border:"2px solid red" , height:"280px", maxWidth:900, flexGrow:1}}>
      <Line/>
      </Paper>
      <Box sx={{border:"2px solid red", height:"350px", flexGrow}}>
      <Typography variant="h6" color={theme.palette.secondary.main} fontWeight={"bold"} p={1.2}>
        Recent Transactions 
        </Typography>
      </Box>
    </Stack>
  );
}

export default Row2;
