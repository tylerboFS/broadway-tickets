import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setToken } from "../redux/auth/authSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  return (
    <>
      <Link to="/">Home</Link>{" "}
      {token ? (
        <>
          <Link to="/cart">MyCart</Link>
          <Link
            onClick={(e) => {
              dispatch(setToken(''));
              localStorage.setItem("token", "");
            }}
            to="/"
          >
            Logout
          </Link>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </>
  );
};

export default NavBar;
