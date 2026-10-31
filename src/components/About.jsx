import { useState } from 'react'
import { motion } from 'framer-motion'
import QRCode from 'react-qr-code'
import stackImage from '../assets/about/profile.png'
import { aboutContent, personalInfo, socialLinks } from '../data/portfolioData'

function About() {
  const [flipped, setFlipped] = useState(false)
  const stopLinkClick = (event) => event.stopPropagation()
  const visitingRows = [
    {
      label: 'Email',
      value: personalInfo.emails.primary,
      href: `mailto:${personalInfo.emails.primary}`,
      icon: 'M3 5h18v14H3z M3 6l9 7 9-7',
    },
    {
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      icon: 'M6 3h4l2 5-3 2a16 16 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z',
    },
    {
      label: 'Location',
      value: personalInfo.location,
      icon: 'M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Zm-5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
    },
    {
      label: 'LinkedIn',
      value: socialLinks.linkedin ? 'LinkedIn' : '',
      href: socialLinks.linkedin,
      icon: 'M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3 9h4v12H3zm6 0h4v1.7c.6-1.1 1.7-2 3.6-2 3.1 0 4.4 2 4.4 5.2V21h-4v-6.2c0-1.7-.5-2.8-2-2.8s-2 1.1-2 2.8V21H9z',
    },
    {
      label: 'GitHub',
      value: socialLinks.github ? 'GitHub' : '',
      href: socialLinks.github,
      icon: 'M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.93a9.6 9.6 0 0 1 2.5.34c1.9-1.3 2.74-1.03 2.74-1.03.55 1.38.2 2.4.1 2.65.65.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.62c0 .26.18.57.69.47A10 10 0 0 0 12 2Z',
    },
  ]

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#ff2a2a] px-6 pb-40 pt-20 md:px-12"
    >
      <svg
        aria-hidden="true"
        className="absolute right-12 top-16 h-6 w-6 animate-pulse fill-black opacity-30"
        viewBox="0 0 24 24"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>
      <svg
        aria-hidden="true"
        className="absolute bottom-28 left-10 h-6 w-6 animate-pulse fill-black opacity-30"
        style={{ animationDelay: '1s' }}
        viewBox="0 0 24 24"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-16 md:flex-row">
        <div className="w-full shrink-0 md:w-[350px]">
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              type: 'spring',
              stiffness: 110,
              damping: 9,
              mass: 1.1,
            }}
            className="relative mx-auto flex max-w-[280px] flex-col items-center pt-8 md:mx-0"
          >
            <div className="absolute -top-32 left-1/2 h-40 w-3 -translate-x-1/2 bg-black" />
            <div className="absolute top-5 left-1/2 z-20 h-8 w-10 -translate-x-1/2 rounded bg-gray-500" />
            <button
              type="button"
              aria-label="Flip ID card"
              onClick={() => setFlipped((value) => !value)}
              className="relative w-full max-w-[280px] -rotate-3 transition-transform duration-500 hover:rotate-0 [perspective:1200px] focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
            >
              <div
                className="relative aspect-[3/4] w-full transition-transform duration-700 [transform-style:preserve-3d]"
                style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gray-900 p-3 shadow-2xl [backface-visibility:hidden]">
                  <div className="mx-auto mb-2 h-2 w-14 rounded-b-lg bg-black" />
                  <img
                    src={stackImage}
                    alt={`Illustrated portrait of ${personalInfo.name}`}
                    className="h-[calc(100%-1rem)] w-full rounded-xl object-cover object-top"
                  />
                </div>
                <div className="absolute inset-0 overflow-hidden rounded-2xl bg-gradient-to-br from-[#141414] to-[#1f1f1f] p-5 text-left text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-[#ff2a2a]" />
                  <div className="text-xl font-black">
                    {personalInfo.brandName}
                    <span className="text-[#ff2a2a]">.</span>
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-widest text-red-400">
                    {personalInfo.title}
                  </p>
                  <div className="my-4 border-t border-white/10" />
                  <div className="space-y-3">
                    {visitingRows
                      .filter((row) => row.value)
                      .map((row) => (
                        <div
                          key={row.label}
                          className="flex min-w-0 items-center gap-2 text-xs text-white/85"
                        >
                          <svg
                            aria-hidden="true"
                            className="h-4 w-4 shrink-0 text-red-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <path d={row.icon} />
                          </svg>
                          {row.href ? (
                            <a
                              href={row.href}
                              onClick={stopLinkClick}
                              target={row.href.startsWith('http') ? '_blank' : undefined}
                              rel={
                                row.href.startsWith('http')
                                  ? 'noopener noreferrer'
                                  : undefined
                              }
                              className="truncate hover:text-red-300"
                            >
                              {row.value}
                            </a>
                          ) : (
                            <span className="truncate">{row.value}</span>
                          )}
                        </div>
                      ))}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-lg bg-white p-2">
                    <QRCode
                      value={
                        socialLinks.linkedin ||
                        `mailto:${personalInfo.emails.primary}`
                      }
                      size={76}
                    />
                    <span className="text-[10px] text-gray-500">
                      Scan to connect
                    </span>
                  </div>
                </div>
              </div>
            </button>
            <p className="mt-4 text-xs font-bold text-black/60">
              Tap the card to flip ↻
            </p>
          </motion.div>
        </div>
        <div data-aos="fade-left" className="pt-4">
          <h2 className="text-4xl font-black text-black md:text-5xl">
            {aboutContent.heading}
          </h2>
          <p
            className="mt-6 text-lg font-bold leading-relaxed text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>
      </div>
      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-20 w-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"
        />
      </svg>
    </section>
  )
}

export default About
