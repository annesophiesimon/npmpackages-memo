const HeadTable = () => {
  return (
    <thead className='text-xs text-left text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 hidden md:table-header-group'>
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
          className='px-6 py-3 border-r-2	border-white'></th>
        <th
          scope='col'
          className='px-6 py-3'></th>
      </tr>
    </thead>
  );
};

export default HeadTable;
