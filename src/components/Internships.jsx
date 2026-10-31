import { internshipsList } from '../data/portfolioData'

function InternshipCard({ intern, index }) {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="flex flex-col rounded-3xl border border-white/10 bg-black/20 p-8 backdrop-blur-md transition-transform hover:scale-[1.02]"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-xs uppercase text-white/40">
          {intern.duration}
        </span>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white">
          Internship
        </span>
      </div>
      <h3 className="mt-6 text-2xl font-black text-white">{intern.role}</h3>
      <p className="mt-2 text-sm font-bold uppercase tracking-widest text-red-200">
        {intern.organization}
      </p>
      <div className="mt-6">
        <h4 className="font-bold text-white">Skills Gained:</h4>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
          {intern.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="mt-auto border-t border-white/15 pt-5">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/60">
          Technologies:
        </p>
        <div className="flex flex-wrap gap-2">
          {intern.tech.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-black/20 px-3 py-1.5 font-mono text-xs text-white/80"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

function InternshipDivider() {
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

function Internships() {
  return (
    <section className="relative overflow-hidden bg-[#ff2a2a] px-6 pb-32 pt-24 md:px-12">
      <InternshipDivider />
      <svg
        aria-hidden="true"
        className="absolute bottom-10 left-10 h-7 w-7 animate-pulse fill-black opacity-20"
        viewBox="0 0 24 24"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>
      <div className="relative z-10 mx-auto max-w-7xl">
        <header className="mb-14 text-center">
          <h2 className="text-4xl font-black uppercase text-black md:text-5xl">
            Work Experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-red-100">
            Learning, collaborating, and growing through hands-on experience.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {internshipsList.map((intern, index) => (
            <InternshipCard
              key={`${intern.organization}-${intern.role}`}
              intern={intern}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Internships
