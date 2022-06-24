import React, { useState } from "react";
import CheckSpecialChars from "../../../../utils/CheckSpecialChars";
import { HiX } from "react-icons/hi";
export default function CategoryInput({
  tags,
  setTags,
  placeholder,
  id,
  label,
}) {
  const [tag, setTag] = useState("");

  const addTag = (e) => {
    if (tags.includes(tag) || CheckSpecialChars(tag)) return;
    setTags((prev) => ({ ...prev, tags: [tag, ...prev.tags] }));
    setTag("");
  };

  const removeTag = (tag) => {
    setTags((prev) => ({ ...prev, tags: prev.tags.filter((t) => t !== tag) }));
  };

  return (
    <>
      <label htmlFor={id} className="text-xs text-gray-600">
        {label}
      </label>
      <div className="flex flex-row px-2 mt-1 rounded-md h-11 bg-main">
        <input
          className="w-full h-full text-gray-300 bg-transparent border-0 outline-none text-md md:text-xs placeholder:text-xs placeholder:text-gray-600"
          placeholder={placeholder}
          type="text"
          value={tag}
          onChange={({ target: { value } }) => setTag(value)}
          id={id}
        />
        <button
          className="px-3 my-3 text-xs text-gray-300 transition-opacity duration-300 rounded-full bg-inputMain disabled:opacity-0"
          disabled={tag.trim().length < 3}
          onClick={addTag}
        >
          Add
        </button>
      </div>
      {tags.length > 0 && (
        <div className="pt-2  flex overflow-x-scroll space-x-1.5 ">
          {tags.map((t) => (
            <div
              className="px-1.5 py-1 text-xs text-gray-300 rounded-full bg-inputMain flex items-center whitespace-nowrap"
              key={t}
            >
              {t}
              <span
                className="flex items-center justify-center w-5 h-5 ml-2 rounded-full cursor-pointer bg-alt hover:opacity-60 "
                onClick={() => removeTag(t)}
              >
                <HiX />
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
