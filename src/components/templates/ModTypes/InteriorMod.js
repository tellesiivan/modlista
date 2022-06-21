import React, { useState } from "react";
import useSelectFile from "../../../Hooks/useSelectFile";
import CategoryInput from "./sharable/CategoryInput";
import DescTextBox from "./sharable/DescTextBox";
import ImageUpload from "./sharable/ImageUpload";
import ModNameInput from "./sharable/ModNameInput";
import ModRating from "./sharable/ModRating";
import Price from "./sharable/Price";
import Url from "./sharable/Url";

export default function InteriorMod() {
  const [values, setValues] = useState({
    tags: [],
    desc: "",
    title: "",
    ratingValue: 0,
    price: "",
    url: {
      link: "",
      isValid: false,
    },
    link: "",
  });
  const { selectedFile, setSelectedFile, onSelectedFile } = useSelectFile();

  return (
    <form className="space-y-2.5 -mt-2 w-full">
      <ModNameInput
        placeholder="Carbon Fiber Center Console Trim..."
        value={values.title}
        setValue={setValues}
      />
      <DescTextBox value={values.desc} setValue={setValues} />
      <CategoryInput
        placeholder="Door Component, Steering wheel..."
        label="Category Tags"
        id="category"
        setTags={setValues}
        tags={values.tags}
      />
      <ImageUpload
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        onSelectedFile={onSelectedFile}
      />
      <div className="grid w-full grid-cols-2 border border-gray-800 divide-x divide-gray-800 rounded-md bg-lighterAlt justify-items-stretch">
        <Price price={values.price} setPrice={setValues} />
        <div className="flex flex-col items-center p-2 ">
          <h3 className="mb-1 text-xs text-gray-500">Rating</h3>
          <ModRating
            setRatingValue={setValues}
            ratingValue={values.ratingValue}
          />
        </div>
      </div>
      <Url
        setLink={setValues}
        link={values.url.link}
        valid={values.url.isValid}
      />
    </form>
  );
}
