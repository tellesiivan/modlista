import { GrFormDown } from "react-icons/gr";
import { BsInfo } from "react-icons/bs";
import CustomAvatar from "../../../../../helpers/CustomAvatar";
import { useDispatch } from "react-redux";
import {
  inProgressMod,
  uploadingMod,
} from "../../../../../../store/slices/modificationsSlice";
import ViewVehicleCard from "./ViewVehicleCard";
import { useRouter } from "next/router";
import useUploadMod from "../../../../../../Hooks/useUploadMod";

export default function DetailsAndSubmission({
  viewDetails,
  setViewDetails,
  vehicle,
  modType,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { error, uploadMod } = useUploadMod();

  console.log(vehicle.id);

  return (
    <div
      className={`sticky w-full px-1 py-1.5 rounded-md ${
        viewDetails ? "space-y-2" : "h-auto cursor-default"
      } bottom-2 bg-dark transition-all duration-700 z-40  overflow-hidden shadow-lg`}
    >
      <div
        className={`w-full ${
          viewDetails ? "h-24 mb-4" : "h-0 opacity-0  "
        }  transition-all text-xs rounded duration-300`}
      >
        {/* /b/${vehicle.id}?mod=${mod.mod} */}
        <ViewVehicleCard
          Make={vehicle.Make}
          Model={vehicle.Model}
          coverImage={vehicle.coverImage}
          Trim={vehicle.Trim}
          profileLink={`/b/${vehicle.id}?mod=${modType}`}
          Year={vehicle.Year}
        />
      </div>
      <div className="z-50 flex items-center justify-between w-full">
        <div className="z-50 flex space-x-1.5 max-h-8 ">
          <button
            className="flex items-center px-1 py-1 space-x-2 tracking-wide transition-colors duration-200 cursor-pointer text-dark fillBtn bg-main"
            onClick={() => uploadMod(vehicle.id, modType)}
          >
            <CustomAvatar
              size={{ height: "6", width: "6" }}
              src={vehicle.coverImage}
              customStyle="mr-2"
            />
            Add Modification
          </button>
        </div>
        <button
          className="z-50 flex items-center justify-center w-6 h-6 rounded-full cursor-pointer bg-main"
          onClick={() => setViewDetails(!viewDetails)}
        >
          {viewDetails ? <GrFormDown /> : <BsInfo />}
        </button>
      </div>
    </div>
  );
}
