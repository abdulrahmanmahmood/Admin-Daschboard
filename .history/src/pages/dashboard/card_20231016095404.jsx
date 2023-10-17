import { Box, Paper, Stack, Typography } from "@mui/material";

const Card = ({icon, title, subTitle, chart, increase}) => {
  return (
    <Paper
      sx={{
        minWidth: "333px",
        padding: 1.5,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Stack direction={"column"} gap={1}>
        {icon}
        <Typography variant="body1" color="initial">
          {title}
        </Typography>
        <Typography variant="body1" color="initial">
          {subTitle}
        </Typography>
      </Stack>
      <Stack direction={"column"}>
      <Box height={}></Box>
        <Typography variant="body1" color="initial">
          {increase}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default Card;
