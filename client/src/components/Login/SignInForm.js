import React, { useState } from "react";
import { login } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addErrors, clearErrors } from "../../redux/errorSlice";
import { Typography, Box, TextField, Button } from "@mui/material";

function SignInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errors } = useSelector((state) => state.errors);
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const errorsToDisplay = errors.map((err, idx) => {
    return (
      <li key={idx} className="error-list-item">
        {err}
      </li>
    );
  });

  function signIn(e) {
    e.preventDefault();
    dispatch(clearErrors());
    fetch("/login", {
      method: "POST",
      body: JSON.stringify(signInData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => dispatch(login(data)));
        clearForm();
        navigate("/donations");
      } else
        res.json().then((data) => {
          dispatch(addErrors(data.error));
        });
    });
  }

  function clearForm() {
    setSignInData({
      username: "",
      password: "",
    });
    dispatch(clearErrors());
  }

  function handleNavigate(url) {
    clearForm();
    navigate(url);
  }

  return (
    <div>
      <Typography variant="h1" component="h1">
        SIGN IN PAGE
      </Typography>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-required"
          label="Username"
          value={signInData.username}
          onChange={(e) =>
            setSignInData({
              username: e.target.value,
              password: signInData.password,
            })
          }
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          value={signInData.password}
          onChange={(e) =>
            setSignInData({
              username: signInData.username,
              password: e.target.value,
            })
          }
        />
        <Button onClick={signIn} variant="contained">Login</Button>
        </Box>

        <Button onClick={() => handleNavigate("/signup")} variant="text">
        No account yet? Sign up!
      </Button>
      {errorsToDisplay}

      {/* <form onSubmit={signIn}>
        <label>
          Username:
          <input
            type="text"
            name="name"
            value={signInData.username}
            onChange={(e) =>
              setSignInData({
                username: e.target.value,
                password: signInData.password,
              })
            }
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={signInData.password}
            onChange={(e) =>
              setSignInData({
                username: signInData.username,
                password: e.target.value,
              })
            }
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={() => handleNavigate("/signup")}>
        No account yet? Sign up!
      </button>
      {errorsToDisplay} */}
    </div>
  );
}

export default SignInForm;
