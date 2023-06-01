import React, { useState } from "react";
import { login } from "../redux/userSlice";
import { useDispatch } from "react-redux";

function SignInForm() {
  const dispatch = useDispatch();
    const [signInData, setSignInData] = useState({
      username: "",
      password: ""
    })

    function signIn(e){
        e.preventDefault();
        fetch('/login',{
            method: "POST",
            body: JSON.stringify(signInData),
            headers: {
                "Content-Type" : "application/json" 
            }
        }).then(res=>res.json())
        .then(data=>dispatch(login(data)))
        .catch(err=>console.log(err));
        setSignInData({
          username: "",
          password: ""
        });
    }

  return (
    <div>
      <h1>SIGN IN PAGE</h1>
    <form onSubmit={signIn}>
      <label>
        Username:
        <input 
          type="text" 
          name="name" 
          value={signInData.username} 
          onChange={e=>setSignInData({
            username: e.target.value,
            password: signInData.password
          })}
        />
      </label>
      <label>
        Password:
        <input 
          type="password" 
          name="password" 
          value={signInData.password} 
          onChange={e=>setSignInData({
            username: signInData.username,
            password: e.target.value
          })}        
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
}

export default SignInForm;
