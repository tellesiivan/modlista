import Image from "next/image";
import { BiDotsVertical } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  toggleMainModal,
  setMainModalContent,
} from "../../../../../store/slices/modalsSlice";
import VehicleEdit from "./helpers/EditVehicle/VehicleEdit";

export default function VehiclePreviewitem({
  vehicle,
  modifying,
  setModifying,
}) {
  const dispatch = useDispatch();

  const triggerEditableModal = (e) => {
    e.stopPropagation();
    dispatch(
      setMainModalContent({
        content: (
          <>
            <VehicleEdit vehicle={vehicle} />
          </>
        ),
      })
    );
    dispatch(toggleMainModal({ open: true }));
  };

  return (
    <div key={vehicle.Trim.id || vehicle.Trim.name}>
      <div
        className={`relative transition-colors duration-700 flex items-center justify-between min-w-full p-2 overflow-hidden rounded-md cursor-pointer ${
          modifying.id === vehicle.id ? "bg-ag-green" : "bg-greyDark"
        }`}
        onClick={() => setModifying(vehicle)}
      >
        <div className="relative w-10 h-10 overflow-hidden rounded-full">
          <Image
            src={vehicle.coverImage}
            objectFit="cover"
            layout="fill"
            objectPosition="center"
            className="absolute "
            alt=""
          />
        </div>
        <div className="flex items-center space-x-2 ">
          <div className="text-right">
            <p className="text-xs text-textGray">{vehicle.Year}</p>
            <h2 className="text-sm font-semibold text-dark">{vehicle.Make}</h2>
            <p className="text-xs text-textGray">{vehicle.Model}</p>
          </div>
          <div
            className="flex items-center justify-center w-6 h-6 transition-colors duration-300 rounded-full bg-main hover:bg-opacity-80 "
            onClick={triggerEditableModal}
          >
            <BiDotsVertical />
          </div>
        </div>
      </div>
    </div>
  );
}
