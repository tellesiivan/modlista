import React, { useState } from "react";

const useSelectFile = () => {
  const [selectedFile, setSelectedFile] = useState("");

  const onSelectedFile = (e) => {
    const { files } = e.target;

    const reader = new FileReader();

    if (files?.[0]) {
      reader.readAsDataURL(files[0]);
    }

    reader.onload = (readerEvent) => {
      if (readerEvent.target?.result) {
        setSelectedFile(readerEvent.target.result);
        console.log(readerEvent.target.result);
      }
    };
  };

  return { selectedFile, setSelectedFile, onSelectedFile };
};
export default useSelectFile;
