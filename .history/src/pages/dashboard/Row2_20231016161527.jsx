/* eslint-disable react/jsx-key */
import {
  Box,
  Paper,
  Stack,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import Line from "../lineChart/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";

const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1} mt={3}>
      <Paper
        sx={{
          border: "2px solid red",
          height: "300px",
          maxWidth: 900,
          flexGrow: 1,
        }}
      >
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography
              variant="h6"
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" color="inherit" ml={4}>
              $59,342.32
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <Line />
      </Paper>
      <Box sx={{ border: "2px solid red", height: "350px", flexGrow: 1 }}>
        <Typography
          variant="h6"
          color={theme.palette.secondary.main}
          fontWeight={"bold"}
          p={1.2}
        >
          Recent Transactions
        </Typography>
<Box maxHeight={"350px"} overflow={"auto"}>
          {Transactions.map((item) => {
            return (
              <Paper
                sx={{
                  mt: 0.4,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box p={1.2}>
                  <Typography variant="body1">{item.txId}</Typography>
                  <Typography variant="body2">{item.user} </Typography>
                </Box>
                <Typography variant="body1">{item.date} </Typography>
  
                <Typography
                  borderRadius={1.4}
                  p={1}
                  bgcolor={theme.palette.error.main}
                  color={theme.palette.getContrastText(theme.palette.error.main)}
                  variant="body2"
                >
                  ${item.cost}
                </Typography>
              </Paper>
            );
          })}
</Box>
      </Box>
    </Stack>
  );
};

export default Row2;
