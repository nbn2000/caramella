import { Cancel } from "@/svg/view";
import { useState } from "react";
import { PatternFormat } from "react-number-format";
const ModalSubmit = ({ setOpen, open }: { setOpen: any; open: boolean }) => {
  const modalClass = open ? "fixed" : "hidden";
  const [onFocusPhone, setOnFocusPhone] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const timeout: any = setTimeout(() => {
      setOpen(false);
      clearTimeout(timeout);
    }, 500);
  };
  return (
    <div
      id="modal"
      className={`modal-box z-20 py-8 px-16 boxShadow bg-white rounded-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${modalClass}`}
    >
      <button
        onClick={() => setOpen(false)}
        className="absolute text-orange right-[2%] top-[2%]"
      >
        <Cancel />
      </button>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <h4 className="h-175063 text-text232 whitespace-nowrap">
            Would you like to work with us ?
          </h4>
          <h4 className="b-145475 text-orange whitespace-nowrap">
            Please fill the following form
          </h4>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-solid border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#f2360a] focus:outline-none focus:ring-0 focus:border-[#f2360a] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="fullName"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#f2360a] peer-focus:dark:text-[#f2360a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Full Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          {onFocusPhone ? (
            <PatternFormat
              name="tel"
              format="+998 ## ### ####"
              allowEmptyFormatting
              mask="_"
              autoComplete="off"
              className="block py-2.5 px-0 w-full border-solid text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#f2360a] focus:outline-none focus:ring-0 focus:border-[#f2360a] peer"
              required
              id="tel"
              onBlur={() => setOnFocusPhone(false)}
            />
          ) : (
            <input
              type="text"
              name="tel"
              id="tel"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-solid border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#f2360a] focus:outline-none focus:ring-0 focus:border-[#f2360a] peer"
              placeholder=" "
              required
              onFocus={() => setOnFocusPhone(true)}
            />
          )}

          <label
            htmlFor="tel"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#f2360a] peer-focus:dark:text-[#f2360a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your phone number
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <label
            className="block mb-2 text-sm font-medium text-gray-900"
            htmlFor="file_input"
          >
            Upload Your Resume
          </label>
          <input
            type="file"
            id="file_input"
            required
            accept=".pdf, .jpg, .jpeg, .doc, .docx"
            aria-describedby="file_input_help"
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
          />
          <p
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            resume (max 2MB)
          </p>
        </div>

        <div className="relative max-h-max z-0 w-full mb-5 group">
          <textarea
            name="desctiption"
            id="desctiption"
            className="resize-none focus:h-[4rem]  block py-2.5 px-0 w-full border-solid text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#f2360a] focus:outline-none focus:ring-0 focus:border-[#f2360a] peer"
            placeholder=" "
            cols={1}
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
        <button
          type="submit"
          className="button-text text-white btn-contained w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ModalSubmit;
