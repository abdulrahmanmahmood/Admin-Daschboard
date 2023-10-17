import { Box } from '@mui/material';
import Bar from './bar';
import Header from '../../components/Header';

const BarChart = () => {

  return (
    <Box sx={{height:"75vh"}}>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
    <Bar isDashbord={false}/>
    </Box>

  );
}

export default BarChart;
