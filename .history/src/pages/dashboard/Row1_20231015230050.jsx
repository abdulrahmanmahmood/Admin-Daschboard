import { Stack } from "@mui/material";
import Card from "./card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

const Row1 = () => {
  return (
    <Stack
      direction={"row"}
      gap={1}
      flexWrap={"wrap"}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Card icon={<EmailIcon/>} title="" subTitle="" chart="" increase="" />
      <Card icon={<PointOfSaleIcon/>} title="" subTitle="" chart="" increase="" />
      <Card icon={<PersonAddIcon/>} title="" subTitle="" chart="" increase="" />
      <Card icon={<TrafficIcon/>} title="" subTitle="" chart="" increase="" />
    </Stack>
  );
};

export default Row1;
