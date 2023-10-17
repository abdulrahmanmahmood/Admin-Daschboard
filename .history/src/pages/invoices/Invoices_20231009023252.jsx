import { Box,} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
const Invoices = () => {
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

export default Invoices;
