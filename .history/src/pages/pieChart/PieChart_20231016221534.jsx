import { Box } from '@mui/material';
import Pie from './pie';


const PieChart = () => {

  return (
<Box>
  <Box height={"75vh"}>
  <Pie isDashboard={false}/>
  </Box>
</Box>
  );
}

export default PieChart;
