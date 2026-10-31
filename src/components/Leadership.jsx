import { leadershipList } from '../data/portfolioData'

function LeadershipDivider() {
  return (
    <svg
      aria-hidden="true"
      className="absolute -top-1 left-0 h-12 w-full rotate-180 -translate-y-[1px] md:h-20"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        fill="#ff2a2a"
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"
      />
    </svg>
  )
}

function LeadershipItem({ item, index }) {
  const isLeft = index % 2 === 0
  return (
    <div className="relative flex items-center md:justify-between">
      <span className="absolute left-4 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#0a0a0a] bg-[#ff2a2a] shadow-[0_0_20px_rgba(255,42,42,0.8)] md:left-1/2" />
      {isLeft ? (
        <>
          <article
            data-aos="fade-right"
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:w-[45%] md:text-right"
          >
            <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-red-400">
              {item.badge}
            </span>
            <h3 className="mt-4 text-xl font-black text-white transition-colors hover:text-red-400">
              {item.title}
            </h3>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-red-400">
              {item.role}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {item.description}
            </p>
          </article>
          <div className="hidden md:block md:w-[45%]" />
        </>
      ) : (
        <>
          <div className="hidden md:block md:w-[45%]" />
          <article
            data-aos="fade-left"
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:w-[45%] md:text-left"
          >
            <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-red-400">
              {item.badge}
            </span>
            <h3 className="mt-4 text-xl font-black text-white transition-colors hover:text-red-400">
              {item.title}
            </h3>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-red-400">
              {item.role}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {item.description}
            </p>
          </article>
        </>
      )}
    </div>
  )
}

function Leadership() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] px-6 pb-28 pt-28 md:px-12">
      <LeadershipDivider />
      <div className="relative z-10 mx-auto max-w-5xl">
        <header className="mb-14 text-center">
          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-red-400">
            Activities
          </span>
          <h2 className="mt-6 text-4xl font-black uppercase text-white md:text-5xl">
            Leadership &amp; Engagement
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/50">
            Collaboration and participation beyond day-to-day development.
          </p>
        </header>
        <div className="relative space-y-8 pl-12 md:space-y-12 md:pl-0">
          <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10 md:left-1/2" />
          {leadershipList.map((item, index) => (
            <LeadershipItem
              key={`${item.title}-${item.role}`}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership
