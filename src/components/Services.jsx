import { useRef, useState } from 'react'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion'
import { skillsContent } from '../data/portfolioData'

const cardPositions = [
  'md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
  'md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
  'md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
  'md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
]
const cardAnimations = ['fade-left', 'fade-right', 'fade-left', 'fade-right']

function TornDivider() {
  return (
    <svg
      aria-hidden="true"
      className="absolute -top-1 left-0 h-12 w-full rotate-180 -translate-y-[1px] md:h-20"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        fill="#0a0a0a"
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"
      />
    </svg>
  )
}

function TagCard({
  number,
  title,
  text,
  className,
  aosDelay,
  aosType,
  pathLength,
  containerRef,
}) {
  const [isActive, setIsActive] = useState(false)
  const tagRef = useRef(null)

  useMotionValueEvent(pathLength, 'change', (latest) => {
    const container = containerRef.current
    const tag = tagRef.current
    if (!container || !tag) return
    const containerTop = container.getBoundingClientRect().top + window.scrollY
    const tagTop = tag.getBoundingClientRect().top + window.scrollY - containerTop
    const linePosition = latest * container.offsetHeight
    setIsActive(linePosition >= tagTop + 50)
  })

  const cardColors = isActive
    ? 'bg-[#ff2a2a] shadow-[0_20px_60px_rgba(255,42,42,0.3)]'
    : 'bg-white shadow-[0_15px_45px_rgba(0,0,0,0.1)]'
  const panelColors = isActive
    ? 'bg-red-700/50 text-white'
    : 'bg-[#f4f4f4] text-gray-800'

  return (
    <article
      ref={tagRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`relative w-72 rounded-[2rem] p-2 transition-colors duration-700 sm:w-80 ${cardColors} ${className}`}
    >
      <div className="absolute left-1/2 top-4 h-3 w-3 -translate-x-1/2 rounded-full bg-white shadow-inner" />
      <div
        className={`mt-8 min-h-[220px] rounded-[1.5rem] p-8 transition-colors duration-700 ${panelColors}`}
      >
        <p className="font-serif text-3xl italic opacity-50">{number}</p>
        <h3 className="mt-4 text-2xl font-black">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed opacity-75">{text}</p>
      </div>
    </article>
  )
}

function Services() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative overflow-hidden bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] px-6 pb-32 pt-24 md:px-12"
    >
      <TornDivider />
      <div className="relative mx-auto max-w-6xl md:h-[1350px]">
        <header
          data-aos="fade-up"
          className="relative z-20 mb-14 md:absolute md:left-0 md:top-10 md:mb-0 md:w-[450px]"
        >
          <span className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-red-600">
            {skillsContent.badge}
          </span>
          <h2 className="relative mt-6 text-4xl font-black leading-[1.1] text-gray-900 md:text-5xl lg:text-6xl">
            {skillsContent.heading}
            <svg
              aria-hidden="true"
              className="absolute -bottom-5 right-0 h-8 w-8 text-[#ff2a2a]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" />
            </svg>
          </h2>
          <p className="mt-7 max-w-md text-gray-600">
            {skillsContent.description}
          </p>
        </header>
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-0 hidden h-[1350px] w-full md:block"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />
          <mask id="path-mask">
            <motion.path
              d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
            />
          </mask>
          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 z-0 h-full w-4 -translate-x-1/2 md:hidden"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="1"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />
          <mask id="path-mask-mobile">
            <motion.path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeDasharray="4 6"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength }}
            />
          </mask>
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth="1"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
            mask="url(#path-mask-mobile)"
          />
        </svg>
        <div className="relative z-10 flex flex-col items-center gap-8 md:block md:gap-12">
          {skillsContent.cards.slice(0, 4).map((card, index) => (
            <TagCard
              key={card.number}
              {...card}
              className={`md:absolute ${cardPositions[index]}`}
              aosType={cardAnimations[index]}
              aosDelay={(index + 1) * 100}
              pathLength={pathLength}
              containerRef={containerRef}
            />
          ))}
        </div>
        <p className="absolute left-[60%] top-[1250px] hidden rotate-6 font-['Caveat',cursive] text-3xl text-gray-600 md:block">
          {skillsContent.endText}
        </p>
      </div>
    </section>
  )
}

export default Services
