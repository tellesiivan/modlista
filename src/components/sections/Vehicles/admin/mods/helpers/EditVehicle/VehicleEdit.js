import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleMainModal } from "../../../../../../../store/slices/modalsSlice";
import ImgContainer from "../../../../../../helpers/ImageContainers/ImgContainer";
import { ref, deleteObject } from "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";
import { writeBatch, doc, collection, increment } from "firebase/firestore";
import {
  auth,
  firestore,
  storage,
} from "../../../../../../../firebase/clientApp";

export default function VehicleEdit({ vehicle }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [user] = useAuthState(auth);

  const deleteVehicle = async () => {
    // user previews db REF
    const decrementUserModsRef = doc(
      firestore,
      `users/${user.uid}/vehiclePreviews/${vehicle.id}`
    );
    // user previews db REF
    const userPreviewsRef = doc(
      firestore,
      `users/${user.uid}/vehiclePreviews/${vehicle.id}`
    );
    // storage reference
    const vehicleCoverImgRef = ref(
      storage,
      `vehicles/${vehicle.id}/${user.uid}`
    );
    // vehicle ref
    const vehicleRef = doc(firestore, `vehicles/${vehicle.id}`);
    // user ref
    const userRef = doc(firestore, `users/${user.uid}`);
    try {
      // Get a new write batch
      const batch = writeBatch(firestore);
      // delete images related to vehicle, (use image paths)
      await deleteObject(vehicleCoverImgRef);
      //  delete vehicle
      batch.delete(vehicleRef);
      // decrease mods count (addedMods) from user by the number of mods in the vehicle
      if (vehicle.Mods) {
        batch.update(userRef, { addedMods: increment(-vehicle.Mods) });
      }
      // decrease -1 from vehicle's own (USER)
      batch.update(userRef, { vehiclesOwn: increment(-1) });
      // delete vehicle preview (user)
      batch.delete(userPreviewsRef);
      batch.commit();
    } catch (error) {
      console.log(error.message);
    }
    alert("Vehicle deleted successfully");
    dispatch(toggleMainModal({ open: false }));
  };

  return (
    <>
      <ImgContainer imgSrc={vehicle.coverImage} h={"44"} />
      <div className="p-2.5">
        <h2 className="-mb-1 text-xs font-bold  w-fit px-2 py-0.5 rounded-full bg-ag-green bg-opacity-60 text-dark">
          Quick Actions.
        </h2>

        <div className="flex items-center w-full h-12 p-2 my-6 text-xs text-gray-500 rounded bg-alt">
          Looking to delete this vehicle? Visit the vehicle&#39;s profile page.
        </div>

        <div className="grid w-full grid-cols-2 gap-2 ">
          <button
            className="w-full text-black bg-greyDark fillBtn"
            // onClick={deleteVehicle}
          >
            Share
          </button>

          <button
            className="w-full fillBtn text-main"
            onClick={() => {
              router.push(`/b/${vehicle.id}`);
              dispatch(toggleMainModal({ open: false }));
            }}
          >
            View Profile
          </button>
        </div>
      </div>
    </>
  );
}
