import React from "react";

export default function NameInput({ setValues, values }) {
  const onChange = ({ target: { value, name } }) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <input
      className="w-full h-full text-gray-300 bg-transparent border-0 outline-none text-md md:text-sm placeholder:text-sm placeholder:text-gray-600"
      placeholder="Update your name here..."
      type="text"
      value={values.name}
      onChange={onChange}
      name="name"
    />
  );
}
