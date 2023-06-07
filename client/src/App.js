import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import PostForm from "./components/Donations/PostForm";
import SignInForm from "./components/Login/SignInForm";
import SignUpForm from "./components/Login/SignUpForm";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import MyProfile from "./redux/MyProfile";
import DonationContainer from "./components/Donations/DonationContainer";
import MessageHome from "./components/Messages/MessageHome";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { login, logout } from "./redux/userSlice";
import { fetchPosts } from "./redux/postSlice";

function App() {
  const { posts } = useSelector(state=>state.posts)
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch user if signed in
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((data) => dispatch(login(data)));
        navigate('/home');
      } else {
        navigate('/home');
      }
    });
  }, []);

  // Initial fetch of all posts (whether you're signed in or not)
  useEffect(()=>{
      fetch('/posts')
      .then(res=>res.json())
      .then(data=>dispatch(fetchPosts(data)))
  }, []);


 // Return of JSX (dependant on Login of User-State)
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/home"
          element={
            <HomePage />
          }
        />
        <Route
          path="/posts"
          element={
            <PostForm />
          }
        />
        <Route
          path="/login"
          element={
            <SignInForm />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUpForm />
          }
        />
        <Route
          path="/donations"
          element={
            <DonationContainer />
          }
        />
        <Route
          path="/messages/*"
          element={
            <MessageHome />
          }
        />
        <Route
          path="/my_posts/*"
          element={
            <MyProfile />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
