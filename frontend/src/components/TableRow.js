import React from "react";
import { Link } from "react-router-dom";

const TableRow = ({ TableRowDatas, onEdit, onDelete }) => {
  const { link, name, description, category, _id } = TableRowDatas;

  const handleDleteClick = () => {
    onDelete(_id);
  };

  return (
    <tr className='bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-600'>
      <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white block md:table-cell'>
        <div className='flex flex-col gap-2'>
          <span className='md:hidden'>Name: </span>
          <Link
            target='_blank'
            to={link}>
            {name}
          </Link>
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
          onClick={onEdit}
          className='font-medium md:text-orange-600 md:bg-transparent hover:underline bg-orange-600 text-white p-2 rounded-md w-full'>
          Edit
        </button>
      </td>
      <td className='px-6 py-4 block md:table-cell'>
        <button
          onClick={handleDleteClick}
          className='font-medium md:text-orange-600 md:bg-transparent hover:underline bg-orange-600 text-white p-2 rounded-md w-full'>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
