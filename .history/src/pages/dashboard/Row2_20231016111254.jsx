import { Box, Paper, Stack } from "@mui/material";

const Row2 = () => {
  return (
    <Stack direction={"row"}>
      <Paper sx={{border:"2px solid red"}}>

      </Paper>
      <Box sx={{border:"2px solid red", height:"350px", textColor:theme.palette.primary.contrastText}}>
        
      </Box>
    </Stack>
  );
}

export default Row2;
