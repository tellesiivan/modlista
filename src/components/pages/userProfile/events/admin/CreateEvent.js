import React from "react";
import SingleDateRange from "../../../../helpers/calendars/SingleDateRange";

export default function CreateEvent() {
  return (
    <div className="w-full h-auto p-2 mt-2 space-y-4 rounded-md bg-alt">
      <h3 className="py-5 text-sm border-b text-inputGray border-darkAlt">
        Create Event
      </h3>
      <SingleDateRange />
    </div>
  );
}
