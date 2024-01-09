"use client";
import { useState, useEffect, useRef } from "react";
import { PatternFormat } from "react-number-format";
import { Calendar } from "react-date-range";
import { uzCyrl } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Select from "react-select";
import Link from "next/link";

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

const dateOption: object = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};

const Form = () => {
  const [selectedOption, setSelectedOption] = useState<any>();
  const isMounted = useRef(false);
  const [onFocus, setOnFocus] = useState<boolean>(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const [date, setDate] = useState(
    String(new Date().toLocaleDateString("en-GB", dateOption))
  );
  const [openCloseDate, setOpenCloseDate] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  const handleSelectDate = (date: any) => {
    const dateLocale = String(
      new Date(date).toLocaleDateString("en-GB", dateOption)
    );
    if (isMounted.current) {
      setDate(dateLocale);
      setOpenCloseDate(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative z-0 w-full mb-5 group">
        {onFocus ? (
          <PatternFormat
            name="tel"
            format="+998 ## ### ####"
            allowEmptyFormatting
            mask="_"
            autoComplete="off"
            className="block py-2.5 px-0 w-full border-solid text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#f2360a] focus:outline-none focus:ring-0 focus:border-[#f2360a] peer"
            id="tel"
            onBlur={() => setOnFocus(false)}
          />
        ) : (
          <input
            type="text"
            name="tel"
            id="tel"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-solid border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#f2360a] focus:outline-none focus:ring-0 focus:border-[#f2360a] peer"
            placeholder=" "
            onFocus={() => setOnFocus(true)}
          />
        )}

        <label
          htmlFor="tel"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#f2360a] peer-focus:dark:text-[#f2360a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Your phone number
        </label>
      </div>
      <div className="flex flex-row w-full justify-between items-center">
        <div className="relative  w-[50%] mb-5 group">
          {openCloseDate && (
            <div className="absolute bottom-0 z-30">
              <Calendar
                date={new Date()}
                onChange={(e: any) => handleSelectDate(e)}
                locale={uzCyrl}
                color="#f2360a"
                editableDateInputs={true}
              />
            </div>
          )}
          <input
            type="text"
            name="date"
            id="date"
            value={date}
            readOnly
            onClick={() => setOpenCloseDate(true)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-solid border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#f2360a] focus:outline-none focus:ring-0 focus:border-[#f2360a] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="date"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#f2360a] peer-focus:dark:text-[#f2360a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Choose Date
          </label>
        </div>

        <div className="relative z-20 w-[40%] mb-5 group">
          <Select
            value={selectedOption}
            onChange={setSelectedOption}
            options={options}
            isSearchable={false}
            placeholder="Вақтни танланг"
          />
        </div>
      </div>

      <div className="relative max-h-max z-0 w-full mb-5 group">
        <textarea
          name="desctiption"
          id="desctiption"
          className="resize-none focus:h-[7rem]  block py-2.5 px-0 w-full border-solid text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#f2360a] focus:outline-none focus:ring-0 focus:border-[#f2360a] peer"
          placeholder=" "
          cols={10}
          rows={1}
          required
        />
        <label
          htmlFor="desctiption"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#f2360a] peer-focus:dark:text-[#f2360a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Little bit about yourself
        </label>
      </div>
      <div className="flex flex-row justify-between gap-2 sm:flex-col sm:items-center">
        <button type="submit" className="button-text text-white btn-contained">
          Submit
        </button>
        <Link href="/" className="button-text btn-outlined">
          Бош Сахифага
        </Link>
      </div>
    </form>
  );
};

export default Form;
