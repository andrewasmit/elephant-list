import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function NavBar() {
    const navigate= useNavigate();
    const { user } = useSelector(state=> state.user)

  return (
    <div>
        <h1>THIS IS THE NAVBAR</h1>
        {user ? <h2>Welcome, {user.username}!</h2> : null }
        <button onClick={()=> navigate('/home')}>Home</button>
        <button onClick={()=> navigate('/login')}>Login</button>
        <button onClick={()=> navigate('/posts')}>New Post</button>
    </div>
  )
};

export default NavBar