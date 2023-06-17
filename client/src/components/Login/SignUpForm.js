import React, { useState } from "react";
import { login } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addErrors, clearErrors } from "../../redux/errorSlice";
import { Typography, Box, TextField, Button } from "@mui/material";

function SignUpForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errors } = useSelector((state) => state.errors);
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
    password_confirmation: "",
    email_address: "",
  });


  const errorsToDisplay = errors.map((err, idx) => {
    return (
      <li key={idx} className="error-list-item">
        {err}
      </li>
    );
  });

  function handleSignUp(e) {
    e.preventDefault();
    dispatch(clearErrors());
    fetch("/signup", {
      method: "POST",
      body: JSON.stringify(signInData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        res.json()
        .then(data => dispatch(login(data)));
        clearForm();
        handleNavigate('/donations');
      } else
        res.json().then((data) => {
          data.errors.map((err) => dispatch(addErrors(err)));
        });
    });
  }

  function clearForm() {
    setSignInData({
      username: "",
      password: "",
      password_confirmation: "",
      email_address: "",
    });
    dispatch(clearErrors());
  }

  function handleNavigate(url) {
    clearForm();
    navigate(url);
  }

  //  Return of JSX
  return (
    <div>
      <Typography variant="h2" component="h2">
        SIGN UP FOR NEW ACCOUNT
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSignUp}
      >
        <TextField
          required
          id="outlined-required"
          label="Username"
          sx={{ bgcolor: "white" }}
          value={signInData.username}
          onChange={(e) =>
            setSignInData({
              username: e.target.value,
              password: signInData.password,
              confirm_password: signInData.password_confirmation,
              email_address: signInData.email_address,
            })
          }
        />
        <TextField
          required
          id="outlined-password-input"
          sx={{ bgcolor: "white" }}
          label="Password"
          type="password"
          value={signInData.password}
          onChange={(e) =>
            setSignInData({
              username: signInData.username,
              password: e.target.value,
              confirm_password: signInData.password_confirmation,
              email_address: signInData.email_address,
            })
          }
        />
        <TextField
          required
          id="outlined-password-input"
          label="Confirm Password"
          sx={{ bgcolor: "white" }}
          type="password"
          value={signInData.password_confirmation}
          onChange={(e) =>
            setSignInData({
              username: signInData.username,
              password: signInData.password,
              password_confirmation: e.target.value,
              email_address: signInData.email_address,
            })
          }
        />
        <TextField
          required
          id="outlined-password-input"
          label="Email Address"
          sx={{ bgcolor: "white" }}
          type="text"
          value={signInData.email_address}
          onChange={(e) =>
            setSignInData({
              username: signInData.username,
              password: signInData.password,
              password_confirmation: signInData.password_confirmation,
              email_address: e.target.value,
            })
          }
        />
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign up!
        </Button>
        <Button onClick={() => clearForm()} variant="outlined" sx={{ mt: 3, mb: 2 }}>
          Reset Form
        </Button>
      </Box>

      <Button onClick={() => handleNavigate("/login")} variant="text">
        Already have an account? Sign in!
      </Button>

      {errorsToDisplay}
    </div>
  );
}

export default SignUpForm;
