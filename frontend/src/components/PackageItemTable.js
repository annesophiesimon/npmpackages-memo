import HeadTable from "./HeadTable";
import BodyTable from "./BodyTable";

const PackageItemTable = ({ npmpackages }) => {
  return (
    <div className='md:w-full w-80 shadow-md md:mx-20'>
      <table className='w-full text-sm text-gray-500'>
        <HeadTable />
        {npmpackages.length &&
          npmpackages.map((npmpackage) => {
            return (
              <BodyTable
                key={npmpackage._id}
                datas={npmpackage}
              />
            );
          })}
      </table>
    </div>
  );
};

export default PackageItemTable;
