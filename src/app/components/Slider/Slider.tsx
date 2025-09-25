import Image from "next/image"


const Slider = () => {
  return (
    <section id="home">
      <img
        src="/images/slider-item-1.jpg"
        alt="hero"
        className="object-cover w-full h-[55vh] md:h-[100vh]"
      />
    </section>
  )
}

export default Slider