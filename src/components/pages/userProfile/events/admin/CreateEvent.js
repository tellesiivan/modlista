import React from "react";
import SingleDateRange from "../../../../helpers/calendars/SingleDateRange";
import ImageUpload from "../../../../helpers/ImageContainers/ImageUpload";
import InputWithLabel from "../../../../helpers/Inputs/InputWithLabel";
import AutoComplete from "../../../../helpers/map/AutoComplete";

export default function CreateEvent() {
  return (
    <div className="w-full h-auto p-2 mt-2 space-y-4 rounded-md bg-alt md:mb-3">
      <h3 className="py-5 text-sm font-medium tracking-wide text-white border-b border-darkAlt">
        Create Event
      </h3>
      <ImageUpload />

      <InputWithLabel
        title="Event Title"
        type="text"
        placeholder="Cars and Coffee, Long Beach, CA"
      />
      <div>
        <label
          htmlFor="email"
          className="block text-xs font-medium text-inputGray mb-1.5"
        >
          Location
        </label>
        <AutoComplete />
      </div>

      <SingleDateRange title="Date" />
    </div>
  );
}
