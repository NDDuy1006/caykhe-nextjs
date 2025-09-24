import { twMerge } from "tailwind-merge"

interface IProps {
  className?: string
  children: React.ReactNode
}

const SectionLayout = ({ className, children }: IProps) => {
  return (
    <div className={twMerge(`${className && className} mt-5 px-5 md:mt-11 text-center flex flex-col items-center md:mx-11`)}>
      {children}
    </div>
  )
}

export default SectionLayout