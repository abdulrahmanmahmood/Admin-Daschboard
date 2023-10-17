import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";

const Row2 = () => {
  const theme = useTheme()
  return (
    <Stack direction={"row"}>
      <Paper sx={{border:"2px solid red"}}>

      </Paper>
      <Box sx={{border:"2px solid red", height:"350px", textColor:theme.palette.primary.contrastText}}>
      <Typography variant="body1" color="inherit" fontWeight={"bold"} p={1.2} variant="">
        Recent Transactions 
        </Typography>
      </Box>
    </Stack>
  );
}

export default Row2;
