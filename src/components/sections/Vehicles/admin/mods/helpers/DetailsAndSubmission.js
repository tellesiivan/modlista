import { GrFormDown } from "react-icons/gr";
import { BsInfo } from "react-icons/bs";
import CustomAvatar from "../../../../../helpers/CustomAvatar";
import { useDispatch } from "react-redux";
import { inProgressMod } from "../../../../../../store/slices/modificationsSlice";
import ModVehicleHeaderImage from "./ModVehicleHeaderImage";
import { useRouter } from "next/router";

export default function DetailsAndSubmission({
  viewDetails,
  setViewDetails,
  vehicle,
  mod,
}) {
  const router = useRouter();

  return (
    <div
      className={`sticky w-full px-1 py-1.5 rounded-md ${
        viewDetails ? "space-y-2" : "h-auto cursor-default"
      } bottom-2 bg-highlight transition-all duration-700 z-40  overflow-hidden`}
    >
      <div
        className={`w-full ${
          viewDetails ? "h-52" : "h-0 opacity-0  "
        }  transition-all text-xs rounded duration-300`}
      >
        {/* /b/${vehicle.id}?mod=${mod.mod} */}
        <ModVehicleHeaderImage
          Make={vehicle.Make}
          Model={vehicle.Model}
          coverImage={vehicle.coverImage}
          Year={vehicle.Year}
        />

        <button
          className="flex items-center justify-center px-3 py-1.5 mt-2 bg-highlight rounded-lg cursor-pointer"
          onClick={() =>
            router.push({
              pathname: `/b/${vehicle.id}`,
              query: { mod: `${mod.mod}` },
            })
          }
        >
          View Modifications
        </button>
      </div>
      <div className="z-50 flex items-center justify-between w-full ">
        <div className="z-50 flex space-x-1.5 max-h-8 ">
          <button className="flex items-center px-1 py-1 space-x-2 tracking-wide text-white transition-colors duration-200 cursor-pointer fillBtn hover:bg-main">
            <CustomAvatar
              size={{ height: "6", width: "6" }}
              src={vehicle.coverImage}
              customStyle="mr-3"
            />
            Add Modification
          </button>
        </div>
        <button
          className="z-50 flex items-center justify-center w-6 h-6 bg-white rounded-full cursor-pointer"
          onClick={() => setViewDetails(!viewDetails)}
        >
          {viewDetails ? <GrFormDown /> : <BsInfo />}
        </button>
      </div>
    </div>
  );
}
