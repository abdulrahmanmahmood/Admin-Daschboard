/* eslint-disable no-useless-escape */
/* eslint-disable no-extra-boolean-cast */
import React from "react";
import { Alert, Button, MenuItem, Snackbar } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

const Form = () => {
  const chooses = ["play", "work", "help", "vest"];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    console.log("done");
    handleClick();
  };
  const handleClick = () => {
    setOpen(true);
  };
  const regEmil =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const regMobile = /^01[0125][0-9]{8}$/gm;

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
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
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity="info">Account Creating successfully </Alert>
      </Snackbar>
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
          helperText={
            Boolean(errors.firstName)
              ? "This field is required & min 3 character"
              : null
          }
          error={Boolean(errors.firstName)}
        />
        <TextField
          {...register("lastName", { required: true, minLength: 3 })}
          id="filled-basic"
          label="Last Name"
          variant="filled"
          sx={{ flex: 1 }}
          helperText={
            Boolean(errors.lastName)
              ? "This field is required & min 3 character"
              : null
          }
          error={Boolean(errors.lastName)}
        />
      </Box>

      <TextField
        {...register("email", { required: true, pattern: regEmil })}
        id="filled-basic"
        label="Email"
        variant="filled"
        helperText={
          Boolean(errors.email) ? "Please provide a valid email address" : null
        }
        error={Boolean(errors.email)}
      />

      <TextField
        {...register("mobile", { required: true, pattern: regMobile })}
        id="filled-basic"
        label="Contact Number"
        variant="filled"
        helperText={
          Boolean(errors.mobile) ? "Please provide a valid mobile number" : null
        }
        error={Boolean(errors.mobile)}
      />

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

      <Box sx={{ textAlign: "end" }}>
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ textTransform: "capitalize" }}
        >
          Create New User
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
