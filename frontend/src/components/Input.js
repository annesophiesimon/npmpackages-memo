import React from "react";

const Input = ({ type, name, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className='border-2 border-gray-300 rounded p-1'
    />
  );
};

export default Input;
