import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const Form = () => {
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="filled-basic" label="First Name" variant="filled" />
    <TextField id="filled-basic" label="Last Name" variant="filled" />
    <TextField id="filled-basic" label="First Name" variant="filled" />
    <TextField id="filled-basic" label="First Name" variant="filled" />
    <TextField id="filled-basic" label="First Name" variant="filled" />
    <TextField id="filled-basic" label="First Name" variant="filled" />

  </Box>
  );
}

export default Form;
