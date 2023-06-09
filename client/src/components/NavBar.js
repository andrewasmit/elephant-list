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
    navigate('/donations');
  }

  return (
    <div>
      <h1>THIS IS THE NAVBAR</h1>
      {user ? <h2>Welcome, {user.username}!</h2> : null}
      <button onClick={() => navigate("/home")}>Home</button>
      <button onClick={() => navigate("/donations")}>Donations</button>
      { user ? <button onClick={() => navigate("/posts")}>New Post</button> : null }
      { user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={() => navigate("/login")}>Login</button>
      ) }

      { user ? <button onClick={() => navigate("/messages")}>Messages</button> : null }
      { user ? <button onClick={() => navigate(`/profile/${user.id}`)}>My Profile</button> : null }

    </div>
  );
}

export default NavBar;
