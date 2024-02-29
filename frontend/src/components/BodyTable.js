import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deletePackage,
  updatePackage,
} from "../features/npmpackages/npmpackageSlice";
import TableRow from "./TableRow";
import DataForm from "./DataForm";

const BodyTable = ({ datas }) => {
  const dispatch = useDispatch();

  const [packageData, setPackageData] = useState(datas);
  const handleChange = (e) => {
    setPackageData({ ...packageData, [e.target.name]: e.target.value });
  };

  const [isEdit, setIsEdit] = useState(false);

  const editPackage = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = (_id) => {
    dispatch(deletePackage(_id));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePackage(packageData));
  };
  return (
    <>
      {!isEdit ? (
        <TableRow
          TableRowDatas={datas}
          onEdit={editPackage}
          onDelete={handleDelete}
        />
      ) : (
        <DataForm
          packageData={packageData}
          onAction={editPackage}
          actionName='Edit'
          onSubmit={onSubmit}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default BodyTable;
