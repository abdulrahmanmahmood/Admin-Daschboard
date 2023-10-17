import { useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

const Pie = ({ isDashboard }) => {
  const theme = useTheme();
  const data = [
    {
      id: "make",
      label: "make",
      value: 401,
      color: "hsl(199, 70%, 50%)",
    },
    {
      id: "php",
      label: "php",
      value: 332,
      color: "hsl(168, 70%, 50%)",
    },
    {
      id: "c",
      label: "c",
      value: 323,
      color: "hsl(40, 70%, 50%)",
    },
    {
      id: "scala",
      label: "scala",
      value: 217,
      color: "hsl(69, 70%, 50%)",
    },
    {
      id: "javascript",
      label: "javascript",
      value: 332,
      color: "hsl(259, 70%, 50%)",
    },
  ];
  return (
    <ResponsivePie

      data={data}
      margin={
        isDashboard
          ? { top: 10, right: 0, bottom: 10, left: 0 }
          : { top: 40, right: 80, bottom: 80, left: 80 }
      }
      innerRadius={isDashboard ? 0.8 : 0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={theme.palette.text.primary}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      enableArcLabels={isDashboard ? false : true}
      enableArcLinkLabels={isDashboard ? false : true}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "ruby",
          },
          id: "dots",
        },
        {
          match: {
            id: "c",
          },
          id: "dots",
        },
        {
          match: {
            id: "go",
          },
          id: "dots",
        },
        {
          match: {
            id: "python",
          },
          id: "dots",
        },
        {
          match: {
            id: "scala",
          },
          id: "lines",
        },
        {
          match: {
            id: "lisp",
          },
          id: "lines",
        },
        {
          match: {
            id: "elixir",
          },
          id: "lines",
        },
        {
          match: {
            id: "javascript",
          },
          id: "lines",
        },
      ]}
      legends={[
        isDashboard
          ? []
        :[ {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: theme.palette.text.primary,
              },
            },
          ],
        }],
      ]}
    />
  );
};

export default Pie;