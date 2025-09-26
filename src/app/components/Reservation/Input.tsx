/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { FieldError, UseFormRegister } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface IProps {
  name: string;
  placeholder: string;
  register: UseFormRegister<any>;
  rules?: object;
  error?: string;
  type: string;
}

const Input = ({
  name,
  type,
  rules,
  placeholder,
  error,
  register
}: IProps) => {
  return (
    <div className="flex flex-col">
      <input
        placeholder={placeholder}
        type={type}
        {...register(name, rules)}
        className={twMerge(
          `border bg-transparent p-3 text[#CCC] focus:outline-none, ${error ? "border-[#B42318]" : "border-[#CCC]"}`,
        )}
      />
      <span
        className="text-red-500 text-sm mt-1 min-h-[20px]"
      >
        {error}
      </span>
    </div>
  )
}

export default Input
