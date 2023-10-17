import { Stack, useTheme } from "@mui/material";
import Card from "./card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1 } from "./data";

const Row1 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      gap={1}
      flexWrap={"wrap"}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Card
        icon={
          <EmailIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title="12,361"
        subTitle="Emails Sent"
        increase="+14%"
        data={undefined}
      />
      <Card
        icon={<PointOfSaleIcon     sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
        title="431,225"
        subTitle="Sales obtained"
        increase="+21%"
        data={data1}
      />
      <Card
        icon={<PersonAddIcon     sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
        title="32,441"
        subTitle="New Clients"
        increase="+5%"
        data={data2}
      />
      <Card
        icon={<TrafficIcon      sx={{ fontSize: "23px", color: theme.palette.secondary.main }}/>}
        title="1,325,134"
        subTitle="Traffic Received"
        increase="+43%"
        data={undefined}
      />
    </Stack>
  );
};

export default Row1;
