import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function LoadingButton({
  loading,
  text,
  type,
  styling,
  disabled,
  clickAction,
}) {
  return (
    <button
      type={type}
      className={styling}
      disabled={disabled}
      onClick={clickAction}
    >
      {loading ? <ClipLoader color="#000" size="26px" /> : text}
    </button>
  );
}
