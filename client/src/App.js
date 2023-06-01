import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import PostForm from "./components/PostForm";
import SignInForm from "./components/SignInForm";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { login, logout } from "./redux/userSlice";

function App() {

  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((data) => dispatch(login(data)));
        navigate("/home");
      } else {
        onLogout();;
      }
    });
  }, []);

  function onLogout(){
    dispatch(logout());
    navigate("/signin")
  }

 // Return of JSX (dependant on Login of User-State)
 if (user) {
  return (
    <div className="App">
      <PostForm />
    </div>
  );
} else
  return (
    <Routes>
      <Route
        path="/signin"
        element={
          <SignInForm />
        }
      />
    </Routes>
  );
};

export default App;
