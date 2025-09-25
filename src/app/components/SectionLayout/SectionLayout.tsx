import { twMerge } from "tailwind-merge"

interface IProps {
  id: string
  className?: string
  children: React.ReactNode
}

const SectionLayout = ({ id, className, children }: IProps) => {
  return (
    <section
      className={twMerge(`${className && className} mt-5 px-5 md:mt-11 text-center flex flex-col items-center md:mx-11 `)}
      id={id}
    >
      {children}
    </section>
  )
}

export default SectionLayout