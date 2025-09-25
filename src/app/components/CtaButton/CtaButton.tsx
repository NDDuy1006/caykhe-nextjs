"use client"

import { twMerge } from "tailwind-merge";

interface IProps {
  sectionId: string;
  primary?: boolean;
  children: React.ReactNode
}

const CtaButton = ({ sectionId, primary, children }: IProps) => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      className={twMerge(
        `block px-4 py-2 cursor-pointer transition-all duration-400 ease-in-out uppercase font-bold,
        ${primary ? 'bg-[#C8AC77] hover:opacity-75 hover:scale-105' : 'border-[1px] border-solid border-[#C8AC77] hover:bg-[#C8AC77]'}`
      )}
      onClick={() => handleScroll(sectionId)}
    >
      {children}
    </a>
  )
}

export default CtaButton
