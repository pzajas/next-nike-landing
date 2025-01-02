import NavigationSection from '@/src/sections/NavigationSection'
import { BsArrowRightCircleFill } from 'react-icons/bs'

export default function Home() {
  return (
    <div className="relative w-[60%] bg-white mx-auto">
      <NavigationSection />

      <div className="flex flex-col lg:flex-row w-full mt-16">
        <div className="w-full sm:w-1/2 h-[900px] mt-[150px] z-10 leading-none">
          <p className="text-2xl text-orange mb-8">Our Summer collections</p>
          <p className="text-[2rem] sm:text-[5.5rem] font-semibold">The New Arrival</p>
          <p className="text-[2rem] sm:text-[5.5rem] font-semibold mb-8">
            <span className="text-[2rem] sm:text-[5.5rem] font-semibold text-orange">Nike</span> Shoes
          </p>

          <p className="text-2xl mb-16">
            Discover stylish Nike arrivals, quality <br></br>comfort, and innovation for your active life.
          </p>

          <button
            className="flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none bg-orange text-white border-orange
              rounded-full space-x-2 mb-16"
          >
            <p>Shop now</p>
            <BsArrowRightCircleFill />
          </button>

          <div className="flex space-x-8">
            <div className="py-4 pr-4 text-4xl font-semibold w-30 text-left rounded-md">
              <p>1k+</p>
              <p className="text-base text-left font-normal">Brands</p>
            </div>
            <div className="py-4 pr-4 text-4xl font-semibold w-30 text-left rounded-md">
              <p>500+</p>
              <p className="text-base text-left font-normal">Shops</p>
            </div>
            <div className="py-4 pr-4 text-4xl font-semibold w-30 text-left rounded-md">
              <p>250k+</p>
              <p className="text-base text-left font-normal">Customers</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 h-[900px] bg-blue-50"></div>
      </div>
    </div>
  )
}
