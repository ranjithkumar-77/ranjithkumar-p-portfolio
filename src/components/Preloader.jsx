import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 2200)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100000] flex h-screen w-full items-center justify-center bg-[#ff2a2a]"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            className="relative whitespace-nowrap text-[clamp(2rem,8vw,4.5rem)] font-black tracking-tighter"
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-red-900/30">
              {personalInfo.brandName}
              .
            </span>
            <motion.span
              className="absolute inset-0 whitespace-nowrap text-white"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.2 }}
            >
              {personalInfo.brandName}
              <span className="text-black">.</span>
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
