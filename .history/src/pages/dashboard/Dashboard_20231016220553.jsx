import { Box, Button } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <div>
      <Box sx={{textAlign:"right", padding:"6px 8px" , textTransform:"capitalize"}}>
        
        <Button variant="contained" color="primary" sx={{mb:3}}>
          <DownloadOutlinedIcon />
          Download Reports
        </Button>
      </Box>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};

export default Dashboard;
