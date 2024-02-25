import HeadTable from "../components/HeadTable";
import BodyTable from "../components/BodyTable";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPackage } from "../features/npmpackages/npmpackageSlice";

const PackageItemTable = ({ npmpackages, isAdding, toggleAdding }) => {
  const initialState = {
    name: "",
    link: "",
    category: "",
    description: "",
  };
  const [packageData, setPackageData] = useState(initialState);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createPackage({
        name: packageData.name,
        description: packageData.description,
        link: packageData.link,
        category: packageData.category,
        userId: user._id,
      })
    );
    toggleAdding(false);
  };

  const onCancel = () => {
    setPackageData(initialState);
    toggleAdding(false);
  };
  const onChange = (e) => {
    setPackageData({ ...packageData, [e.target.name]: e.target.value });
  };
  return (
    <div className='md:w-full w-80 shadow-md md:mx-20'>
      <table className='w-full text-sm text-gray-500'>
        <HeadTable />
        <tbody>
          {npmpackages.length &&
            npmpackages.map((npmpackage) => {
              return (
                <BodyTable
                  key={npmpackage._id}
                  datas={npmpackage}
                />
              );
            })}
          {isAdding && (
            <tr>
              <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white block md:table-cell'>
                <div className='flex flex-col gap-2'>
                  <label className='md:hidden'>Name: </label>
                  <input
                    className='border-2 border-gray-300 rounded p-1 w-full'
                    type='text'
                    name='name'
                    value={packageData.name}
                    onChange={onChange}
                  />
                </div>
              </td>
              <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white block md:table-cell'>
                <div className='flex flex-col gap-2'>
                  <label className='md:hidden'>Description: </label>
                  <input
                    className='border-2 border-gray-300 rounded p-1 w-full'
                    type='text'
                    name='description'
                    value={packageData.description}
                    onChange={onChange}
                  />
                </div>
              </td>
              <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white block md:table-cell'>
                <div className='flex flex-col gap-2'>
                  <label className='md:hidden'>Link: </label>
                  <input
                    className='border-2 border-gray-300 rounded p-1 w-full'
                    type='text'
                    name='link'
                    value={packageData.link}
                    onChange={onChange}
                  />
                </div>
              </td>
              <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white block md:table-cell'>
                <div className='flex flex-col gap-2'>
                  <label className='md:hidden'>Category: </label>
                  <input
                    className='border-2 border-gray-300 rounded p-1 w-full'
                    type='text'
                    name='category'
                    value={packageData.category}
                    onChange={onChange}
                  />
                </div>
              </td>
              <td className='px-6 py-4  block md:table-cell text-center md:text-left'>
                <button
                  className='font-medium md:text-orange-600 md:bg-transparent hover:underline bg-orange-600 text-white p-2 rounded-md w-full'
                  onClick={onCancel}>
                  Cancel
                </button>
              </td>
              <td className='px-6 py-4 block md:table-cell text-center md:text-left'>
                <button
                  onClick={onSubmit}
                  className='font-medium md:text-orange-600 md:bg-transparent hover:underline bg-orange-600 text-white p-2 rounded-md w-full'
                  type='submit'>
                  Submit
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PackageItemTable;
