import useAutofill from "../../../Hooks/useAutofill";
import InputWithLabel from "../Inputs/InputWithLabel";
import { useState } from "react";

export default function AddressSearch() {
  const { onChange, setValue, value, suggestions, setSuggestions } =
    useAutofill();

  return (
    <div className="relative">
      <InputWithLabel
        title="Location"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Long Beach, CA"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-40 w-full h-48 mt-1 overflow-y-scroll border divide-y rounded-md -bottom-18 bg-darkAlt divide-alt border-main">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              className="px-2 py-4 text-xs cursor-pointer text-inputGray hover:bg-alt/50"
              onClick={() => {
                setValue(suggestion.place_name);
                setSuggestions([]);
              }}
            >
              {suggestion.place_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
