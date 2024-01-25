import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const RHFTextarea = () => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="comment"
      render={({ field }) => (
        <div className="relative max-h-max z-0 w-full mb-5 group">
          <textarea
            id="desctiption"
            className="resize-none focus:h-[7rem]  block py-2.5 px-0 w-full border-solid text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#f2360a] focus:outline-none focus:ring-0 focus:border-[#f2360a] peer"
            placeholder=" "
            cols={10}
            rows={1}
            {...field}
          />
          <label
            htmlFor="desctiption"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#f2360a] peer-focus:dark:text-[#f2360a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Little bit about yourself
          </label>
        </div>
      )}
    />
  );
};

export default RHFTextarea;
