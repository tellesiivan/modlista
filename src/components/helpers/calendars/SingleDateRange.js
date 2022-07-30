import { DateRange } from "react-date-range";
import { useState } from "react";

export default function SingleDateRange() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <DateRange
      editableDateInputs={true}
      onChange={(item) => setState([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={state}
      className="w-full overflow-hidden rounded-md"
      rangeColors={["#4d1980"]}
    />
  );
}
