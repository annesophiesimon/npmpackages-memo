import React from "react";
import Input from "./Input";

const EditForm = ({
  packageData,
  onAction,
  onSubmit,
  onChange,
  actionName,
}) => {
  const handleSubmit = (e) => {
    onSubmit(e);
  };
  return (
    <tr>
      <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white block md:table-cell'>
        <div className='flex flex-col gap-2'>
          <label className='md:hidden'>Name: </label>
          <Input
            name='name'
            type='text'
            value={packageData.name}
            onChange={onChange}
          />
        </div>
      </td>
      <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white block md:table-cell'>
        <div className='flex flex-col gap-2'>
          <label className='md:hidden'>Description: </label>
          <Input
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
          <Input
            type='text'
            value={packageData.link}
            name='link'
            onChange={onChange}
          />
        </div>
      </td>
      <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white block md:table-cell'>
        <div className='flex flex-col gap-2'>
          <label className='md:hidden'>Category: </label>
          <Input
            type='text'
            name='category'
            value={packageData.category}
            onChange={onChange}
          />
        </div>
      </td>
      <td className='px-6 py-4  block md:table-cell'>
        <button
          onClick={onAction}
          className='font-medium md:text-orange-600 md:bg-transparent hover:underline bg-orange-600 text-white p-2 rounded-md w-full'>
          {actionName}
        </button>
      </td>
      <td className='px-6 py-4 block md:table-cell'>
        <button
          onClick={handleSubmit}
          className='font-medium md:text-orange-600 md:bg-transparent hover:underline bg-orange-600 text-white p-2 rounded-md w-full'
          type='submit'
          form='package_form'>
          Submit
        </button>
      </td>
    </tr>
  );
};

export default EditForm;
