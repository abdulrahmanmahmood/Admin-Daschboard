import { Paper, Stack } from "@mui/material";

const Row1 = () => {
  return (
    <Stack direction={"row"}>
      <Paper sx={{ minWidth: "333px" }}>
        <Stack direction={"column"}>
          icon
          
        </Stack>
        <Stack direction={"column"}></Stack>
      </Paper>
    </Stack>
  );
};

export default Row1;
