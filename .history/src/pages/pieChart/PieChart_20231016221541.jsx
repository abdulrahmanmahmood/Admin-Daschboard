import { Box } from '@mui/material';
import Pie from './pie';
import Header from '../../components/Header';


const PieChart = () => {

  return (
<Box>
<Header title="Pie Chart" subTitle="Simple Pie Chart" />

  <Box height={"75vh"}>
  <Pie isDashboard={false}/>
  </Box>
</Box>
  );
}

export default PieChart;
