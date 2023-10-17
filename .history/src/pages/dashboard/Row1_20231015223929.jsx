import { Paper, Stack, Typography } from "@mui/material";

const Row1 = () => {
  return (
    <Stack direction={"row"}>
      <Paper sx={{ minWidth: "333px", padding:1.5 ,display:"flex", }}>
        <Stack direction={"column"} display={1}>
          icon
          <Typography variant="body1" color="initial">text</Typography>
          <Typography variant="body1" color="initial">text</Typography>
        </Stack>
        <Stack direction={"column"}>
        chart
          <Typography variant="body1" color="initial">textt</Typography>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Row1;
