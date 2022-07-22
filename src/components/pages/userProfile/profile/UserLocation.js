import { useState } from "react";
import { PencilAltIcon } from "@heroicons/react/outline";
import { doc, updateDoc } from "firebase/firestore";
import { auth, firestore } from "../../../../firebase/clientApp";
import { useSelector } from "react-redux";

function UserLocation({ user }) {
  const location = useSelector((store) => store.userUI.user?.location);
  const [zip, setZip] = useState(location ? location.zipcode : "");
  const [editing, setEditing] = useState(false);

  const onChange = ({ target: { value } }) => {
    if (value.length > 5) return;
    setZip(value);
  };

  const handleSubmit = async () => {
    if (zip.length !== 5) return;
    const userRef = doc(firestore, `users/${user}`);
    try {
      const req = await fetch(`https://api.zippopotam.us/us/${zip}`);
      if (!req.ok) throw new Error("Unable to find location.");
      const res = await req.json();
      // TODO: format

      const formatLoc = {
        city: res.places[0]["place name"],
        stateAbbr: res.places[0]["state abbreviation"],
        state: res.places[0].state,
        lat: res.places[0].latitude,
        long: res.places[0].longitude,
        zipcode: zip,
      };
      await updateDoc(userRef, {
        location: formatLoc,
      });
    } catch (error) {
      // TODO: add error message to ui
      console.log(error.message);
    }
    editing && setEditing(false);
  };

  return (
    <div className="my-4 rounded-md bg-alt">
      <div className="p-2 ">
        <h3 className="text-xs font-medium leading-6 text-white">Location</h3>
        <form className="my-2 ">
          {location && !editing ? (
            <div className="flex items-center justify-between w-full">
              <p className="text-xs font-semibold tracking-wide text-ag-green">
                {location.city},{location.stateAbbr}
              </p>
              <button
                className="flex items-center justify-center transition-transform duration-300 rounded-full w-9 h-9 bg-ag-hover text-ag-green hover:scale-110"
                onClick={() => setEditing(true)}
              >
                <PencilAltIcon className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 ">
              <input
                pattern="[0-9]{5}"
                onChange={onChange}
                className="flex-1 h-8 px-2 py-5 border-none rounded-md outline-none bg-main sm:flex sm:items-start sm:justify-between placeholder:text-xs text-md md:text-xs placeholder:text-textGray text-inputGray "
                type="number"
                value={zip}
                placeholder="Zip code..."
              />
              <button
                className="flex-1 px-2 py-3 text-xs font-medium tracking-wide rounded-md bg-ag-hover text-ag-green disabled:opacity-50 disabled:cursor-not-allowed"
                type="button"
                disabled={zip.length !== 5}
                onClick={handleSubmit}
              >
                Add
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default UserLocation;
