import React, { useState } from "react";
import { login } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addErrors, clearErrors } from "../../redux/errorSlice";
import { Typography, Box, TextField, Button, Link, Grid, CssBaseline, Paper, Avatar } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


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

  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://www.linkedin.com/in/andrewasmit/">
          Andrew Smit
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  
  const defaultTheme = createTheme();
  // const backgrounds = [
  //   'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlcGhhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60',
  //   'https://images.unsplash.com/photo-1526226060519-126d75eaa5e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWxlcGhhbnQlMjBjb21tdW5pdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60',
  //   'https://images.unsplash.com/photo-1567608346847-6d9817e63e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZXBoYW50JTIwY29tbXVuaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
  //   'https://images.unsplash.com/photo-1526226128118-9ef71fc2f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVsZXBoYW50JTIwY29tbXVuaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
  //   'https://images.unsplash.com/photo-1495731182005-580baa0f77db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGVsZXBoYW50JTIwY29tbXVuaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
  //   'https://images.unsplash.com/photo-1531303814030-5636aa5d6452?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGVsZXBoYW50JTIwY29tbXVuaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
  //   'https://images.unsplash.com/photo-1517486430290-35657bdcef51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGVsZXBoYW50JTIwY29tbXVuaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
  //   'https://images.unsplash.com/photo-1603632076161-5836b146638c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGVsZXBoYW50JTIwY29tbXVuaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
  //   ''
  // ];

  // const random = Math.floor(Math.random() * backgrounds.length)

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(%PUBLIC_URL%../../../../pictures/elephants.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={signIn} sx={{ mt: 1 }}>
            <TextField
                required
                fullWidth
                margin="normal"
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
                fullWidth
                margin="normal"
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
            
            {errorsToDisplay}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                
                <Grid item xs={12}>
                <Button onClick={() => handleNavigate("/signup")} variant="text" fullWidth>
                  No account yet? Sign up!
                </Button>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </div>
  );
}

export default SignInForm;
