import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useVehicleData from "../../../Hooks/useVehicleData";
import { addingVehicle } from "../../../store/slices/uiSlice";
import AdminHeading from "../../helpers/AdminHeading";
import RadioGroupTemplate from "../../helpers/RadioGroupTemp";
import TrimSelection from "./TrimSelectionVin";
import VehicleItem from "./VehicleItem";
import VinInput from "./VinInput";
import { writeBatch, doc, collection } from "firebase/firestore";
import { auth, firestore } from "../../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import VehicleCoverImage from "./VehicleCoverImage";
import useSelectFile from "../../../Hooks/useSelectFile";

const formTypes = ["VIN"];
// , "Make/Model"

export default function AdminVehicles() {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.userUI.vehicles.adding);
  const [formType, setFormType] = useState("VIN");
  const [vinValue, setVinValue] = useState("");
  const [trim, setTrim] = useState(data ? data.Trim[0].name : "");
  const { getDataByVin, error, setError } = useVehicleData();
  const { selectedFile, setSelectedFile, onSelectedFile } = useSelectFile();
  const [user] = useAuthState(auth);

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
      data.Trim.length > 1 ? (trim == "" ? data.Trim[0] : trim) : data.Trim[0];
    const format = { ...data, Trim: trimPick, Owner: user.uid };
    try {
      // Get a new write batch
      const batch = writeBatch(firestore);

      // vehicles db REF
      const vehicleRef = doc(collection(firestore, "vehicles"));
      batch.set(vehicleRef, format);
      // user db REF
      const userRef = doc(
        firestore,
        `users/${user.uid}/vehiclePreviews/${vehicleRef.id}`
      );
      batch.set(userRef, {
        Make: data.Make,
        Model: data.Model,
        Year: data.Year,
        Trim: data.Trim[0],
      });
      // Commit the batch
      await batch.commit();
    } catch (error) {
      console.log(error.message, "addVehicle");
    }
  };

  return (
    <>
      <AdminHeading
        Heading="Vehicles"
        Desc="Add the vehicles you own here. Add them with the vehicle's VIN number. More options coming soon."
      />
      <RadioGroupTemplate
        options={formTypes}
        label="Add vehicle with VIN number:"
        setSelected={setFormType}
        selected={formType}
      />
      <form className="mt-4">
        {data && data.formType === formType ? (
          formType === "VIN" ? (
            <div className={`mt-6 ${!selectedFile && "pb-2"}`}>
              <h2 className="font-bold text-white text-md">
                Nice! We Found Your Car.
              </h2>
              <p className="text-sm text-gray-500">Here are a few details...</p>
              {data.Trim.length > 1 && (
                <TrimSelection
                  trims={data.Trim}
                  setTrim={setTrim}
                  trim={trim}
                />
              )}
              <VehicleItem
                vehicle={
                  data.Trim.length > 1
                    ? Object.fromEntries(
                        Object.entries(data).filter(
                          ([key]) =>
                            !key.includes("Trim") && !key.includes("formType")
                        )
                      )
                    : Object.fromEntries(
                        Object.entries(data).filter(
                          ([key]) => !key.includes("formType")
                        )
                      )
                }
              />
              <VehicleCoverImage
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
                onSelectedFile={onSelectedFile}
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
        {data && data.formType === formType && selectedFile && (
          <div className="sticky grid grid-cols-2 gap-2 text-sm text-gray-200 border divide-x rounded-md bottom-3 bg-selected divide-inputMain border-inputMain">
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
