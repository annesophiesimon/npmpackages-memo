import HeadTable from "../components/HeadTable";
import BodyTable from "../components/BodyTable";
import useFormData from "../hook/useFormData";
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

  const [formData, handleChange, handleCancel] = useFormData(initialState);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createPackage({
        name: formData.name,
        description: formData.description,
        link: formData.link,
        category: formData.category,
        userId: user._id,
      })
    );
    toggleAdding(false);
  };

  const onCancel = () => {
    handleCancel();
    toggleAdding(false);
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
            packageData={formData}
            onAction={onCancel}
            actionName='Cancel'
            onSubmit={onSubmit}
            onChange={handleChange}
          />
        )}
      </tbody>
    </table>
  );
};

export default PackageItemTable;
