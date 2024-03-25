import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import logoph from "../assets/logophwhite.png";
import logophorange from "../assets/logophorange.png";
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header
      className={`header flex justify-between items-center p-4 ${
        location.pathname !== "/"
          ? "bg-white text-orange-500"
          : "bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 text-white"
      }`}>
      <div className='logo'>
        <Link to='/'>
          <img
            className='w-20 md:w-24'
            src={location.pathname !== "/" ? logophorange : logoph}
            alt='logo-packages-Memo'
          />
        </Link>
      </div>
      <ul className='flex space-x-4'>
        {user ? (
          <>
            <li>
              <Link to='/dashboard'> My hub</Link>
            </li>
            <li>
              <button onClick={onLogout}> Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>Sign up</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
