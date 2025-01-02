import Image from 'next/image'
import { RxHamburgerMenu } from 'react-icons/rx'

const NavigationSection = () => {
  const links = ['Home', 'About', 'Services', 'Contact']

  return (
    <header className="absolute top-0 left-0 w-full z-10 bg-transparent">
      <nav className="flex justify-between items-center w-full py-6">
        <Image src="/images/header-logo.svg" alt="Logo" width={129} height={29} />

        <div className="hidden lg:flex space-x-3">
          {links.map((link, index) => (
            <p key={index} className="interactive-link">
              {link}
            </p>
          ))}
        </div>

        <p className="hidden lg:flex text-xl cursor-pointer w-[129px] justify-end items-center">Sign In</p>

        <div className="lg:hidden flex items-center">
          <RxHamburgerMenu size={30} />
        </div>
      </nav>
    </header>
  )
}

export default NavigationSection
