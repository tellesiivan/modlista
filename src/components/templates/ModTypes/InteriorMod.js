import React, { useState } from "react";
import useSelectFile from "../../../Hooks/useSelectFile";
import CategoryInput from "./sharable/CategoryInput";
import DescTextBox from "./sharable/DescTextBox";
import ImageUpload from "./sharable/ImageUpload";

export default function InteriorMod() {
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");

  const { selectedFile, setSelectedFile, onSelectedFile } = useSelectFile();

  return (
    <div className="space-y-2.5 -mt-2">
      <ImageUpload
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        onSelectedFile={onSelectedFile}
      />
      <CategoryInput
        placeholder="Door Component, Steering wheel..."
        label="Category"
        id="category"
        setValue={setCategory}
        value={category}
      />
      <DescTextBox value={desc} setValue={setDesc} />
    </div>
  );
}
