import { Stack, useTheme } from "@mui/material";
import Card from "./card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

const Row1 = () => {
  const theme = useTheme()
  return (
    <Stack
      direction={"row"}
      gap={1}
      flexWrap={"wrap"}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Card
        icon={<EmailIcon sx={{fontSize:"23px" , color:theme.palette.secondary.main}} />}
        title="12,361"
        subTitle="Emails Sent"
        chart=""
        increase="+14%"
      />
      <Card
        icon={<PointOfSaleIcon />}
        title=""
        subTitle=""
        chart=""
        increase=""
      />
      <Card
        icon={<PersonAddIcon />}
        title=""
        subTitle=""
        chart=""
        increase=""
      />
      <Card icon={<TrafficIcon />} title="" subTitle="" chart="" increase="" />
    </Stack>
  );
};

export default Row1;
