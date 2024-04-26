import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import MyCart from "./pages/MyCart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "./redux/auth/authSlice";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    //set Token from localstorage
    //setToken(localStorage.getItem('token'));
    dispatch(setToken(localStorage.getItem('token')));
  }, []);

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<MyCart />} />
      </Routes>
    </>
  );
}

export default App;
