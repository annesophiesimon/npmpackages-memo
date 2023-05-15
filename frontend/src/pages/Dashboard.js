import PackagesForm from "../components/PackagesForm";
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom';
import { getPackages, reset } from '../features/npmpackages/npmpackageSlice';
import PackageItemTable from "../components/PackageItemTable";
import Spinner from "../components/Spinner";

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {user} = useSelector((state) => state.auth);
    const { npmpackages, isLoading, isError, message } = useSelector((state) => state.npmpackages);
    useEffect(() => {
      if(!user) {
        return navigate('/login');
      }
      if(isError) {
        console.log(message);
      }
      dispatch(getPackages());
      return () => {
        dispatch(reset());
      }
    }, [user, navigate, isError, message, dispatch])
  
    if(isLoading){
      return <Spinner />
    }

    const userName = user && user.username.charAt(0).toUpperCase() + user.username.slice(1);

    return (
      <div className=" h-screen w-screen flex flex-col justify-center items-center text-slate-600">
        { 
          user && userName &&
          <div className="w-full flex flex-col items-center space-y-8">
            <h1 className="text-center text-3xl font-serif font-bold">{userName}'s Dashboard</h1>
            <PackagesForm />
            <section className="w-full flex justify-center" >
              {npmpackages.length > 0 ? (<PackageItemTable npmpackages={npmpackages} />) : <h2 className="text-xl"> There's no packages yet</h2>}
            </section>
          </div>
        }
    </div>
  )
}

export default Dashboard;