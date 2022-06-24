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

export default function ExteriorMod() {
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
        placeholder="Carbon Fiber Diffuser..."
        value={values.title}
        setValue={setValues}
      />
      <DescTextBox value={values.desc} setValue={setValues} />
      <CategoryInput
        placeholder="Rear Lip Spoiler, Front Lip..."
        label="Category Tags"
        id="category"
        setTags={setValues}
        tags={values.tags}
      />
      <ImageUpload
        setImage={setValues}
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
    </div>
  );
}
