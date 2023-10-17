import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const Form = () => {
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
    </Box>
  );
};

export default Form;
