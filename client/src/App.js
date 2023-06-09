import "./App.css";
import PostForm from "./components/Donations/PostForm";
import SignInForm from "./components/Login/SignInForm";
import SignUpForm from "./components/Login/SignUpForm";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage/HomePage";
import Profile from "./components/Profile/Profile";
import DonationContainer from "./components/Donations/DonationContainer";
import MessageHome from "./components/Messages/MessageHome";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/userSlice";
import { fetchPosts } from "./redux/postSlice";
import { fetchAllUsers } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch user if signed in
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((data) => dispatch(login(data)));
        navigate("/home");
      } else {
        navigate("/home");
      }
    });
  }, []);

  // Initial fetch of all posts (whether you're signed in or not)
  useEffect(() => {
    fetch("/posts")
      .then((res) => res.json())
      .then((data) => dispatch(fetchPosts(data)));
  }, []);

  // Initial fetch of all users
  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((userArray) => dispatch(fetchAllUsers(userArray)));
  }, []);

  // Return of JSX (dependant on Login of User-State)
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/posts" element={<PostForm />} />
        <Route path="/login" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/donations" element={<DonationContainer />} />
        <Route path="/messages/*" element={<MessageHome />} />
        <Route path="/profile/*" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
