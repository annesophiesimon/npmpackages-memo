import { useDispatch } from "react-redux";
import {
  deletePackage,
  updatePackage,
} from "../features/npmpackages/npmpackageSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

const PackageItem = ({ npmpackage }) => {
  const dispatch = useDispatch();
  const { _id, name, description, category, link } = npmpackage;

  const [isEdit, setIsEdit] = useState(false);

  const [nameEdit, setName] = useState(name);
  const [categoryEdit, setCategory] = useState(category);
  const [descriptionEdit, setDescription] = useState(description);
  const [linkEdit, setLink] = useState(link);

  const editPackage = () => {
    setIsEdit(!isEdit);
  };

  const onSubmit = (e, id) => {
    e.preventDefault();
    dispatch(
      updatePackage({
        _id: id,
        name: nameEdit,
        description: descriptionEdit,
        link: linkEdit,
        category: categoryEdit,
        userId: npmpackage.userId,
      })
    );
  };

  return (
    <div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <form
          method='POST'
          id='package_form'
          onSubmit={(e) => onSubmit(e, _id)}></form>

        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th
                scope='col'
                className='px-6 py-3 border-r-2	border-white'>
                Name
              </th>
              <th
                scope='col'
                className='px-6 py-3 border-r-2	border-white'>
                Description
              </th>
              <th
                scope='col'
                className='px-6 py-3 border-r-2	border-white'>
                Link
              </th>
              <th
                scope='col'
                className='px-6 py-3 border-r-2	border-white'>
                Category
              </th>
              <th
                scope='col'
                className='px-6 py-3 border-r-2	border-white'>
                Edit
              </th>
              <th
                scope='col'
                className='px-6 py-3'>
                {!isEdit ? "Delete" : "Submit"}
              </th>
            </tr>
          </thead>
          <tbody>
            {!isEdit ? (
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  <Link to={link}>{name}</Link>
                </td>
                <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  <div>{description}</div>
                </td>
                <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {link}
                </td>
                <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {category}
                </td>
                <td className='px-6 py-4 text-right'>
                  <button
                    onClick={() => editPackage()}
                    className='font-medium text-orange-600 dark:text-orange-500 hover:underline'>
                    Edit
                  </button>
                </td>
                <td className='px-6 py-4 text-right'>
                  <button
                    onClick={() => dispatch(deletePackage(_id))}
                    className='font-medium text-orange-600 dark:text-orange-500 hover:underline'>
                    Delete
                  </button>
                </td>
              </tr>
            ) : (
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  <input
                    className='border-2 border-gray-300 rounded p-1'
                    type='text'
                    value={nameEdit}
                    form='package_form'
                    onChange={(e) => setName(e.target.value)}
                  />
                </td>
                <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  <input
                    className='border-2 border-gray-300 rounded p-1'
                    type='text'
                    value={descriptionEdit}
                    form='package_form'
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </td>
                <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  <input
                    className='border-2 border-gray-300 rounded p-1'
                    type='text'
                    value={linkEdit}
                    form='package_form'
                    onChange={(e) => setLink(e.target.value)}
                  />
                </td>
                <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  <input
                    className='border-2 border-gray-300 rounded p-1'
                    type='text'
                    value={categoryEdit}
                    form='package_form'
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </td>
                <td className='px-6 py-4 text-right'>
                  <button
                    onClick={() => editPackage()}
                    className='font-medium text-orange-600 dark:text-orange-500 hover:underline'>
                    Edit
                  </button>
                </td>
                <td className='px-6 py-4 text-right'>
                  <button
                    className='font-medium text-orange-600 dark:text-orange-500 hover:underline'
                    type='submit'
                    form='package_form'>
                    Submit
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PackageItem;
