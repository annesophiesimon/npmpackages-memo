import { useState } from "react";

const useFormData = (initialData) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setFormData(initialData);
  };

  return [formData, handleChange, handleCancel];
};

export default useFormData;
