import Image from 'next/image'
import React from 'react'


const Label = ({children}: { children: React.ReactNode }) => {
  return (
    <h4 className=" text-[16px] md:text-2xl text uppercase relative">
      {children}
      <Image
        width={40}
        height={4}
        src="/images/spoon.png"
        alt="deco"
        className="absolute -bottom-4 left-1/2 -translate-x-1/2"
      />
    </h4>
  )
}

export default Label