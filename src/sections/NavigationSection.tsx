import Image from 'next/image'
import { RxHamburgerMenu } from 'react-icons/rx'

const NavigationSection = () => {
  const links = ['Home', 'About', 'Services', 'Contact']

  return (
    <header className="relative w-full py-8">
      <nav className="flex justify-between items-center w-full max-w-screen-xl mx-auto px-4">
        <Image src="/images/header-logo.svg" alt="Logo" width={129} height={29} />

        <div className="hidden lg:flex space-x-24">
          {links.map((link, index) => (
            <p key={index} className="interactive-link">
              {link}
            </p>
          ))}
        </div>

        <p className="hidden lg:flex text-xl cursor-pointer">Sign In</p>

        <div className="lg:hidden flex items-center">
          <RxHamburgerMenu size={30} />
        </div>
      </nav>
    </header>
  )
}

export default NavigationSection
