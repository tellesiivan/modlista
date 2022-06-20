import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useVehicleData from "../../../../Hooks/useVehicleData";
import { addingVehicle } from "../../../../store/slices/uiSlice";
import AdminHeading from "../../../helpers/AdminHeading";
import RadioGroupTemplate from "../../../helpers/RadioGroupTemp";
import TrimSelection from "./TrimSelectionVin";
import VehicleItem from "./VehicleItem";
import VinInput from "./VinInput";
import { writeBatch, doc, collection, increment } from "firebase/firestore";
import { auth, firestore, storage } from "../../../../firebase/clientApp";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";
import VehicleCoverImage from "./VehicleCoverImage";
import useSelectFile from "../../../../Hooks/useSelectFile";
import VehiclePreviewsTable from "./mods/VehiclePreviewsTable";
import Tab from "./Tab";

const formTypes = ["VIN"];
// , "Make/Model"

export default function AdminVehicles() {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  const [formType, setFormType] = useState("VIN");
  const [vinValue, setVinValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [trim, setTrim] = useState(data ? data.Trim[0].name : "");
  const { getDataByVin, error, setError } = useVehicleData();
  const { selectedFile, setSelectedFile, onSelectedFile } = useSelectFile();
  const [modifying, setModifying] = useState(false);
  const data = useSelector((store) => store.userUI.vehicles.adding);
  const vehiclePreviews = useSelector(
    (store) => store.userUI.vehicles.previews
  );
  const [selectedTab, setSelectedTab] = useState(
    vehiclePreviews.length > 0 ? "Garage" : "Add Vehicle"
  );

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

    // vehicles db REF
    const vehicleRef = doc(collection(firestore, "vehicles"));
    // user previews db REF
    const userPreviewsRef = doc(
      firestore,
      `users/${user.uid}/vehiclePreviews/${vehicleRef.id}`
    );
    // user db REF
    const userRef = doc(firestore, `users/${user.uid}`);
    // storage reference
    const imageStorageRef = ref(
      storage,
      `vehicles/${vehicleRef.id}/${user.uid}`
    );
    setLoading(true);
    try {
      // Get a new write batch
      const batch = writeBatch(firestore);
      //  add to strorage then get DOWNLOAD URL to update the post in DB
      await uploadString(imageStorageRef, selectedFile, "data_url");
      const downloadedUrl = await getDownloadURL(imageStorageRef);

      const format = {
        ...data,
        Trim: trimPick,
        Owner: user.uid,
        coverImage: downloadedUrl,
      };
      batch.set(vehicleRef, format);
      batch.set(userPreviewsRef, {
        Make: data.Make,
        Model: data.Model,
        Year: data.Year,
        Trim: data.Trim[0],
        coverImage: downloadedUrl,
      });
      batch.update(userRef, { vehiclesOwn: increment(1) });

      // Commit the batch
      await batch.commit();
    } catch (error) {
      setLoading(false);
      console.log(error.message, "addVehicle");
    }

    // reset values
    setLoading(false);
    setSelectedFile("");
    dispatch(addingVehicle({ vehicle: null }));
    setSelectedTab("Garage");
  };

  const showActionBTN = data && data.formType === formType;

  return (
    <>
      {vehiclePreviews.length !== 0 && vehiclePreviews.length < 2 && (
        <Tab setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
      )}
      {vehiclePreviews.length !== 0 && selectedTab === "Garage" && (
        <VehiclePreviewsTable vehicles={vehiclePreviews} />
      )}
      {vehiclePreviews.length === 0 ||
        (vehiclePreviews.length < 2 && selectedTab === "Add Vehicle" && (
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
            <form>
              {data && data.formType === formType ? (
                formType === "VIN" ? (
                  <div
                    className={`mt-4 ${
                      data && data.formType === formType ? "mb-6" : ""
                    }`}
                  >
                    <h2 className="font-bold text-white text-md">
                      Nice! We Found Your Car.
                    </h2>
                    <p className="text-sm text-gray-500">
                      Here are a few details...
                    </p>
                    <VehicleCoverImage
                      selectedFile={selectedFile}
                      setSelectedFile={setSelectedFile}
                      onSelectedFile={onSelectedFile}
                      data={data}
                      loading={loading}
                    />
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
                                  !key.includes("Trim") &&
                                  !key.includes("formType") &&
                                  !key.includes("coverImage")
                              )
                            )
                          : Object.fromEntries(
                              Object.entries(data).filter(
                                ([key]) =>
                                  !key.includes("formType") &&
                                  !key.includes("coverImage")
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
              {showActionBTN &&
                ((selectedFile || data?.coverImage) && !loading ? (
                  <div className="sticky grid grid-cols-2 gap-2 text-sm bg-white border divide-x rounded-md text-main bottom-3 divide-inputMain border-inputMain">
                    <button
                      className="py-3 hover:opacity-80"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedFile("");
                        dispatch(
                          addingVehicle({
                            vehicle: null,
                          })
                        );
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="py-3 hover:opacity-80"
                      onClick={addVehicle}
                    >
                      Add
                    </button>
                  </div>
                ) : (
                  <div className="sticky w-full text-sm bg-white border divide-x rounded-md text-main bottom-3 divide-inputMain border-inputMain">
                    {loading ? (
                      <button
                        className="w-full py-3 text-center hover:opacity-80"
                        type="button"
                      >
                        Loading...
                      </button>
                    ) : (
                      <button
                        className="w-full py-3 text-center hover:opacity-80"
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedFile("");
                          dispatch(
                            addingVehicle({
                              vehicle: null,
                            })
                          );
                        }}
                      >
                        New Search
                      </button>
                    )}
                  </div>
                ))}
            </form>
          </>
        ))}
    </>
  );
}
