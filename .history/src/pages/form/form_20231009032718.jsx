import { MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const Form = () => {
  const chooses = ["play","work","help","vest"]
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Box     sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
      }}>
        <TextField id="filled-basic" label="First Name" variant="filled" sx={{flex:1}} />
        <TextField id="filled-basic" label="Last Name" variant="filled" sx={{flex:1}}/>
      </Box>

      <TextField id="filled-basic" label="Email" variant="filled" />
      <TextField id="filled-basic" label="Contact Number" variant="filled" />
      <TextField id="filled-basic" label="Address 1" variant="filled" />
      <TextField id="filled-basic" label="address 2" variant="filled" />
      <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
        >
          {chooses.map((option) => (
            <MenuItem key={option} value={option}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </Box>
  );
};

export default Form;
