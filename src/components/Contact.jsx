import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  emailjsConfig,
  personalInfo,
  socialLinks,
} from '../data/portfolioData'

function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (status === 'sending' || !formRef.current) return

    setStatus('sending')
    const formData = new FormData(formRef.current)
    const firstName = String(formData.get('first_name') || '').trim()
    const lastName = String(formData.get('last_name') || '').trim()
    const email = String(formData.get('user_email') || '').trim()
    const message = String(formData.get('message') || '').trim()

    if (!firstName || !email || !message) {
      setStatus('error')
      window.setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const { serviceId, templateId, publicKey, isConfigured } = emailjsConfig
    if (!isConfigured) {
      const body = encodeURIComponent(
        `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`,
      )
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${body}`,
        '_blank',
      )
      setStatus('success')
      formRef.current.reset()
      window.setTimeout(() => setStatus('idle'), 3000)
      return
    }

    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey,
      )
      setStatus('success')
      formRef.current.reset()
    } catch (error) {
      console.error('Unable to send the contact form through EmailJS.', error)
      setStatus('error')
    }
    window.setTimeout(() => setStatus('idle'), 4000)
  }

  const buttonLabel = {
    idle: 'Send Message',
    sending: 'Sending...',
    success: 'Sent Successfully ✓',
    error: 'Failed — Try Again',
  }[status]

  return (
    <section
      ref={ref}
      id="contact"
      className="relative flex min-h-screen w-full items-end overflow-hidden border-t border-gray-900 bg-[#0a0a0a] pt-32"
    >
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-x-0 top-20 z-0 select-none overflow-hidden"
      >
        <div
          className="origin-top scale-y-[1.6] whitespace-nowrap text-[25vw] font-black uppercase leading-[0.75] tracking-tighter text-white/[0.04]"
          style={{ fontFamily: "'Impact','Arial Black',sans-serif" }}
        >
          Contact
        </div>
      </motion.div>
      <div
        data-aos="fade-up"
        className="relative z-10 ml-auto w-full bg-[#ff2a2a] p-8 text-white md:w-[85%] md:p-16 lg:w-[75%]"
      >
        <div className="flex flex-wrap items-center justify-between gap-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em]">
            Reach Me
          </p>
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/50 px-5 py-2 text-sm font-bold transition-colors hover:bg-white hover:text-[#ff2a2a]"
            >
              DM on Instagram
            </a>
          )}
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-12"
        >
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col gap-8">
              <input
                id="firstName"
                name="first_name"
                required
                placeholder="First name"
                autoComplete="given-name"
                className="border-b border-white/40 bg-transparent pb-3 text-lg text-white outline-none transition-colors placeholder:text-white/70 focus:border-white"
              />
              <input
                id="lastName"
                name="last_name"
                placeholder="Last name"
                autoComplete="family-name"
                className="border-b border-white/40 bg-transparent pb-3 text-lg text-white outline-none transition-colors placeholder:text-white/70 focus:border-white"
              />
              <input
                id="email"
                name="user_email"
                type="email"
                required
                placeholder="Email address"
                autoComplete="email"
                className="border-b border-white/40 bg-transparent pb-3 text-lg text-white outline-none transition-colors placeholder:text-white/70 focus:border-white"
              />
            </div>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Tell me about your opportunity..."
              className="min-h-[120px] resize-none border-b border-white/40 bg-transparent pb-3 text-lg text-white outline-none transition-colors placeholder:text-white/70 focus:border-white"
            />
          </div>
          <div className="flex flex-col gap-7">
            <label className="flex items-start gap-3 text-sm text-white/90">
              <input
                type="checkbox"
                name="contact_permission"
                className="mt-0.5 accent-black"
              />
              <span>You may contact me regarding this message.</span>
            </label>
            <p className="max-w-2xl text-sm leading-relaxed text-white/80">
              Your message will be sent directly to my inbox. I typically
              respond within 24-48 hours.
            </p>
            <a
              href={`mailto:${personalInfo.emails.primary}`}
              className="w-fit text-sm font-semibold underline underline-offset-4"
            >
              Need a quick reply? Email me directly.
            </a>
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`group flex w-fit items-center gap-4 rounded-full border border-white/70 px-7 py-3 font-bold transition-all hover:bg-white hover:text-[#ff2a2a] ${
                status === 'sending'
                  ? 'cursor-wait bg-gray-300 text-gray-600'
                  : status === 'success'
                    ? 'border-green-200 bg-green-600 text-white'
                    : status === 'error'
                      ? 'border-red-900 bg-red-900 text-white'
                      : 'bg-transparent text-white'
              }`}
            >
              {status === 'sending' && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              )}
              {buttonLabel}
              {status === 'idle' && (
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
