import { softSkillsList } from '../data/portfolioData'

function SoftSkillCard({ skill, index }) {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group min-h-[220px] rounded-3xl border border-gray-200 bg-[#f8f8f8] p-6 text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(239,68,68,0.12)]"
    >
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-2xl transition-all group-hover:scale-110 group-hover:bg-red-200">
        {skill.icon}
      </div>
      <h3 className="mt-5 font-black uppercase tracking-wide text-gray-900">
        {skill.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-gray-500">{skill.desc}</p>
    </article>
  )
}

function SoftSkills() {
  return (
    <section className="relative overflow-hidden bg-white bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px] px-6 pb-32 pt-28 md:px-12">
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
      <div className="relative z-10 mx-auto max-w-7xl">
        <header className="mb-14 text-center">
          <span className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-red-600">
            Core Competencies
          </span>
          <h2 className="mt-6 text-4xl font-black uppercase text-gray-900 md:text-5xl">
            Professional Soft Skills
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            The habits and mindset I bring to a team and every project.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {softSkillsList.map((skill, index) => (
            <SoftSkillCard
              key={skill.name}
              skill={skill}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoftSkills
