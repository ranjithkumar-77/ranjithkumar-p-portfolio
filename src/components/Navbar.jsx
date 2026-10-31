import { useEffect, useState } from 'react'
import { personalInfo } from '../data/portfolioData'

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact']

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const hireMeMailto = `mailto:${personalInfo.emails.primary}?subject=Hiring Inquiry – Portfolio&body=Hello ${personalInfo.name},%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClass = isOpen
    ? 'bg-[#ff2a2a] py-4'
    : isScrolled
      ? 'bg-transparent py-4'
      : 'bg-transparent py-6'

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${navClass}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <a
          href="#"
          className="text-2xl font-black text-white"
          aria-label={`${personalInfo.brandName} home`}
        >
          {personalInfo.brandName}
          <span className="text-red-500">.</span>
        </a>
        <div className="hidden space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="group relative font-medium text-white/80 transition-colors hover:text-white"
            >
              {link}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
        <a
          href={hireMeMailto}
          className="hidden rounded-full border border-white/20 bg-white/10 px-6 py-2.5 font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:shadow-[0_0_24px_rgba(255,255,255,0.2)] md:block"
        >
          Hire Me
        </a>
        <button
          type="button"
          className="rounded-lg p-2 text-white transition-all hover:scale-105 hover:bg-white/10 md:hidden"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? (
            <svg
              aria-hidden="true"
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`absolute top-full w-full overflow-hidden bg-[#ff2a2a] shadow-2xl transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block border-b border-white/20 py-4 text-lg font-bold text-white transition-colors hover:text-black"
            >
              {link}
            </a>
          ))}
          <a
            href={hireMeMailto}
            className="mt-5 block w-full rounded-full bg-white px-6 py-3 text-center font-bold text-[#ff2a2a] transition-transform hover:scale-[1.02]"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
