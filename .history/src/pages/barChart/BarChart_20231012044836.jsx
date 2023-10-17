import { Box, useTheme } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar'
import Bar from './bar';

const BarChart = () => {
  const theme = useTheme();

  return (
    <Bar/>
  );
}

export default BarChart;
