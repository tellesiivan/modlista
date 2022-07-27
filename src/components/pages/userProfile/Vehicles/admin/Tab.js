import React from "react";

const tabOptions = [{ opt: "Garage" }, { opt: "Add Vehicle" }];

export default function Tab({ selectedTab, setSelectedTab }) {
  return (
    <div className="grid grid-cols-2 p-1 my-2 rounded-md place-items-center bg-alt">
      {tabOptions.map((option, index) => (
        <p
          key={index}
          className={`${
            selectedTab === option.opt
              ? "text-white bg-dark "
              : "text-inputGray "
          }  py-2 w-full text-center cursor-pointer text-xs duration-200 transition-colors rounded-md`}
          onClick={() => setSelectedTab(option.opt)}
        >
          {option.opt}
        </p>
      ))}
    </div>
  );
}
