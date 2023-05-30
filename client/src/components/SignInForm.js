import React, { useState } from "react";

function SignInForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function signIn(e){
        e.preventDefault();
        const signInData = {
            username: username,
            password: password
        }
        fetch('/login',{
            method: "POST",
            body: JSON.stringify(signInData),
            headers: {
                "Content-Type" : "application/json" 
            }
        }).then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err));
        setUsername("");
        setPassword("");
    }


  return (
    <form onSubmit={signIn}>
      <label>
        Username:
        <input type="text" name="name" value={username} onChange={e=>setUsername(e.target.value)}/>
      </label>
      <label>
        Password:
        <input type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SignInForm;
