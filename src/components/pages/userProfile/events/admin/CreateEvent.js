import React from "react";
import SingleDateRange from "../../../../helpers/calendars/SingleDateRange";
import ImageUpload from "../../../../helpers/ImageContainers/ImageUpload";
import InputWithLabel from "../../../../helpers/Inputs/InputWithLabel";

export default function CreateEvent() {
  return (
    <div className="w-full h-auto p-2 mt-2 mb-5 space-y-4 rounded-md bg-alt md:mb-3">
      <h3 className="py-5 text-sm border-b text-inputGray border-darkAlt">
        Create Event
      </h3>
      <ImageUpload />
      <InputWithLabel
        title="Event Title"
        type="text"
        placeholder="Cars and Coffee, Long Beach, CA"
      />

      <SingleDateRange title="Date" />
    </div>
  );
}
