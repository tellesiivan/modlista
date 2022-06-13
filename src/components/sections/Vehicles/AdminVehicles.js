import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useVehicleData from "../../../Hooks/useVehicleData";
import { addingVehicle } from "../../../store/slices/uiSlice";
import AdminHeading from "../../helpers/AdminHeading";
import RadioGroupTemplate from "../../helpers/RadioGroupTemp";
import TrimSelection from "./TrimSelectionVin";
import VehicleItem from "./VehicleItem";
import VinInput from "./VinInput";

const formTypes = ["VIN", "Make/Model"];

export default function AdminVehicles() {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.userUI.vehicles.adding);
  const [formType, setFormType] = useState("VIN");
  const [vinValue, setVinValue] = useState("");
  const [trim, setTrim] = useState(data ? data.trim[0].name : "");
  const { getDataByVin, error, setError } = useVehicleData();

  const getDataHandler = async (e) => {
    e.preventDefault();
    if (formType === "VIN") {
      await getDataByVin(vinValue, formType);
    } else if (error) {
      return;
    }
    // clear fields
    setVinValue("");
  };

  const addVehicle = async (e) => {
    e.preventDefault();

    const trimPick =
      data.trim.length > 1
        ? trim == ""
          ? data.trim[0].name
          : trim
        : data.trim[0].name;

    const format = { ...data, trim: trimPick };

    console.log(format);
  };

  return (
    <>
      <AdminHeading
        Heading="Vehicles"
        Desc="Add the vehicles you own here. Can be added with the vehicle's VIN number(recommended) or using the form."
      />
      <RadioGroupTemplate
        options={formTypes}
        label="Add vehicle by"
        setSelected={setFormType}
        selected={formType}
      />
      <form className="my-4">
        {data && data.formType === formType ? (
          formType === "VIN" ? (
            <div className="mt-6">
              <h2 className="font-bold text-white text-md">
                Nice! We Found Your Car.
              </h2>
              <p className="text-sm text-gray-500">Here are a few details...</p>
              {data.trim.length > 1 && (
                <TrimSelection
                  trims={data.trim}
                  setTrim={setTrim}
                  trim={trim}
                />
              )}
              <VehicleItem
                vehicle={
                  data.trim.length > 1
                    ? Object.fromEntries(
                        Object.entries(data).filter(
                          ([key]) =>
                            !key.includes("trim") && !key.includes("formType")
                        )
                      )
                    : Object.fromEntries(
                        Object.entries(data).filter(
                          ([key]) => !key.includes("formType")
                        )
                      )
                }
              />
            </div>
          ) : (
            <div>show data from MAKE/MODEL FORM</div>
          )
        ) : formType === "VIN" ? (
          <VinInput
            setVinValue={setVinValue}
            vinValue={vinValue}
            clickAction={getDataHandler}
            errorReset={setError}
          />
        ) : (
          <div>MAKE/MODEL</div>
        )}
        {data && data.formType === formType && (
          <div className="sticky grid grid-cols-2 gap-2 text-sm text-gray-200 border divide-x rounded-md bottom-2 bg-selected divide-inputMain border-inputMain">
            <button
              className="py-3 hover:opacity-80"
              onClick={() => dispatch(addingVehicle({ vehicle: null }))}
            >
              Delete
            </button>
            <button className="py-3 hover:opacity-80" onClick={addVehicle}>
              Add
            </button>
          </div>
        )}
      </form>
    </>
  );
}
