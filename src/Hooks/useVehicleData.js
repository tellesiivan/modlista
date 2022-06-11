import React, { useState } from "react";
const vinValidator = require("vin-validator");

export default function useVehicleData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const getDataByVin = async (vinNum) => {
    const isValidVin = vinValidator.validate(vinNum); // simple VIN validation
    try {
      const res = await fetch(
        `https://auto.dev/api/vin/${vinNum}?apikey=ZrQEPSkKdGVsbGV6aXZhbjdAZ21haWwuY29t`
      );
      if (!isValidVin) {
        throw new Error("Invalid VIN number");
      } else if (!res.ok) {
        throw new Error("Something went wrong, try again!");
      }
      const data = await res.json();

      if (!data) {
        throw new Error("No information for this vehicle was found");
      }

      const formatData = {
        make: data.make.name,
        model: data.model.name,
        transmission: data.transmission.transmissionType,
        category:
          data.categories.primaryBodyType ?? data.categories.vehicleType,
        ...(data.years && { year: data.years[0].year }),
        ...(data.years[0].styles && { trims: data.years[0].styles }),
        // ...(data.years[0].styles.length = 1 && {
        //   trim: data.years[0].styles[0],
        // }),
      };
      setData(formatData);
    } catch (error) {
      setError(error.message);
    }
  };

  return { data, getDataByVin, error, setError, setData };
}
