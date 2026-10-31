import {
  academy,
  currentYear,
  footerContent,
  personalInfo,
  socialLinks,
} from '../data/portfolioData'

const socialIcons = [
  {
    name: 'GitHub',
    href: socialLinks.github,
    path: 'M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.93a9.6 9.6 0 0 1 2.5.34c1.9-1.3 2.74-1.03 2.74-1.03.55 1.38.2 2.4.1 2.65.65.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.62c0 .26.18.57.69.47A10 10 0 0 0 12 2Z',
  },
  {
    name: 'LinkedIn',
    href: socialLinks.linkedin,
    path: 'M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3 9h4v12H3zm6 0h4v1.7c.6-1.1 1.7-2 3.6-2 3.1 0 4.4 2 4.4 5.2V21h-4v-6.2c0-1.7-.5-2.8-2-2.8s-2 1.1-2 2.8V21H9z',
  },
  {
    name: 'Instagram',
    href: socialLinks.instagram,
    path: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z',
  },
]

function Footer() {
  return (
    <footer className="flex min-h-[50vh] flex-col justify-between bg-[#111111] px-6 py-16 font-mono text-[10px] tracking-widest text-[#d4d4d4] md:px-12 md:text-xs">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        <div className="space-y-3">
          {footerContent.taglines.map((tagline) => (
            <p key={tagline}>{tagline}</p>
          ))}
        </div>
        <div className="space-y-4 md:items-center md:text-center">
          <p>{footerContent.credential}</p>
          <a href="#projects" className="underline underline-offset-4">
            View Work
          </a>
        </div>
        <div className="space-y-3 md:items-end md:text-right">
          <p>Available for opportunities</p>
          <p>{currentYear}</p>
        </div>
      </div>
      <div className="overflow-hidden py-20 md:py-24">
        <h2 className="select-none text-center font-sans text-[18vw] font-bold leading-none tracking-tighter text-[#f4f4f4] lowercase md:text-[16vw]">
          {personalInfo.brandName.toLowerCase()}
        </h2>
      </div>
      <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-3">
        <div className="space-y-3">
          <a href="#contact" className="underline underline-offset-4">
            Contact
          </a>
          <p className="text-[9px] text-white/60">{footerContent.copyright}</p>
          <p className="text-[9px] text-white/60">
            Trained at{' '}
            <a
              href={academy.url}
              target="_blank"
              rel="noopener"
              className="underline underline-offset-4"
            >
              {academy.name}
            </a>
          </p>
        </div>
        <div className="space-y-4 md:text-center">
          <a
            href={`mailto:${personalInfo.emails.primary}`}
            className="underline underline-offset-4"
          >
            {personalInfo.emails.primary}
          </a>
          <div className="flex gap-4 md:justify-center">
            {socialIcons
              .filter((item) => item.href)
              .map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="transition-colors hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={item.path} />
                  </svg>
                </a>
              ))}
          </div>
        </div>
        <div className="md:text-right">
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Explore My GitHub
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
