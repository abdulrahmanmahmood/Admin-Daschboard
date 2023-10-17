import { Button, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form"

const Form = () => {
  const chooses = ["play", "work", "help", "vest"];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () =>{
     console.log("done")
    }

  return (
    <Box
    onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
        }}
      >
        <TextField
        {...register("firstName", { required: true, minLength: 3 })}
          id="filled-basic"
          label="First Name"
          variant="filled"
          sx={{ flex: 1 }}
          helperText={ Boolean(errors.firstName)  "This field is required":null}
          error={Boolean(errors.firstName)}
        />
        <TextField
          id="filled-basic"
          label="Last Name"
          variant="filled"
          sx={{ flex: 1 }}
        />
      </Box>

      <TextField id="filled-basic" label="Email" variant="filled" />
      <TextField id="filled-basic" label="Contact Number" variant="filled" />
      <TextField id="filled-basic" label="Address 1" variant="filled" />
      <TextField id="filled-basic" label="address 2" variant="filled" />
      <TextField
        id="outlined-select-currency"
        select
        label="Role"
        helperText="Please select your"
        variant="filled"
        defaultValue="play"
      >
        {chooses.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{textAlign:"end"}}>
        <Button type="submit" variant="contained" size="large" sx={{textTransform:"capitalize"}}>
          Create New User
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
