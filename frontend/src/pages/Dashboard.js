import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPackages, reset } from "../features/npmpackages/npmpackageSlice";
import PackageItemTable from "../containers/PackageItemTable";
import Spinner from "../components/Spinner";
import CopyToClipboard from "../components/CopyToClipboard";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { npmpackages, isLoading, isError, message } = useSelector(
    (state) => state.npmpackages
  );
  const [isAdding, setIsAdding] = useState(false);

  const toggleAdding = (value) => {
    setIsAdding(value);
  };

  const addPackage = () => {
    setIsAdding(!isAdding);
  };
  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }
    if (isError) {
      console.log(message);
    }
    dispatch(getPackages());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return (
      <div className='flex justify-center'>
        <Spinner />
      </div>
    );
  }

  const userName =
    (user &&
      user?.username.charAt(0).toUpperCase() + user?.username.slice(1)) ||
    "";

  return (
    <div className='flex flex-col justify-center items-center text-slate-600 m-5 p-2'>
      {user && userName && (
        <div className='flex flex-col items-center space-y-8'>
          <h1 className='text-center text-3xl font-sansserif'>
            {userName}'s Packages Hub
          </h1>

          <section className='md:w-full flex justify-center m-auto'>
            {npmpackages.length > 0 || isAdding ? (
              <PackageItemTable
                npmpackages={npmpackages}
                isAdding={isAdding}
                toggleAdding={toggleAdding}
              />
            ) : (
              <h2 className='text-xl'>
                Start by adding your favorites packages
              </h2>
            )}
          </section>
          {!isAdding && (
            <button
              onClick={addPackage}
              className='rounded-full h-10 w-10 bg-orange-600 text-white text-2xl flex justify-center items-center'>
              +
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
