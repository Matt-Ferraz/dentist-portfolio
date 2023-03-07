'use client'
import { useState, useEffect } from 'react'
import MobileNav from '../organisms/mobileNavBar'
import DesktopNavBar from '../organisms/desktopNavBar'

export default function TopNavBar() {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize();
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, []);

  return (
    <>
      {
        isMobile ?
          (
            <MobileNav/>
          )
        :
          (
            <DesktopNavBar/>
          )
      }
    </>
  );
}

