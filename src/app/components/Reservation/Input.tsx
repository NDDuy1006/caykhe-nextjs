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
  disabled: boolean
}

const Input = ({
  name,
  type,
  rules,
  placeholder,
  error,
  disabled,
  register
}: IProps) => {
  return (
    <div className="flex flex-col">
      <input
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        {...register(name, rules)}
        className={twMerge(
          `border bg-transparent p-3 text-[#CCC] focus:outline-none appearance-none ${error ? "border-[#B42318]" : disabled ? "border-[#a1a1a1]" : "border-[#CCC]"}`,
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
