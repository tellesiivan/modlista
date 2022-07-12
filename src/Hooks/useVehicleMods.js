import { useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  querySnapshot,
  getDocs,
} from "firebase/firestore";

import { firestore } from "../firebase/clientApp";

export default function useVehicleMods() {
  const [mods, setMods] = useState(null);
  const [loading, setLoading] = useState(false);

  const vehicleSelectedMods = (vehicleID, type) => {
    onSnapshot(
      collection(firestore, `vehicles/${vehicleID}/${type}`),
      (doc) => {
        const getSubs = async () => {
          let previews = [];
          // get snippets || path to that specific collection
          const snippetDocs = await getDocs(
            collection(firestore, `vehicles/${vehicleID}/${type}`)
          );
          snippetDocs.docs.map((doc) => {
            previews.push({
              ...doc.data(),
              id: doc.id,
            });
          });
          console.log(previews);
        };
        const cities = [];
        doc.forEach((doc) => {
          cities.push(doc.data());
        });
        console.log("Current cities in CA: ", cities);
      }
    );
  };

  return { mods, vehicleSelectedMods, loading };
}
