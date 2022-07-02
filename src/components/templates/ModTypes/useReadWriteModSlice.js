import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inProgressMod } from "../../../store/slices/modificationsSlice";

export default function useReadWriteModSlice() {
  const dispatch = useDispatch();
  const mod = useSelector((store) => store.modifications.adding.details);

  const writeToModSlice = (key, value) => {
    dispatch(inProgressMod({ mod: { ...mod, [key]: value } }));
  };

  return { writeToModSlice, mod };
}
