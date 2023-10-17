import { Box,} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./data";
const Invoices = () => {
  return (
<Box>
      <Box style={{ height: "80vh", width: '98%' }}>
      <DataGrid
      slots={{
        toolbar: GridToolbar,
      }}
      checkboxSelection
      rows={rows} columns={columns} />
    </Box>
</Box>
  );
}

export default Invoices;
