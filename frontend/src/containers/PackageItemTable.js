import HeadTable from "../components/HeadTable";
import BodyTable from "../components/BodyTable";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPackage } from "../features/npmpackages/npmpackageSlice";
import DataForm from "../components/DataForm";

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
    <table className='text-sm text-gray-50'>
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
          <DataForm
            packageData={packageData}
            onAction={onCancel}
            actionName='Cancel'
            onSubmit={onSubmit}
            onChange={onChange}
          />
        )}
      </tbody>
    </table>
  );
};

export default PackageItemTable;
