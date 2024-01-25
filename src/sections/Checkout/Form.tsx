"use client";
import { useState } from "react";
import Link from "next/link";
import { useForm, FormProvider } from "react-hook-form";
import RHFPhone from "@/components/hook-form/RHFPhone";
import DateComponent from "@/components/hook-form/DateComponent";
import RHFTextarea from "@/components/hook-form/RHFTextarea";
import SelectTime from "@/components/hook-form/SelectTime";
import { useSendOrderMutation } from "@/api/order.api.req";
import SendModal from "./SendModal";

const Form = ({ data, user }: { data: object; user: object }) => {
  const [selectedTime, setSelectedTime] = useState<any>();
  const [selectedDate, setSelectedDate] = useState(
    String(
      new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    )
  );
  const [sendOrder, { isLoading, data: resData }] = useSendOrderMutation();
  const [openModal, setOpenModal] = useState(true);
  const methods = useForm({
    defaultValues: {
      additionalPhoneNumber: "",
      comment: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (event: any) => {
    const submitObject = {
      ...event,
      date: selectedDate,
      time: selectedTime.value,
      ...data,
    };
    submitObject.user = user;
    delete submitObject._id;
    await sendOrder(submitObject)
      .unwrap()
      .then((res: any) => {
        setOpenModal(true);
      });
  };

  return (
    <div>
      <SendModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        reference={resData?.orderNumber}
      />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RHFPhone />

          <div className="flex flex-row w-full justify-between items-center">
            <DateComponent
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
            <SelectTime
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
            />
          </div>
          <RHFTextarea />
          <div className="flex flex-row justify-between gap-2 sm:flex-col sm:items-center">
            <button
              type="submit"
              className="button-text text-white btn-contained"
            >
              {isLoading ? (
                <span className="loading loading-spinner" />
              ) : (
                "Submit"
              )}
            </button>
            <Link href="/" className="button-text btn-outlined">
              Бош Сахифага
            </Link>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;
