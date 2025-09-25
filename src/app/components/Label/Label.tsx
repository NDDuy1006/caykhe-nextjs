import Image from 'next/image'
import React from 'react'

interface IProps {
  icon?: boolean
  children: React.ReactNode
}


const Label = ({icon, children}: IProps) => {
  return (
    <h4 className=" text-[16px] md:text-2xl text uppercase relative">
      {children}
      {
        icon && (
          <Image
            width={40}
            height={4}
            src="/images/spoon.png"
            alt="deco"
            className="absolute -bottom-4 left-1/2 -translate-x-1/2"
          />
        )
      }
    </h4>
  )
}

export default Label