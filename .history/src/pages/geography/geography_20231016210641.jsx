
import { Box, useTheme } from "@mui/material";
const Geography = () => {
  const theme = useTheme();
  return (
    <Box height={"80vh"} sx={{border:`1px solid ${theme.palette.primary.light}` }}>
      <Geo
    </Box>

  );
};

export default Geography;
