import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSelectFile from "../../../Hooks/useSelectFile";
import { inProgressMod } from "../../../store/slices/modificationsSlice";
import CategoryInput from "./sharable/CategoryInput";
import DescTextBox from "./sharable/DescTextBox";
import ImageUpload from "./sharable/ImageUpload";
import ModNameInput from "./sharable/ModNameInput";
import ModRating from "./sharable/ModRating";
import Price from "./sharable/Price";
import Url from "./sharable/Url";

export default function InteriorMod() {
  const dispatch = useDispatch();
  const addingValues = useSelector(
    (store) => store.modifications.adding.details
  );
  const { selectedFile, setSelectedFile, onSelectedFile } = useSelectFile();
  const [values, setValues] = useState(addingValues);

  useEffect(() => {
    dispatch(inProgressMod({ mod: values }));
  }, [values]);

  return (
    <div className="space-y-2.5 -mt-2 w-full">
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
        setImage={setValues}
        onSelectedFile={onSelectedFile}
      />
      <div className="grid w-full grid-cols-2 border divide-x rounded-md border-greyDark divide-greyDark bg-main justify-items-stretch">
        <Price price={values.price} setPrice={setValues} />
        <div className="flex flex-col items-center p-2 ">
          <h3 className="mb-1 text-xs text-gray-400">Rating</h3>
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
    </div>
  );
}
