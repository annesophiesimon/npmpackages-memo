import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import {logout, reset} from '../features/auth/authSlice';
import logo  from '../assets/logo.png';
// import SearchBar from './SearchBar';


const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');

    }

    return (
        <header className='header flex justify-between items-center p-2 bg-blue-600 text-white'>
        <div className='logo'>
            <Link to="/"><img className='w-12' src={logo} alt="logo-packages-Memo" /> </Link>
        </div>
        {/* Only display if user is loggin*/}
        {/* <SearchBar />  */}
        <ul className='flex space-x-2'>
            {
                user ? (
                    <li>
                        <button onClick={onLogout}> Logout</button>
                    </li>
                ) : (
                    <>
                              <li>
                <Link to="/login">
                   Login
                </Link>
            </li>
            <li>
                <Link to="/signup">
                     Sign up
                </Link>
            </li>  
                    </>
                )
            }
                      
        </ul>
    </header>
    )
}

export default Header;



