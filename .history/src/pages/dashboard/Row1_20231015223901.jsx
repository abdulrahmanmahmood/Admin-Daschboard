import { Paper, Stack, Typography } from "@mui/material";

const Row1 = () => {
  return (
    <Stack direction={"row"}>
      <Paper sx={{ minWidth: "333px", padding: ,display:"flex", }}>
        <Stack direction={"column"} display={1}>
          icon
          <Typography variant="body1" color="initial">text</Typography>
          <Typography variant="body1" color="initial">text</Typography>
        </Stack>
        <Stack direction={"column"}>
        icon
          <Typography variant="body1" color="initial">text</Typography>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Row1;
