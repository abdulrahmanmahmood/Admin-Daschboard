import { Box, useTheme } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';


const PieChart = () => {
  const theme = useTheme()
  const data = [
    {
      "id": "make",
      "label": "make",
      "value": 401,
      "color": "hsl(199, 70%, 50%)"
    },
    {
      "id": "php",
      "label": "php",
      "value": 332,
      "color": "hsl(168, 70%, 50%)"
    },
    {
      "id": "c",
      "label": "c",
      "value": 323,
      "color": "hsl(40, 70%, 50%)"
    },
    {
      "id": "scala",
      "label": "scala",
      "value": 217,
      "color": "hsl(69, 70%, 50%)"
    },
    {
      "id": "javascript",
      "label": "javascript",
      "value": 332,
      "color": "hsl(259, 70%, 50%)"
    }
  ]
  return (
<Box height={"75vh"}>
<ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'dark2' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />

</Box>
  );
}

export default PieChart;
