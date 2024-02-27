import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import logoph from "../assets/logoph.png";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className='header flex justify-between items-center p-2 bg-white text-[#FF914D] border-b-2 border-[#FF914D]'>
      <div className='logo'>
        <Link to='/'>
          <img
            className='w-24 md:w-32'
            src={logoph}
            alt='logo-packages-Memo'
          />{" "}
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
