import { Box } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar'
const data = [
  {
    "country": "AD",
    "hot dog": 10,
    "hot dogColor": "hsl(92, 70%, 50%)",
    "burger": 100,
    "burgerColor": "hsl(168, 70%, 50%)",
    "sandwich": 187,
    "sandwichColor": "hsl(119, 70%, 50%)",
    "kebab": 156,
    "kebabColor": "hsl(211, 70%, 50%)",
    "fries": 112,
    "friesColor": "hsl(201, 70%, 50%)",
    "donut": 136,
    "donutColor": "hsl(299, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 144,
    "hot dogColor": "hsl(337, 70%, 50%)",
    "burger": 115,
    "burgerColor": "hsl(129, 70%, 50%)",
    "sandwich": 184,
    "sandwichColor": "hsl(16, 70%, 50%)",
    "kebab": 188,
    "kebabColor": "hsl(42, 70%, 50%)",
    "fries": 2,
    "friesColor": "hsl(311, 70%, 50%)",
    "donut": 69,
    "donutColor": "hsl(2, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 195,
    "hot dogColor": "hsl(304, 70%, 50%)",
    "burger": 167,
    "burgerColor": "hsl(284, 70%, 50%)",
    "sandwich": 141,
    "sandwichColor": "hsl(269, 70%, 50%)",
    "kebab": 5,
    "kebabColor": "hsl(268, 70%, 50%)",
    "fries": 87,
    "friesColor": "hsl(240, 70%, 50%)",
    "donut": 80,
    "donutColor": "hsl(331, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 63,
    "hot dogColor": "hsl(217, 70%, 50%)",
    "burger": 104,
    "burgerColor": "hsl(88, 70%, 50%)",
    "sandwich": 146,
    "sandwichColor": "hsl(229, 70%, 50%)",
    "kebab": 196,
    "kebabColor": "hsl(35, 70%, 50%)",
    "fries": 12,
    "friesColor": "hsl(151, 70%, 50%)",
    "donut": 135,
    "donutColor": "hsl(276, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 66,
    "hot dogColor": "hsl(313, 70%, 50%)",
    "burger": 48,
    "burgerColor": "hsl(302, 70%, 50%)",
    "sandwich": 91,
    "sandwichColor": "hsl(122, 70%, 50%)",
    "kebab": 86,
    "kebabColor": "hsl(42, 70%, 50%)",
    "fries": 12,
    "friesColor": "hsl(187, 70%, 50%)",
    "donut": 52,
    "donutColor": "hsl(103, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 156,
    "hot dogColor": "hsl(40, 70%, 50%)",
    "burger": 39,
    "burgerColor": "hsl(162, 70%, 50%)",
    "sandwich": 39,
    "sandwichColor": "hsl(191, 70%, 50%)",
    "kebab": 157,
    "kebabColor": "hsl(92, 70%, 50%)",
    "fries": 105,
    "friesColor": "hsl(337, 70%, 50%)",
    "donut": 159,
    "donutColor": "hsl(30, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 135,
    "hot dogColor": "hsl(160, 70%, 50%)",
    "burger": 118,
    "burgerColor": "hsl(52, 70%, 50%)",
    "sandwich": 56,
    "sandwichColor": "hsl(111, 70%, 50%)",
    "kebab": 135,
    "kebabColor": "hsl(87, 70%, 50%)",
    "fries": 9,
    "friesColor": "hsl(63, 70%, 50%)",
    "donut": 14,
    "donutColor": "hsl(97, 70%, 50%)"
  }
]

const BarChart = () => {
  return (
<Box sx={{height:""}}>
<ResponsiveBar
    data={data}
    keys={[
        'hot dog',
        'burger',
        'sandwich',
        'kebab',
        'fries',
        'donut'
    ]}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
    defs={[
        {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        }
    ]}
    fill={[
        {
            match: {
                id: 'fries'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'sandwich'
            },
            id: 'lines'
        }
    ]}
    borderColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                1.6
            ]
        ]
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'country',
        legendPosition: 'middle',
        legendOffset: 32
    }}
    axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'food',
        legendPosition: 'middle',
        legendOffset: -40
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                1.6
            ]
        ]
    }}
    legends={[
        {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemOpacity: 1
                    }
                }
            ]
        }
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
/>
</Box>
  );
}

export default BarChart;
