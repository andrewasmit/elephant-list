import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import PostForm from "./components/PostForm";
import SignInForm from "./components/SignInForm";
import NavBar from "./components/NavBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { login, logout } from "./redux/userSlice";
import HomePage from "./components/HomePage";

function App() {

  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  console.log("Current state of user: ", user)

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((data) => dispatch(login(data)));
      } else {
        dispatch(logout());
      }
    });
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
      </Routes>
    </div>
  );
};

export default App;
