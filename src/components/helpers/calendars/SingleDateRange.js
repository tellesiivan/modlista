import { DateRange } from "react-date-range";
import { useState } from "react";

export default function SingleDateRange({ title }) {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return title ? (
    <div>
      <label
        htmlFor="email"
        className="block mb-1 text-xs font-medium text-inputGray"
      >
        {title}
      </label>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        minDate={new Date()}
        className="w-full overflow-hidden rounded-md"
        rangeColors={["#4b4b4b"]}
      />
    </div>
  ) : (
    <DateRange
      editableDateInputs={true}
      onChange={(item) => setState([item.selection])}
      minDate={new Date()}
      moveRangeOnFirstSelection={false}
      ranges={state}
      className="w-full overflow-hidden rounded-md"
      rangeColors={["#4b4b4b"]}
    />
  );
}
