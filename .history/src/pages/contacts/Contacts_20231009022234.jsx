import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import { columns, rows } from "./data";






const Contacts = () => {
  return (
    <Box style={{ height: 300, width: '100%' }}>
    <DataGrid rows={rows} columns={columns} />
  </Box>
  );
}

export default Contacts;
