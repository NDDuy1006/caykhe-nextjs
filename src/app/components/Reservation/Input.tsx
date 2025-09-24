"use client"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface IProps {
  id: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  placeholder: string;
}

const Input = ({
  id,
  type,
  disabled,
  placeholder
}: IProps) => {
  return (
    <div className="w-full">
      <input
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
      />
    </div>
  )
}
