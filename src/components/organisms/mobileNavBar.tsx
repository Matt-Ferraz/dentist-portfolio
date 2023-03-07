'use client'
import { useState } from 'react'
import OptionsSectionNavBar from '../molecules/optionsSection'
import NavmobileHeader from '../molecules/navMobileHeader'

export default function MobileNav() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  function toggleNav() {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <>
      <nav className="bg-main-golden">
        <NavmobileHeader toggleNav={toggleNav} />
      </nav>
      <div className={`md:hidden transition-all duration-500 ${isNavOpen ? 'h-screen opacity-100' : 'h-0 opacity-0'}`}>
        <div className="bg-gradient-to-b h-screen from-main-golden to-white px-2 pt-2 pb-3 space-y-1">
          <OptionsSectionNavBar />
        </div>
      </div>
    </>
  );
}
