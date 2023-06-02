import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  function handleLogout() {
    fetch("logout", {
      method: "DELETE",
    }).then(dispatch(logout()));
  }

  return (
    <div>
      <h1>THIS IS THE NAVBAR</h1>
      {user ? <h2>Welcome, {user.username}!</h2> : null}
      <button onClick={() => navigate("/home")}>Home</button>
      <button onClick={() => navigate("/donations")}>Donations</button>
      <button onClick={() => navigate("/posts")}>New Post</button>
      { user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={() => navigate("/login")}>Login</button>
      ) }
    </div>
  );
}

export default NavBar;
