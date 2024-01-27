import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Info } from "@/svg/view";

const RHFTextfield = ({
  name,
  placeholder,
  type = "text",
}: {
  type?: string;
  name: string;
  placeholder: string;
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="relative z-0 w-full mb-5 group">
          <input
            type={type}
            id={name}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-solid border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#f2360a] peer"
            placeholder=" "
            autoComplete="off"
            {...field}
          />
          <label
            htmlFor={name}
            className="peer-focus:font-medium absolute text-sm sm:text-xs text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#f2360a]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {placeholder}
          </label>
          {errors[name] && (
            <span className="text-[red] mt-[5px] text-sm flex flex-row gap-2 justify-start items-center">
              <Info /> {`${errors[name]?.message}`}
            </span>
          )}
        </div>
      )}
    />
  );
};

export default RHFTextfield;
