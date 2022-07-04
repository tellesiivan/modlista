import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleMainModal } from "../../../../../../../store/slices/modalsSlice";
import ImgContainer from "../../../../../../helpers/ImageContainers/ImgContainer";

export default function VehicleEdit({ vehicle }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const deleteVehicle = () => {
    dispatch(toggleMainModal({ open: false }));
  };

  return (
    <>
      <ImgContainer imgSrc={vehicle.coverImage} h={"56"} />
      <div className="px-3 py-4">
        <h2 className="-mb-1 text-sm font-bold tracking-tight">
          Quick Actions.
        </h2>

        <div className="w-full h-16 my-4 rounded bg-alt"></div>

        <div className="grid w-full grid-cols-2 gap-2 ">
          <button
            className="w-full bg-black text-main fillBtn"
            onClick={deleteVehicle}
          >
            Delete
          </button>

          <button
            className="w-full fillBtn bg-greyDark"
            onClick={() => {
              router.push(`/b/${vehicle.id}`);
            }}
          >
            View Profile
          </button>
        </div>
      </div>
    </>
  );
}
