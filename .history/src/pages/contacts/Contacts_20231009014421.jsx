import { DataGrid } from "@mui/x-data-grid";






const Contacts = () => {
  return (
    <div style={{ height: 300, width: '100%' }}>
    <DataGrid rows={rows} columns={columns} />
  </div>
  );
}

export default Contacts;
