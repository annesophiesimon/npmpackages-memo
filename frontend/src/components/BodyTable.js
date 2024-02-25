import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deletePackage,
  updatePackage,
} from "../features/npmpackages/npmpackageSlice";

const BodyTable = ({ datas }) => {
  const dispatch = useDispatch();

  const { link, name, description, category, _id, userId } = datas;
  const [nameEdit, setName] = useState(name);
  const [categoryEdit, setCategory] = useState(category);
  const [descriptionEdit, setDescription] = useState(description);
  const [linkEdit, setLink] = useState(link);
  const [isEdit, setIsEdit] = useState(false);

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
        userId: userId,
      })
    );
  };
  return (
    <>
      <tbody>
        {!isEdit ? (
          <tr className='bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-600 text-center md:text-left'>
            <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white block md:table-cell'>
              <Link to={link}>{name}</Link>
            </td>
            <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white block md:table-cell'>
              <div>{description}</div>
            </td>
            <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white block md:table-cell'>
              {link}
            </td>
            <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white block md:table-cell'>
              {category}
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
              <input
                className='border-2 border-gray-300 rounded p-1 w-full'
                type='text'
                value={nameEdit}
                form='package_form'
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white block md:table-cell'>
              <input
                className='border-2 border-gray-300 rounded p-1 w-full'
                type='text'
                value={descriptionEdit}
                form='package_form'
                onChange={(e) => setDescription(e.target.value)}
              />
            </td>
            <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white block md:table-cell'>
              <input
                className='border-2 border-gray-300 rounded p-1 w-full'
                type='text'
                value={linkEdit}
                form='package_form'
                onChange={(e) => setLink(e.target.value)}
              />
            </td>
            <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white block md:table-cell'>
              <input
                className='border-2 border-gray-300 rounded p-1 w-full'
                type='text'
                value={categoryEdit ? categoryEdit : ""}
                form='package_form'
                onChange={(e) => setCategory(e.target.value)}
              />
            </td>
            <td className='px-6 py-4  block md:table-cell text-center md:text-left'>
              <button
                onClick={() => editPackage()}
                className='font-medium md:text-orange-600 md:bg-transparent hover:underline bg-orange-600 text-white p-2 rounded-md w-full'>
                Edit
              </button>
            </td>
            <td className='px-6 py-4 block md:table-cell text-center md:text-left'>
              <button
                onClick={(e) => onSubmit(e, _id)}
                className='font-medium md:text-orange-600 md:bg-transparent hover:underline bg-orange-600 text-white p-2 rounded-md w-full'
                type='submit'
                form='package_form'>
                Submit
              </button>
            </td>
          </tr>
        )}
      </tbody>
    </>
  );
};

export default BodyTable;
