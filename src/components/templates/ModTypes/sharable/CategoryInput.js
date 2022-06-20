import React from "react";

export default function CategoryInput({
  value,
  setValue,
  placeholder,
  id,
  label,
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-xs text-gray-600">
        {label}
      </label>
      <input
        className="w-full px-2 text-gray-300 border-0 rounded-md outline-none h-11 bg-main text-md md:text-xs placeholder:text-xs placeholder:text-gray-600"
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
        id={id}
      />
    </div>
  );
}
