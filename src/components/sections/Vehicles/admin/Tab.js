import React from "react";

const tabOptions = [{ opt: "Garage" }, { opt: "Add Vehicle" }];

export default function Tab({ selectedTab, setSelectedTab }) {
  return (
    <div className="grid grid-cols-2 p-1 mt-4 rounded-md place-items-center bg-inputMain">
      {tabOptions.map((option, index) => (
        <p
          key={index}
          className={`${
            selectedTab === option.opt
              ? "text-gray-200 bg-main "
              : "text-gray-400 border-inputMain"
          }  py-2 w-full text-center cursor-pointer text-sm duration-200 transition-colors rounded-md`}
          onClick={() => setSelectedTab(option.opt)}
        >
          {option.opt}
        </p>
      ))}
    </div>
  );
}
