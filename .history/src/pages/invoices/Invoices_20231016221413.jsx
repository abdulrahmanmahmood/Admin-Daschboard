import { Box,} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import Header from "../../components/Header";
const Invoices = () => {
  return (
<Box >
<Header title="INVOICES" subTitle="List of Invoice Balances" />

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
