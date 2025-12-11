import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import type { DateValue } from "./types";


function CalendarPanel() {
  const [startDate, setStartDate] = useState<DateValue>(new Date());
  const [endDate, setEndDate] = useState<DateValue>(new Date());

  const handleChange = (dates: [DateValue, DateValue]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        startDate={startDate}
        endDate={endDate}
        inline
        selectsRange
      />
      <p>Start Date: {startDate?.toLocaleDateString() || "No Start Date Selected"}</p>
      <p>End Date: {endDate?.toLocaleDateString() || "No End Date Selected"}</p>
    </div>
  );
}

export default CalendarPanel;
