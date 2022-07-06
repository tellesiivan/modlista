import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth, firestore, storage } from "../firebase/clientApp";
import { writeBatch, doc, increment, collection } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { resetMod, uploadingMod } from "../store/slices/modificationsSlice";

export default function useUploadMod() {
  const dispatch = useDispatch();
  const mod = useSelector((state) => state.modifications.adding.details);
  const [user] = useAuthState(auth);
  const [error, setError] = useState("");

  const uploadMod = async (vehicleID, modType) => {
    const modRef = doc(collection(firestore, `vehicles`));

    // vehicle mod REF
    const vehicleModRef = doc(
      firestore,
      `vehicles/${vehicleID}/${modType}/${modRef.id}`
    );

    // User Ref (increase number of mods added by user)
    const userModsRef = doc(firestore, `users/${user.uid}`);

    // Vehicle Ref (increase number of mods + 1) : update
    const VehicleRef = doc(firestore, `vehicles/${vehicleID}`);

    // Vehiclepreview (user) Ref (increase number of mods + 1) : update
    const userPreviewsRef = doc(
      firestore,
      `users/${user.uid}/vehiclePreviews/${vehicleID}`
    );

    // storage reference
    const imageStorageRef = ref(
      storage,
      `vehicles/${vehicleID}/${modType}/${vehicleModRef.id}`
    );

    dispatch(uploadingMod({ isUploading: true }));
    try {
      // Get a new write batch
      const batch = writeBatch(firestore);
      //  add to strorage then get DOWNLOAD URL to update the post in DB
      await uploadString(imageStorageRef, mod.image, "data_url");
      const downloadedUrl = await getDownloadURL(imageStorageRef);

      // format data
      const modData = {
        primaryImage: downloadedUrl,
        tags: mod.tags,
        title: mod.title,
        desc: mod.desc,
        price: mod.price,
        link: mod.url.link,
        vehicleID,
        modType,
      };
      // add data to specific mod
      batch.set(vehicleModRef, modData);
      // increment + 1 mod (see how many mods a vehicle has)
      batch.update(VehicleRef, { Mods: increment(1) });
      // increment + 1 mod (vehicle preview)
      batch.update(userPreviewsRef, { Mods: increment(1) });
      // increment + 1 mod (amount of mods a user contributes)
      batch.update(userModsRef, { addedMods: increment(1) });

      // Commit the batch
      await batch.commit();
    } catch (error) {
      dispatch(uploadingMod({ isUploading: false }));
      console.log(error.message);
    }

    dispatch(resetMod()); // clear values
    alert("Uploaded successfully");
    dispatch(uploadingMod({ isUploading: false }));
  };

  return { error, uploadMod };
}
