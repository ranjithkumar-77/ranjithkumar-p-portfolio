import { technicalSkills } from '../data/portfolioData'

function SkillBadge({ name }) {
  return (
    <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600/20">
      {name}
    </span>
  )
}

function SkillCard({ category, index }) {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(239,68,68,0.12)]"
    >
      <h3 className="mb-5 border-b border-white/10 pb-4 text-sm font-black uppercase tracking-widest text-white">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} />
        ))}
      </div>
    </article>
  )
}

function TechnicalSkills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 pb-28 pt-24 md:px-12"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-96 w-96 rounded-full bg-red-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-red-600/10 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <header className="mb-14 text-center" data-aos="fade-up">
          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-red-400">
            Technical Stack
          </span>
          <h2 className="mt-6 text-4xl font-black uppercase text-white md:text-5xl">
            My Skillset
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            The tools and technologies I use to build reliable applications.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {technicalSkills.categories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnicalSkills
