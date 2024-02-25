import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deletePackage,
  updatePackage,
} from "../features/npmpackages/npmpackageSlice";

const BodyTable = ({ datas }) => {
  const dispatch = useDispatch();

  const { link, name, description, category, _id } = datas;
  const [packageData, setPackageData] = useState(datas);
  const handleChange = (e) => {
    setPackageData({ ...packageData, [e.target.name]: e.target.value });
  };

  const [isEdit, setIsEdit] = useState(false);

  const editPackage = () => {
    setIsEdit(!isEdit);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePackage(packageData));
  };
  return (
    <>
      {!isEdit ? (
        <tr className='bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-600'>
          <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white block md:table-cell'>
            <div className='flex flex-col gap-2'>
              <span className='md:hidden'>Name: </span>
              <Link to={link}>{name}</Link>
            </div>
          </td>
          <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white block md:table-cell'>
            <div className='flex flex-col gap-2'>
              <span className='md:hidden'>Description: </span>
              <div>{description}</div>
            </div>
          </td>
          <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white block md:table-cell'>
            <div className='flex flex-col gap-2'>
              <span className='md:hidden'>Link: </span>
              {link}
            </div>
          </td>
          <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white block md:table-cell'>
            <div className='flex flex-col gap-2'>
              <span className='md:hidden'>Category: </span>
              {category}
            </div>
          </td>
          <td className='px-6 py-4 block md:table-cell'>
            <button
              value={_id}
              onClick={() => editPackage()}
              className='font-medium md:text-orange-600 md:bg-transparent hover:underline bg-orange-600 text-white p-2 rounded-md w-full'>
              Edit
            </button>
          </td>
          <td className='px-6 py-4 block md:table-cell'>
            <button
              onClick={() => dispatch(deletePackage(_id))}
              className='font-medium md:text-orange-600 md:bg-transparent hover:underline bg-orange-600 text-white p-2 rounded-md w-full'>
              Delete
            </button>
          </td>
        </tr>
      ) : (
        <tr>
          <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white block md:table-cell'>
            <div className='flex flex-col gap-2'>
              <label className='md:hidden'>Name: </label>
              <input
                className='border-2 border-gray-300 rounded p-1'
                name='name'
                type='text'
                value={packageData.name}
                form='package_form'
                onChange={handleChange}
              />
            </div>
          </td>
          <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white block md:table-cell'>
            <div className='flex flex-col gap-2'>
              <label className='md:hidden'>Description: </label>
              <input
                className='border-2 border-gray-300 rounded p-1'
                type='text'
                name='description'
                value={packageData.description}
                form='package_form'
                onChange={handleChange}
              />
            </div>
          </td>
          <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white block md:table-cell'>
            <div className='flex flex-col gap-2'>
              <label className='md:hidden'>Link: </label>
              <input
                className='border-2 border-gray-300 rounded p-1'
                type='text'
                value={packageData.link}
                name='link'
                form='package_form'
                onChange={handleChange}
              />
            </div>
          </td>
          <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white block md:table-cell'>
            <div className='flex flex-col gap-2'>
              <label className='md:hidden'>Category: </label>
              <input
                className='border-2 border-gray-300 rounded p-1'
                type='text'
                name='category'
                value={packageData.category}
                form='package_form'
                onChange={handleChange}
              />
            </div>
          </td>
          <td className='px-6 py-4  block md:table-cell'>
            <button
              onClick={() => editPackage()}
              className='font-medium md:text-orange-600 md:bg-transparent hover:underline bg-orange-600 text-white p-2 rounded-md w-full'>
              Edit
            </button>
          </td>
          <td className='px-6 py-4 block md:table-cell'>
            <button
              onClick={(e) => onSubmit(e)}
              className='font-medium md:text-orange-600 md:bg-transparent hover:underline bg-orange-600 text-white p-2 rounded-md w-full'
              type='submit'
              form='package_form'>
              Submit
            </button>
          </td>
        </tr>
      )}
    </>
  );
};

export default BodyTable;
