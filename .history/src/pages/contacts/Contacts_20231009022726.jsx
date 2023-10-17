import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import { columns, rows } from "./data";






const Contacts = () => {
  return (
    <Box style={{ height: 300, width: '' }}>
    <DataGrid
    slots={{
      toolbar: GridToolbar,
    }}
    rows={rows} columns={columns} />
  </Box>
  );
}

export default Contacts;
