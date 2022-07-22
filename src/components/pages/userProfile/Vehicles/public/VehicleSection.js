import React, { useEffect, useState } from "react";
import ModTabs from "./ModTabs";
import VehicleCard from "./VehicleCard";
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  querySnapshot,
  getDocs,
} from "firebase/firestore";
import { firestore } from "../../../../../firebase/clientApp";

export default function VehicleSection({ vehicles, userId }) {
  const [activeVehicle, setActiveVehicle] = useState(vehicles[0]);

  useEffect(() => {
    const q = query(
      collection(firestore, "vehicles"),
      where("Owner", "==", userId)
    );
    onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push(doc.data().Model);
      });
      console.log("Current cities in CA: ", cities.join(", "));
    });
    setActiveVehicle(vehicles[0]);
  }, [userId, vehicles]);

  // get data based on vehicle selected and pass on the data to the tabs that will fitered into each tab

  return (
    <div>
      <div className={`flex space-x-2 px-2 md:px-5`}>
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.Trim.id || vehicle.Trim.name}
            vehicle={vehicle}
            setActiveVehicle={setActiveVehicle}
            activeVehicle={activeVehicle}
          />
        ))}
      </div>
      <ModTabs vehicle={activeVehicle} />
    </div>
  );
}
