import Label from "../Label/Label"
import SectionHeader from "../SectionHeader/SectionHeader"
import SectionLayout from "../SectionLayout/SectionLayout"
import Title from "../Title/Title"
import Image from "next/image"


const Promotion = () => {
  return (
    <div className="relative mt-[46px] w-screen h-[900px] text-center">
      <Image
        src="/images/happy-background.jpg"
        alt="Happy background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="flex flex-col justify-center h-full">
        <SectionHeader>
          <Title>
            Happy hours
          </Title>
          <Label>
            Friday & Saturday (6:00 PM - 8:00 PM)
          </Label>
        </SectionHeader>
      </div>
    </div>
  )
}

export default Promotion