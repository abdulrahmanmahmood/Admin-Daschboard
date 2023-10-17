import { Box,useTheme } from "@mui/material";
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
      color: "",
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
  const theme = useTheme()

  return (
    <Box height={"75vh"}>

    </Box>

  );
};

export default LineChart;
