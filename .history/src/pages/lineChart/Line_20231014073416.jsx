import { useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
const Line = () => {
  const theme = useTheme()

  return (
    <div>
          <ResponsiveLine
     theme={{
      textColor: theme.palette.text.primary,
      fontSize: 11,
      axis: {
        domain: {
          line: {
            stroke: theme.palette.divider,
            strokeWidth: 1,
          },
        },
        legend: {
          text: {
            fontSize: 12,
            fill: theme.palette.text.primary,
          },
        },
        ticks: {
          line: {
            stroke: theme.palette.divider,
            strokeWidth: 1,
          },
          text: {
            fontSize: 11,
            fill: theme.palette.text.secondary,
          },
        },
      },
      grid: {
        line: {
          stroke: theme.palette.divider,
          strokeWidth: 0,
        },
      },
      legends: {
        title: {
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
          },
        },
        text: {
          fontSize: 11,
          fill: theme.palette.text.primary,
        },
        ticks: {
          line: {},
          text: {
            fontSize: 10,
            fill: theme.palette.text.primary,
          },
        },
      },
      annotations: {
        text: {
          fontSize: 13,
          fill: theme.palette.text.primary,
          outlineWidth: 2,
          outlineColor: "#ffffff",
          outlineOpacity: 1,
        },
        link: {
          stroke: "#000000",
          strokeWidth: 1,
          outlineWidth: 2,
          outlineColor: "#ffffff",
          outlineOpacity: 1,
        },
        outline: {
          stroke: "#000000",
          strokeWidth: 2,
          outlineWidth: 2,
          outlineColor: "#ffffff",
          outlineOpacity: 1,
        },
        symbol: {
          fill: "#000000",
          outlineWidth: 2,
          outlineColor: "#ffffff",
          outlineOpacity: 1,
        },
      },
      tooltip: {
        container: {
          background: theme.palette.background.default,
          color: theme.palette.text.primary,
          fontSize: 12,
        },
        basic: {},
        chip: {},
        table: {},
        tableCell: {},
        tableCellValue: {},
      },
    }}
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
                itemBackground:'background',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
    </div>
  );
}

export default Line;
