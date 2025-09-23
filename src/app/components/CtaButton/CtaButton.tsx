import { twMerge } from "tailwind-merge";

interface IProps {
  primary?: boolean;
  children: React.ReactNode
}

const CtaButton = ({ primary, children }: IProps) => {
  return (
    <a className={twMerge(
      `block px-4 py-2 cursor-pointer transition-all duration-400 ease-in-out uppercase font-bold,
      ${primary ? 'bg-[#C8AC77] hover:opacity-75 hover:scale-105' : 'border-[1px] border-solid border-[#C8AC77] hover:bg-[#C8AC77]'}`
    )}>
      {children}
    </a>
  )
}

export default CtaButton
