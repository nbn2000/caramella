import React from "react";
import Select from "react-select";

const options = [
  { value: "09:00", label: "09:00" },
  { value: "09:30", label: "09:30" },
  { value: "10:00", label: "10:00" },
  { value: "10:30", label: "10:30" },
  { value: "11:00", label: "11:00" },
  { value: "11:30", label: "11:30" },
  { value: "12:00", label: "12:00" },
  { value: "12:30", label: "12:30" },
  { value: "13:00", label: "13:00" },
  { value: "13:30", label: "13:30" },
  { value: "14:00", label: "14:00" },
  { value: "14:30", label: "14:30" },
  { value: "15:00", label: "15:00" },
  { value: "15:30", label: "15:30" },
  { value: "16:00", label: "16:00" },
  { value: "16:30", label: "16:30" },
  { value: "17:00", label: "17:00" },
  { value: "17:30", label: "17:30" },
  { value: "18:00", label: "18:00" },
];

const SelectTime = ({
  selectedTime,
  setSelectedTime,
}: {
  selectedTime: any;
  setSelectedTime: any;
}) => {
  return (
    <div className="relative z-20 w-[40%] mb-5 group">
      <Select
        value={selectedTime}
        onChange={setSelectedTime}
        options={options}
        isSearchable={false}
        placeholder="Вақтни танланг"
      />
    </div>
  );
};

export default SelectTime;
