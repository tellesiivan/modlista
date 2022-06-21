import React from "react";

export default function DescTextBox({ value, setValue }) {
  return (
    <div>
      <textarea
        className="w-full h-24 p-2 text-gray-300 rounded-md outline-none resize-none bg-main placeholder:text-xs placeholder:text-gray-600 md:text-xs"
        placeholder="Enter a short description or explanation about this modification... "
        onChange={({ target: { value } }) =>
          setValue((prev) => ({ ...prev, desc: value }))
        }
        value={value}
      />
    </div>
  );
}
