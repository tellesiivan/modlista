import { ImLink } from "react-icons/im";
import heyRegex from "hey-regex";
import { useState } from "react";

export default function Url({ link, setLink, valid }) {
  const onChangeHandler = ({ target: { value } }) => {
    const isValidLink =
      value.trim().length > 0
        ? heyRegex.isUrl(value, "optionalProtocol")
        : false;

    !isValidLink
      ? setLink((prev) => ({ ...prev, url: { ...prev.url, isValid: false } }))
      : setLink((prev) => ({ ...prev, url: { ...prev.url, isValid: true } }));

    setLink((prev) => ({ ...prev, url: { ...prev.url, link: value } }));
  };

  return (
    <div className="flex items-center w-full px-2 rounded-md h-11 bg-lighterAlt">
      <ImLink className={`${valid ? "text-highlight" : "text-gray-400"}`} />
      <input
        placeholder="Link to help users buy this modification..."
        id="modName"
        value={link}
        onChange={onChangeHandler}
        type="text"
        className="w-full px-2 text-gray-300 border-0 rounded-md outline-none h-11 bg-main text-md md:text-xs placeholder:text-xs placeholder:text-gray-600"
      />
    </div>
  );
}
