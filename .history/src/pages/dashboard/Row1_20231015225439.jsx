import {  Stack } from "@mui/material";
import Card from "./card";

const Row1 = () => {
  return (
    <Stack direction={"row"} gap={1} flexWrap={"wrap"} justifyContent={{xs:"center", sm:"space-between"}}>
<Card />
<Card/>
<Card/>
<Card/>
    </Stack>
  );
};

export default Row1;
