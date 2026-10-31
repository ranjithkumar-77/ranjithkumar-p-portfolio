import { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import heroPoster from '../assets/about/profile.png'
import heroVideo from '../assets/hero/hero.mp4'
import { heroContent, socialLinks } from '../data/portfolioData'

const socialItems = [
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

function SocialLinks({ className = '' }) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {socialItems
        .filter((item) => item.href)
        .map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="text-white/60 transition-all hover:scale-125 hover:text-white"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d={item.path} />
            </svg>
          </a>
        ))}
    </div>
  )
}

function Hero() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' })
    const refreshAos = () => AOS.refresh()
    window.addEventListener('load', refreshAos)
    return () => window.removeEventListener('load', refreshAos)
  }, [])

  const toggleVideo = (event) => {
    event.stopPropagation()
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play().then(
        () => setIsPlaying(true),
        (error) => console.error('Unable to play the introduction video.', error),
      )
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-[#ff2a2a]"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 z-0 h-full w-full object-contain object-top md:object-right"
        playsInline
        poster={heroPoster}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
      <div className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 mix-blend-difference lg:flex">
        <SocialLinks className="flex-col" />
      </div>
      <div className="absolute inset-0 z-20 mx-auto flex max-w-7xl flex-col justify-end px-6 pb-20 md:flex-row md:items-end md:justify-between md:px-12 md:pb-[8%]">
        <div className="max-w-2xl" data-aos="fade-up" data-aos-delay="100">
          <SocialLinks className="mb-5 lg:hidden" />
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            {heroContent.greeting}, <br />
            <span className="text-black">{heroContent.titleHighlight}</span>
          </h1>
          <p className="mt-4 max-w-md text-sm font-semibold text-white md:text-lg">
            {heroContent.subtitle}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={heroContent.ctaPrimary.href}
              className="rounded-full bg-white px-6 py-3 font-bold text-black transition-transform hover:scale-105"
            >
              {heroContent.ctaPrimary.label}
            </a>
            <a
              href={heroContent.ctaSecondary.href}
              className="rounded-full border border-white/40 bg-black/40 px-6 py-3 font-bold text-white backdrop-blur transition-transform hover:scale-105"
            >
              {heroContent.ctaSecondary.label}
            </a>
            {heroContent.ctaResume && (
              <a
                href={heroContent.ctaResume}
                download
                className="flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 font-bold text-white transition-colors hover:bg-white/15"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 17v4h14v-4" />
                </svg>
                Resume
              </a>
            )}
          </div>
        </div>
        <div
          className="mt-8 flex flex-col items-center md:mt-0"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <button
            type="button"
            onClick={toggleVideo}
            aria-label={isPlaying ? 'Pause introduction video' : 'Play introduction video'}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur transition-all hover:scale-110 hover:bg-[#ff2a2a] hover:shadow-[0_0_28px_rgba(255,42,42,0.7)] md:h-20 md:w-20"
          >
            {isPlaying ? (
              <svg
                aria-hidden="true"
                className="h-5 w-5 fill-current md:h-7 md:w-7"
                viewBox="0 0 24 24"
              >
                <path d="M7 5h4v14H7zm6 0h4v14h-4z" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                className="ml-1 h-5 w-5 fill-current md:h-7 md:w-7"
                viewBox="0 0 24 24"
              >
                <path d="M7 4v16l13-8z" />
              </svg>
            )}
          </button>
          <span className="mt-3 text-[10px] font-bold uppercase tracking-widest text-white">
            {isPlaying ? 'Pause' : 'Play Reel'}
          </span>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 animate-bounce text-white md:block">
        <svg
          aria-hidden="true"
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
