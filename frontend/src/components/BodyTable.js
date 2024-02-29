import { useState } from "react";
import { useDispatch } from "react-redux";
import useFormData from "../hook/useFormData";
import {
  deletePackage,
  updatePackage,
} from "../features/npmpackages/npmpackageSlice";
import TableRow from "./TableRow";
import DataForm from "./DataForm";

const BodyTable = ({ datas }) => {
  const dispatch = useDispatch();

  const [formData, handleChange] = useFormData(datas);

  const [isEdit, setIsEdit] = useState(false);

  const editPackage = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = (_id) => {
    dispatch(deletePackage(_id));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePackage(formData));
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
          packageData={formData}
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
