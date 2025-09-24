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
    setValue,
    watch,
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

  const name = watch("name")
  const phone = watch("phone")
  const email = watch("email")
  const numberOfPeople = watch("numberOfPeople")
  const time = watch("time")
  const date = watch("date")
  
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
          "Reservation created! We will contact you shortly.",
          { duration: 5000 }
        )
        reset()
      })
      .catch(() => {
        toast.error(
          "Something went wrong. Try again later.",
          { duration: 5000 }
        )
      })
      .finally(() => {
        setIsLoading(false)
      })
    
  }

  return (
    <div className="bg-[#445743] py-8 mt-6 md:mt-11 text-center flex flex-col items-center mx-7 gap-8 md:max-w-[1120px] md:mx-auto">
      <SectionHeader>
        <Label>
          Reservation
        </Label>
        <Title>
          Book a table
        </Title>
      </SectionHeader>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            style={{ fontFamily: 'sans-serif' }}
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
            className="border border-[#CCC] bg-transparent p-3 text[#CCC] focus:outline-none"
          />
          <input
            style={{ fontFamily: 'sans-serif' }}
            type="text"
            placeholder="Phone"
            {...register("phone", { required: true })}
            className="border border-[#CCC] bg-transparent p-3 text-[#CCC] focus:outline-none"
          />
          <input
            style={{ fontFamily: 'sans-serif' }}
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="border border-[#CCC] bg-transparent p-3 
          text-[#CCC] focus:outline-none"
          />
          <div className="relative">
            <select
              style={{ fontFamily: 'sans-serif' }}
              {...register("numberOfPeople", { required: true })}
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
              className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <input
            style={{ fontFamily: 'sans-serif' }}
            type="date"
            {...register("date", { required: true })}
            className="border border-[#CCC] bg-transparent p-3 text-[#AAAAAA] focus:outline-none"
          />
          <input
            style={{ fontFamily: 'sans-serif' }}
            type="time"
            {...register("time", { required: true })}
            className="border border-[#CCC] bg-transparent p-3 text-[#AAAAAA] focus:outline-none"
          />
        </div>
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className={twMerge(
              `bg-[#C8AC77] px-8 py-3 font-bold hover:bg-[#b4975f] transition-all duration-300 text-white min-w-[14px],
              ${isLoading && "opacity-75 cursor-not-allowed"}`
            )}
            disabled={isLoading}
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  )
}

export default Reservation