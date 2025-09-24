import Image from "next/image"

const Footer = () => {
  return (
    <div className="relative mt-[46px] w-screen text-center">
      <Image
        src="/images/footer-background.jpg"
        alt="Happy background"
        fill
        className="object-cover z-0"
      />
      <div className="md:pb-28 md:pt-64 md:max-w-[1280px] mx-auto flex justify-between">
        <div className="flex flex-col gap-2 z-1">
          <h5
            style={{ fontFamily: 'sans-serif' }}
            className="text-[28px] font-light text-[#F5EFDB]"
          >
            Contact Us
          </h5>
          <p
            style={{ fontFamily: 'sans-serif' }}
            className="text-[#aaa] font-light"
          >
            17 Stert Street, Abingdon, OX14 3JF
          </p>
          <p
            style={{ fontFamily: 'sans-serif' }}
            className="text-[#aaa] font-light"
          >
            0123456789
          </p>
        </div>
        <div className="flex flex-col gap-5 z-1">
          <h3 className="text-[64px] text-[#C8AC77] leading-16">
            Cay Khe
          </h3>
          <p
            style={{ fontFamily: 'sans-serif' }}
            className="text-[#aaa] font-light"
          >
          &quot;The best way to find yourself is to lose yourself in the service of others.&quot;
          </p>
          <div
            style={{ fontFamily: 'sans-serif' }}
            className="text-[#aaa] font-light md:mt-8"
          >
            <p>© 2025 Cây Khế. All rights reserved.</p>
            <p>Powered by Oi oi oi.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 z-1">
          <h5
            style={{ fontFamily: 'sans-serif' }}
            className="text-[28px] font-light text-[#F5EFDB]"
          >
            Working Hours
          </h5>
          <p
            style={{ fontFamily: 'sans-serif' }}
            className="text-[#aaa] font-light"
          >
            Monday - Thursday: 11:00 - 21:00
          </p>
          <p
            style={{ fontFamily: 'sans-serif' }}
            className="text-[#aaa] font-light"
          >
            Friday & Saturday: 11:00 - 22:00
          </p>
          <p
            style={{ fontFamily: 'sans-serif' }}
            className="text-[#aaa] font-light"
          >
            Sunday: 11:00 - 21:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer