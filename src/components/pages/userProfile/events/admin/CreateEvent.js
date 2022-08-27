import React from "react";
import useSelectFile from "../../../../../Hooks/useSelectFile";
import SingleDateRange from "../../../../helpers/calendars/SingleDateRange";
import ImageUpload from "../../../../helpers/ImageContainers/ImageUpload";
import InputWithLabel from "../../../../helpers/Inputs/InputWithLabel";
import TimeRangePickerInput from "../../../../helpers/Inputs/TimeRangePickerInput";
import AddressSearch from "../../../../helpers/map/AddressSearch";

export default function CreateEvent() {
  const { selectedFile, setSelectedFile, onSelectedFile } = useSelectFile();

  return (
    <div className="w-full h-auto p-2 mt-2 space-y-4 rounded-md bg-alt md:mb-3">
      <h3 className="py-5 text-sm font-medium tracking-wide text-white border-b border-darkAlt">
        Create Event
      </h3>
      <ImageUpload
        onSelectedFile={onSelectedFile}
        selectedFile={selectedFile}
      />
      <InputWithLabel
        title="Event Title"
        type="text"
        placeholder="Cars and Coffee, Long Beach, CA"
      />
      <AddressSearch />
      <SingleDateRange title="Date" />
      <TimeRangePickerInput />
    </div>
  );
}
