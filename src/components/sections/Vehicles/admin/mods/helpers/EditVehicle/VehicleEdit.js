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
      <ImgContainer imgSrc={vehicle.coverImage} h={"44"} />
      <div className="p-2.5">
        <h2 className="-mb-1 text-xs font-bold  w-fit px-2 py-0.5 rounded-full bg-ag-green">
          Quick Actions.
        </h2>

        <div className="flex items-center w-full h-16 p-2 my-4 text-xs text-gray-500 rounded bg-alt">
          By deleting your vehicle, you will also be deleting all the
          modifications.
        </div>

        <div className="grid w-full grid-cols-2 gap-2 ">
          <button
            className="w-full text-black bg-greyDark fillBtn"
            onClick={deleteVehicle}
          >
            Delete
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
