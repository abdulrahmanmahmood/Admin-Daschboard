import { Box } from "@mui/material";
import Line from "./Line";

const LineChart = () => {


  return (
<Box>
<Header title="Line Chart" subTitle="Simple Line Chart" />

      <Box height={"75vh"}>
          <Line/>
      </Box>
</Box>

  );
};

export default LineChart;
