import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default ({ date, setDate }) => {
  return <DatePicker selected={date} onChange={setDate} />;
};
