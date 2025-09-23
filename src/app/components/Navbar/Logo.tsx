import localFont from 'next/font/local'

// const cubano = localFont({
//   src: "./public/fonts/Cubano.ttf"
// })

const Logo = () => {
  return (
    <div className="items-center cursor-pointer">
      <span
        className="text-2xl md:text-3xl text-[#C8AC77]"
      >
        CAY KHE
      </span>
    </div>
  )
}

export default Logo