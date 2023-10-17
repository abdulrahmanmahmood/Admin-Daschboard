import { Paper, Stack, Typography } from "@mui/material";

const Row1 = () => {
  return (
    <Stack direction={"row"} gap={1} flexWrap={"wrap"} justifyContent={"space-between"}>
      <Paper sx={{ minWidth: "333px", padding:1.5 ,display:"flex",justifyContent:"space-between" }}>
        <Stack direction={"column"} >
          icon
          <Typography variant="body1" color="initial">text</Typography>
          <Typography variant="body1" color="initial">text</Typography>
        </Stack>
        <Stack direction={"column"}>
        chart
          <Typography variant="body1" color="initial">+14%</Typography>
        </Stack>
      </Paper>

      <Paper sx={{ minWidth: "333px", padding:1.5 ,display:"flex",justifyContent:"space-between" }}>
        <Stack direction={"column"} >
          icon
          <Typography variant="body1" color="initial">text</Typography>
          <Typography variant="body1" color="initial">text</Typography>
        </Stack>
        <Stack direction={"column"}>
        chart
          <Typography variant="body1" color="initial">+14%</Typography>
        </Stack>
      </Paper>

      <Paper sx={{ minWidth: "333px", padding:1.5 ,display:"flex",justifyContent:"space-between" }}>
        <Stack direction={"column"} >
          icon
          <Typography variant="body1" color="initial">text</Typography>
          <Typography variant="body1" color="initial">text</Typography>
        </Stack>
        <Stack direction={"column"}>
        chart
          <Typography variant="body1" color="initial">+14%</Typography>
        </Stack>
      </Paper>

      <Paper sx={{ minWidth: "333px", padding:1.5 ,display:"flex",justifyContent:"space-between" }}>
        <Stack direction={"column"} >
          icon
          <Typography variant="body1" color="initial">text</Typography>
          <Typography variant="body1" color="initial">text</Typography>
        </Stack>
        <Stack direction={"column"}>
        chart
          <Typography variant="body1" color="initial">+14%</Typography>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Row1;
