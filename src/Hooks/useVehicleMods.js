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
        setLoading(true);
        const modsArr = [];
        doc.forEach((doc) => {
          modsArr.push({ modId: doc.id, ...doc.data() });
        });
        setMods(modsArr);
        // console.log(modsArr);
        setLoading(false);
      }
    );
  };

  return { mods, vehicleSelectedMods, loading };
}
