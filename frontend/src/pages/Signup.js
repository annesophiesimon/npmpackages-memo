import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { validate } from "email-validator";
import Spinner from "../components/Spinner";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillCheckCircle,
} from "react-icons/ai";

const Signup = () => {
  const customShadowStyle = {
    boxShadow: "0 10px 20px rgba(0, 0, 0, .2)",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // To do: refractor
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const [isPwdLengthValid, setIsPwdLengthValid] = useState(false);
  const [isPwdLowerCasePresent, setIsPwdlowerCasePresent] = useState(false);
  const [isPwdUpperCasePresent, setIsPwdUpperCasePresent] = useState(false);
  const [isPwdnumberPresent, setIsPwdNumberPresent] = useState(false);
  const [isPwdIdentical, setIsPwdIdentical] = useState(false);

  const [isPasswordHidden, setIsPasswordHiden] = useState(true);
  const [isRepeatedPasswordHidden, setIsRepeatedPasswordHiden] = useState(true);

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const passwordValidator = (e) => {
    const password = e.target.value;
    setPassword(password);
    if (password.length >= 8) {
      setIsPwdLengthValid(true);
    } else {
      setIsPwdLengthValid(false);
    }
    if (/[A-Z]/.test(password)) {
      setIsPwdUpperCasePresent(true);
    } else {
      setIsPwdUpperCasePresent(false);
    }
    if (/[a-z]/.test(password)) {
      setIsPwdlowerCasePresent(true);
    } else {
      setIsPwdlowerCasePresent(false);
    }
    if (/[1-9]/.test(password)) {
      setIsPwdNumberPresent(true);
    } else {
      setIsPwdNumberPresent(false);
    }
  };

  const passwordEqual = (e) => {
    const repeatedPassword = e.target.value;
    setRepeatedPassword(repeatedPassword);
    if (password !== "" && password === repeatedPassword) {
      setIsPwdIdentical(true);
    } else {
      setIsPwdIdentical(false);
    }
  };

  const isFormValid = () => {
    if (
      username !== "" &&
      validate(email) &&
      isPwdLengthValid &&
      isPwdLowerCasePresent &&
      isPwdUpperCasePresent &&
      isPwdnumberPresent &&
      isPwdIdentical
    ) {
      return true;
    } else {
      return false;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate(email)) {
      toast.error("Invalid email");
    } else if (password !== repeatedPassword) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        username,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) {
    return (
      <div className='flex justify-center'>
        <Spinner />
      </div>
    );
  }

  return (
    <div className='text-slate-600 w-screen flex flex-col justify-center items-center p-5'>
      <h1 className='text-center text-xl md:text-3xl font-sansserif mb-5'>
        PACKAGES HUB
      </h1>
      <div
        style={customShadowStyle}
        className='text-slate-600 py-10 bg-white rounded-md  border-cyan-100 md:w-96'>
        <h2 className='text-center p-8 text-xl mb-4'>
          Sign up to create your packages Hub
        </h2>
        <form
          onSubmit={onSubmit}
          className='px-10 flex flex-col space-y-2 mb-5 m-auto'>
          <label htmlFor='text'> Username</label>
          <input
            className='border border-gray-300 rounded p-1'
            type='text'
            name='username'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor='text'> Email</label>
          <input
            className='border border-gray-300 rounded p-1'
            type='text'
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='text'> Password</label>
          <div className='relative'>
            <input
              className='border border-gray-300 rounded p-1 w-full'
              type={isPasswordHidden ? "password" : "text"}
              name='password'
              id='password'
              value={password}
              onChange={(e) => passwordValidator(e)}
            />
            <div
              className='absolute inset-y-0 right-2 flex items-center cursor-pointer'
              onClick={() => setIsPasswordHiden(!isPasswordHidden)}>
              {isPasswordHidden ? (
                <AiOutlineEyeInvisible className='h-5 w-5 text-gray-400' />
              ) : (
                <AiOutlineEye className='h-5 w-5 text-gray-400' />
              )}
            </div>
          </div>
          <label htmlFor='text'> Repeat password</label>
          <div className='relative'>
            <input
              className='border border-gray-300 rounded p-1 w-full'
              type={isRepeatedPasswordHidden ? "password" : "text"}
              name='repeatedpassword'
              id='repeatedpassword'
              value={repeatedPassword}
              onChange={(e) => passwordEqual(e)}
            />
            <div
              className='absolute inset-y-0 right-2 flex items-center cursor-pointer'
              onClick={() =>
                setIsRepeatedPasswordHiden(!isRepeatedPasswordHidden)
              }>
              {isRepeatedPasswordHidden ? (
                <AiOutlineEyeInvisible className='h-5 w-5 text-gray-400' />
              ) : (
                <AiOutlineEye className='h-5 w-5 text-gray-400' />
              )}
            </div>
          </div>
          <div className='flex justify-center'>
            <button
              className='bg-orange-600 mt-2 rounded text-white p-1 w-full disabled:opacity-75'
              type='submit'
              disabled={!isFormValid()}>
              Create an Account
            </button>
          </div>
        </form>
        <div className='px-10 m-auto'>
          <h2 className='font-bold my-2'>Password guideline</h2>
          <ul>
            <li className='flex items-center'>
              {" "}
              <AiFillCheckCircle
                className={
                  isPwdLengthValid
                    ? "mr-2 text-green-600"
                    : "mr-2 text-slate-400"
                }
              />{" "}
              At least 8 characters long{" "}
            </li>
            <li className='flex items-center'>
              {" "}
              <AiFillCheckCircle
                className={
                  isPwdLowerCasePresent
                    ? "mr-2 text-green-600"
                    : "mr-2 text-slate-400"
                }
              />{" "}
              Minimum one lower case
            </li>
            <li className='flex items-center'>
              {" "}
              <AiFillCheckCircle
                className={
                  isPwdUpperCasePresent
                    ? "mr-2 text-green-600"
                    : "mr-2 text-slate-400"
                }
              />{" "}
              Minimum one upper case
            </li>
            <li className='flex items-center'>
              {" "}
              <AiFillCheckCircle
                className={
                  isPwdnumberPresent
                    ? "mr-2 text-green-600"
                    : "mr-2 text-slate-400"
                }
              />{" "}
              Minimum one number
            </li>
            <li className='flex items-center'>
              {" "}
              <AiFillCheckCircle
                className={
                  isPwdIdentical ? "mr-2 text-green-600" : "mr-2 text-slate-400"
                }
              />{" "}
              Both identical
            </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col text-center my-5 text-orange-600 '>
        Already have an account?
        <Link
          className='underline underline-offset-2'
          to='/login'>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
