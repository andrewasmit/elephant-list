import React, { useState } from "react";
import { login } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addErrors, clearErrors } from "../../redux/errorSlice";


function SignUpForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errors } = useSelector((state) => state.errors);
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
    confirm_password: "",
    email_address: ""
  });

  const errorsToDisplay = errors.map((err, idx)=>{
    return <li key={idx} className="error-list-item">{err}</li>
  })

  function handleSignUp(e) {
    e.preventDefault();
    dispatch(clearErrors())
    fetch("/signup", {
      method: "POST",
      body: JSON.stringify(signInData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if(res.ok){
            res.json().data((data) => dispatch(login(data)))
            clearForm();
            dispatch(clearErrors());
        } else
        res.json().then(data=>{
            data.errors.map(err=> dispatch(addErrors(err)))
          })
      });
  }

  function clearForm(){
    setSignInData({
        username: "",
        password: "",
        confirm_password: "",
        email_address: "",
      });
      dispatch(clearErrors());
  }

  function handleNavigate(url){
    clearForm()
    navigate(url);
  }

//  Return of JSX
  return (
    <div>
      <h1>SIGN UP FOR NEW ACCOUNT</h1>
      <form onSubmit={handleSignUp}>
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
                confirm_password: signInData.confirm_password,
                email_address: signInData.email_address
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
                confirm_password: signInData.confirm_password,
                email_address: signInData.email_address
              })
            }
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="password"
            value={signInData.confirm_password}
            onChange={(e) =>
              setSignInData({
                username: signInData.username,
                password: signInData.password,
                confirm_password: e.target.value,
                email_address: signInData.email_address
              })
            }
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={signInData.email_address}
            onChange={(e) =>
              setSignInData({
                username: signInData.username,
                password: signInData.password,
                confirm_password: signInData.confirm_password,
                email_address: e.target.value
              })
            }
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={() => clearForm()}>
        Reset form
      </button>
      <button onClick={() => handleNavigate("/login")}>
        Already have an account? Log in!
      </button>
      {errorsToDisplay}
    </div>
  );
}

export default SignUpForm;
