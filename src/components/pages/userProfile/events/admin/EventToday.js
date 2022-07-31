import React from "react";

export default function EventToday() {
  return (
    <section className="relative flex items-center w-full p-2 mt-2 rounded-lg bg-alt">
      <div className="flex flex-col mr-6 overflow-hidden rounded-md w-14 h-14 bg-dark">
        <div className="w-full h-4 bg-ag-yellow" />
        <h4 className="flex items-center justify-center flex-1 w-full text-2xl font-medium text-white uppercase">
          {new Date().getDate()}
        </h4>
      </div>
      <div className="flex-1 space-y-0.5 text-xs ">
        <p className="font-semibold uppercase text-inputGray">
          {new Date().toLocaleDateString(navigator.language, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="text-white ">You&#39;ve no events today.</p>
      </div>
    </section>
  );
}
