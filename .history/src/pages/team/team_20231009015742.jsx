import { useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";





const columns = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];
const Team = () => {
  const theme = useTheme()
  return (
    <div style={{ height: 300, width: '100%' }}>
    <DataGrid rows={rows} columns={columns} />
  </div>
  );
}

export default Team;
