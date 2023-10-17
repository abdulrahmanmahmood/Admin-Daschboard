import { Paper, Stack, Typography } from "@mui/material";

const Row1 = () => {
  return (
    <Stack direction={"row"}>
      <Paper sx={{ minWidth: "333px" }}>
        <Stack direction={"column"}>
          icon
          <Typography variant="body1" color="initial">text</Typography>
        </Stack>
        <Stack direction={"column"}></Stack>
      </Paper>
    </Stack>
  );
};

export default Row1;
