import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import { columns, rows } from "./data";






const Contacts = () => {
  return (
    <Box style={{ height: "80vh", width: '98%' }}>
    <DataGrid
    slots={{
      toolbar: GridToolbar,
    }}
    rows={rows} columns={columns} />
  </Box>
  );
}

export default Contacts;
