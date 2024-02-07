import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Spinner from "../components/Spinner";

const Login = () => {
  const customShadowStyle = {
    boxShadow: "0 10px 20px rgba(0, 0, 0, .2)",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const { email, password } = formData;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  if (isLoading) return <Spinner />;

  return (
    <div className='text-slate-600 h-screen w-screen flex flex-col justify-center items-center'>
      <h1 className='text-center text-3xl font-bold font-serif mb-10'>
        Packages Memo
      </h1>
      <div
        style={customShadowStyle}
        className='text-slate-600 py-10 px-10 bg-white rounded-md  border-cyan-100'>
        <form
          onSubmit={(e) => onSubmit(e)}
          className='flex flex-col w-80 space-y-2 mb-5'>
          <label htmlFor='text'> Email</label>
          <input
            className='border-2 border-gray-300 rounded p-1'
            type='text'
            name='email'
            id='email'
            value={email}
            onChange={onChange}
          />
          <label htmlFor='text'> Password</label>
          <div className='relative'>
            <input
              className='border-2 border-gray-300 rounded p-1 w-full'
              type={isPasswordHidden ? "password" : "text"}
              name='password'
              id='password'
              value={password}
              onChange={onChange}
            />
            <div
              className='absolute inset-y-0 right-2 flex items-center cursor-pointer'
              onClick={() => setIsPasswordHidden(!isPasswordHidden)}>
              {isPasswordHidden ? (
                <AiOutlineEyeInvisible className='h-5 w-5 text-gray-400' />
              ) : (
                <AiOutlineEye className='h-5 w-5 text-gray-400' />
              )}
            </div>
          </div>
          <div className='flex justify-center my-5'>
            <button
              className='bg-blue-600 rounded text-white p-1 w-80 disabled:opacity-75'
              type='submit'
              disabled={!(email !== "" && password !== "")}>
              Login
            </button>
          </div>
        </form>
      </div>
      <div className='flex flex-col justify-center my-10 text-blue-600 p-1 w-80 text-center '>
        Don't have an account yet?
        <Link
          to='/signup'
          className=''>
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
