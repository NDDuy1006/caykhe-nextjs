"use client"

import { useState } from "react"
import Label from "../Label/Label"
import SectionHeader from "../SectionHeader/SectionHeader"
import Title from "../Title/Title"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { toast } from "react-hot-toast";
import axios from "axios";
import { twMerge } from "tailwind-merge"


const Reservation = () => {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      numberOfPeople: "",
      time: "",
      date: ""
    }
  })
  
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    const combined = new Date(`${data.date}T${data.time}:00`);
    
    axios.post("/api/reservations", {
      ...data,
      numberOfPeople: Number(data.numberOfPeople),
      time: combined.toISOString()
    })
      .then(() => {
        toast.success(
          <>
            Table booked successfully!<br />
            We will contact you shortly.
          </>,
          {
            duration: 5000,
            style: {
              color: "#027A48",
              background: "#ECFDF3",
            }
          },
        )
        reset()
      })
      .catch(() => {
        toast.error(
          "Something went wrong. Try again later.",
          { duration: 3500 }
        )
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <section
      id="reservation"
      className="bg-[#445743] py-8 mt-6 md:mt-11 flex flex-col items-center mx-7 gap-4 md:gap-8 md:max-w-[690px] lg:max-w-[890px] xl:max-w-[1120px] md:mx-auto"
    >
      <SectionHeader>
        <Label icon>
          Reservation
        </Label>
        <Title>
          Book a table
        </Title>
      </SectionHeader>
      <form
        onSubmit={handleSubmit(onSubmit, () => {
          toast.error(
            <>
              Invalid input(s)<br />
              Please check all required fields
            </>,
            {
              duration: 3500,
              style: {
                color: "#B42318",
                background: "#FEF3F2",
              }
            }
          )
        })}
        className="w-full px-8"
      >
        <div
          style={{ fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-4"
        >
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: "Invalid input" })}
              className="border border-[#CCC] bg-transparent p-3 text[#CCC] focus:outline-none"
            />
            <span
              className="text-red-500 text-sm mt-1 min-h-[20px]"
            >
              {errors.name?.message as string}
            </span>
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Phone number"
              {...register("phone", { required: "Invalid input" })}
              className="border border-[#CCC] bg-transparent p-3 text-[#CCC] focus:outline-none"
            />
            <span
              className="text-red-500 text-sm mt-1 min-h-[20px]"
            >
              {errors.phone?.message as string}
            </span>
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Invalid input" })}
              className="border border-[#CCC] bg-transparent p-3 
            text-[#CCC] focus:outline-none"
            />
            <span
              className="text-red-500 text-sm mt-1 min-h-[20px]"
            >
              {errors.email?.message as string}
            </span>
          </div>
          <div className="relative flex flex-col">
            <select
              {...register("numberOfPeople", { required: "Invalid input" })}
              defaultValue="Number of People"
              className="border border-[#CCC] bg-transparent p-3 text-[#AAAAAA] focus:outline-none w-full"
            >
              <option value="" disabled>
                Number of People
              </option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n} className="text-black">
                  {n}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/3 h-5 w-5 -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <span
              className="text-red-500 text-sm mt-1 min-h-[20px]"
            >
              {errors.numberOfPeople?.message as string}
            </span>
          </div>
          <div className="flex flex-col">
            <input
              type="date"
              {...register("date", { required: "Invalid input" })}
              className="border border-[#CCC] bg-transparent p-3 text-[#AAAAAA] focus:outline-none"
            />
            <span
              className="text-red-500 text-sm mt-1 min-h-[20px]"
            >
              {errors.date?.message as string}
            </span>
          </div>
          <div className="flex flex-col">
            <input
              type="time"
              {...register("time", { required: "Invalid input" })}
              className="border border-[#CCC] bg-transparent p-3 text-[#AAAAAA] focus:outline-none"
            />
            <span
              className="text-red-500 text-sm mt-1 min-h-[20px]"
            >
              {errors.time?.message as string}
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-3 md:mt-4">
          <button
            type="submit"
            className={twMerge(
              `flex items-center w-40 bg-[#C8AC77] px-8 py-3 font-bold hover:bg-[#b4975f] transition-all duration-300 text-white,
              ${isLoading ? "opacity-65 cursor-not-allowed justify-between" : "justify-center cursor-pointer"}`
            )}
            disabled={isLoading}
          >
            {isLoading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}
            {isLoading ? "Booking" : "Book now"}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Reservation