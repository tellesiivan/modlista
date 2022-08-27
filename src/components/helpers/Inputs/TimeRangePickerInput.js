import React, { useState } from "react";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker/dist/entry.nostyle";
export default function TimeRangePickerInput() {
  const [value, onChange] = useState(["10:00", "11:00"]);

  return <TimeRangePicker onChange={onChange} value={value} disableClock />;
}
