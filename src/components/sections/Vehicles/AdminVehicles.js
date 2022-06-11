import React, { useState, useEffect } from "react";
import useVehicleData from "../../../Hooks/useVehicleData";
import AdminHeading from "../../helpers/AdminHeading";
import RadioGroupTemplate from "../../helpers/RadioGroupTemp";
import VinInput from "./VinInput";

const formTypes = ["VIN", "Make/Model"];

export default function AdminVehicles() {
  const [formType, setFormType] = useState("VIN");
  const [vinValue, setVinValue] = useState("");
  const { data, getDataByVin, error, setError, setData } = useVehicleData();

  useEffect(() => {
    if (data !== null) {
      setData(null);
    }
  }, [formType]);

  const getDataHandler = async (e) => {
    e.preventDefault();
    if (formType === "VIN") {
      await getDataByVin(vinValue);
    } else {
    }
    if (error) {
      console.log(error);
      return;
    }
    // clear fields
    setVinValue("");
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
        {data ? (
          formType === "VIN" ? (
            <div className="text-white">{data.make}</div>
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
          <div>MAKE/MOIDEL</div>
        )}
      </form>
    </>
  );
}
