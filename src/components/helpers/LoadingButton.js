import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function LoadingButton({
  loading,
  text,
  type,
  styling,
  disabled,
}) {
  return (
    <button type={type} className={styling} disabled={disabled}>
      {loading ? <ClipLoader color="#fff" size="26" /> : text}
    </button>
  );
}
