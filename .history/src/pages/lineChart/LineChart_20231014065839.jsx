import { Box } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

const LineChart = () => {
  const data = [
    {
      id: "japan",
      color: "hsl(167, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 211,
        },
        {
          x: "helicopter",
          y: 11,
        },
        {
          x: "boat",
          y: 234,
        },
        {
          x: "train",
          y: 14,
        },
        {
          x: "subway",
          y: 94,
        },
        {
          x: "bus",
          y: 32,
        },
        {
          x: "car",
          y: 10,
        },
        {
          x: "moto",
          y: 7,
        },
        {
          x: "bicycle",
          y: 185,
        },
        {
          x: "horse",
          y: 124,
        },
        {
          x: "skateboard",
          y: 277,
        },
        {
          x: "others",
          y: 196,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(165, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 277,
        },
        {
          x: "helicopter",
          y: 70,
        },
        {
          x: "boat",
          y: 211,
        },
        {
          x: "train",
          y: 81,
        },
        {
          x: "subway",
          y: 79,
        },
        {
          x: "bus",
          y: 131,
        },
        {
          x: "car",
          y: 30,
        },
        {
          x: "moto",
          y: 226,
        },
        {
          x: "bicycle",
          y: 281,
        },
        {
          x: "horse",
          y: 61,
        },
        {
          x: "skateboard",
          y: 196,
        },
        {
          x: "others",
          y: 208,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(7, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 60,
        },
        {
          x: "helicopter",
          y: 104,
        },
        {
          x: "boat",
          y: 88,
        },
        {
          x: "train",
          y: 246,
        },
        {
          x: "subway",
          y: 110,
        },
        {
          x: "bus",
          y: 38,
        },
        {
          x: "car",
          y: 273,
        },
        {
          x: "moto",
          y: 113,
        },
        {
          x: "bicycle",
          y: 271,
        },
        {
          x: "horse",
          y: 221,
        },
        {
          x: "skateboard",
          y: 274,
        },
        {
          x: "others",
          y: 145,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(247, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 17,
        },
        {
          x: "helicopter",
          y: 30,
        },
        {
          x: "boat",
          y: 92,
        },
        {
          x: "train",
          y: 167,
        },
        {
          x: "subway",
          y: 34,
        },
        {
          x: "bus",
          y: 106,
        },
        {
          x: "car",
          y: 28,
        },
        {
          x: "moto",
          y: 15,
        },
        {
          x: "bicycle",
          y: 79,
        },
        {
          x: "horse",
          y: 106,
        },
        {
          x: "skateboard",
          y: 277,
        },
        {
          x: "others",
          y: 259,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(347, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 282,
        },
        {
          x: "helicopter",
          y: 154,
        },
        {
          x: "boat",
          y: 201,
        },
        {
          x: "train",
          y: 93,
        },
        {
          x: "subway",
          y: 136,
        },
        {
          x: "bus",
          y: 152,
        },
        {
          x: "car",
          y: 24,
        },
        {
          x: "moto",
          y: 38,
        },
        {
          x: "bicycle",
          y: 285,
        },
        {
          x: "horse",
          y: 31,
        },
        {
          x: "skateboard",
          y: 247,
        },
        {
          x: "others",
          y: 100,
        },
      ],
    },
  ];
  return (
    <Box
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
