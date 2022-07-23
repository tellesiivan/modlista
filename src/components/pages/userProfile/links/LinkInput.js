import { useState } from "react";
import { ImLink } from "react-icons/im";
import { SocialLinks, TYPE_MOBILE } from "social-links";
const socialLinks = new SocialLinks();

export default function LinkInput({
  url,
  setLinks,
  type,
  defaultPlaceholder,
  links,
}) {
  const [valid, setValid] = useState(false);

  const onChangeHandler = ({ target: { value } }) => {
    if (value.length > 3) {
      setValid(false);
      if (
        socialLinks.isValid(type.toLowerCase(), value) &&
        type !== "Website"
      ) {
        setLinks((prev) => ({ ...prev, [type]: value }));
        console.log(value, type);
        setValid(true);
      } else if (type === "Website") {
        setLinks((prev) => ({ ...prev, [type]: value }));
        setValid(true);
        console.log(value, type);
      }
    }
  };

  return (
    <div className="space-y-1.5">
      <label htmlFor={type} className="text-sm text-textGray">
        {type}
      </label>
      <div className="flex items-center w-full px-2 rounded-md h-14 bg-alt">
        <ImLink className={`${valid ? "text-ag-green" : "text-gray-400"}`} />
        <input
          placeholder={defaultPlaceholder}
          id={type}
          value={links.type}
          onChange={onChangeHandler}
          type="text"
          className="w-full px-2 bg-transparent border-0 rounded-md outline-none text-inputGray h-11 text-md md:text-xs placeholder:text-xs placeholder:text-textGray"
        />
      </div>
    </div>
  );
}
