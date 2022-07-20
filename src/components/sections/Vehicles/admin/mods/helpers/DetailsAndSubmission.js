import { GrFormDown } from "react-icons/gr";
import { BsInfo } from "react-icons/bs";
import CustomAvatar from "../../../../../helpers/CustomAvatar";
import { useDispatch, useSelector } from "react-redux";
import {
  inProgressMod,
  resetMod,
  uploadingMod,
} from "../../../../../../store/slices/modificationsSlice";
import ViewVehicleCard from "./ViewVehicleCard";
import { useRouter } from "next/router";
import useUploadMod from "../../../../../../Hooks/useUploadMod";
import { Loading } from "@nextui-org/react";

export default function DetailsAndSubmission({
  viewDetails,
  setViewDetails,
  vehicle,
  modType,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { error, uploadMod } = useUploadMod();
  const uploading = useSelector((store) => store.modifications.uploading);

  return (
    <div
      className={`sticky w-full px-1 py-1.5 rounded-md ${
        viewDetails ? "space-y-2" : "h-auto cursor-default"
      } bottom-2 bg-white transition-all duration-700 z-40  overflow-hidden shadow-lg`}
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
          {uploading ? (
            <Loading
              type="points-opacity"
              size="sm"
              color="white"
              className="w-16 h-4"
            />
          ) : (
            <>
              <button
                className="flex items-center px-1 py-1 space-x-2 font-medium tracking-wide transition-colors duration-200 cursor-pointer text-dark fillBtn bg-ag-yellow"
                onClick={() => uploadMod(vehicle.id, modType)}
              >
                <CustomAvatar
                  size={{ height: "6", width: "6" }}
                  src={vehicle.coverImage}
                  customStyle="mr-2"
                />
                Add Modification
              </button>
              <button
                className="flex items-center justify-center w-20 px-1 py-1 space-x-2 tracking-wide text-white transition-colors duration-200 cursor-pointer bg-alt fillBtn"
                onClick={() => dispatch(resetMod())}
              >
                Clear
              </button>
            </>
          )}
        </div>
        <button
          className="z-50 flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full cursor-pointer"
          onClick={() => setViewDetails(!viewDetails)}
        >
          {viewDetails ? <GrFormDown /> : <BsInfo />}
        </button>
      </div>
    </div>
  );
}
