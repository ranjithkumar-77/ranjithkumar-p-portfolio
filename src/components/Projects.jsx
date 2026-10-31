import { projects, socialLinks } from '../data/portfolioData'

function GitHubIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.93a9.6 9.6 0 0 1 2.5.34c1.9-1.3 2.74-1.03 2.74-1.03.55 1.38.2 2.4.1 2.65.65.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.62c0 .26.18.57.69.47A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M14 4h6v6m-11 5L20 4M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
    </svg>
  )
}

function ProjectCard({ project, aosDelay }) {
  const borderClass = project.isFlagship
    ? 'bg-gradient-to-br from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500/80 hover:via-white/20 hover:to-red-500/60'
    : 'bg-white/10'
  const panelClass = project.isFlagship ? 'bg-[#0f0f0f]/90' : 'bg-[#111111]/90'

  return (
    <article
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`rounded-2xl p-[1px] transition-all duration-300 ${borderClass}`}
    >
      <div className={`rounded-2xl p-6 backdrop-blur-md md:p-8 ${panelClass}`}>
        {project.badge && (
          <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-red-400">
            {project.badge}
          </span>
        )}
        <div className="mt-5 flex items-center gap-4">
          <span className="font-serif text-5xl font-black italic text-white/10">
            {project.number}
          </span>
          <h3 className="text-2xl font-black text-white md:text-3xl">
            {project.title}
          </h3>
        </div>
        <p className="mt-4 max-w-3xl leading-relaxed text-white/60">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-bold text-white/70 transition-colors hover:bg-red-600/30"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              <GitHubIcon />
              GitHub
            </a>
          )}
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#ff2a2a] px-5 py-2.5 font-bold text-white transition-colors hover:bg-red-500"
            >
              Live Demo <ExternalLinkIcon />
            </a>
          ) : (
            <a
              href="#"
              aria-disabled="true"
              onClick={(event) => event.preventDefault()}
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-gray-700 px-5 py-2.5 font-semibold text-gray-300"
            >
              Demo Coming Soon
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] px-6 pb-32 pt-24 md:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-14 text-center" data-aos="fade-up">
          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-red-400">
            Featured Projects
          </span>
          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl lg:text-6xl">
            Work that speaks for itself
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/50">
            A practical look at the applications I have designed and built.
          </p>
        </header>
        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              aosDelay={(index + 1) * 100}
            />
          ))}
        </div>
        {socialLinks.github && (
          <div className="mt-12 text-center">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition-all hover:border-red-500 hover:bg-red-500/10"
            >
              <GitHubIcon />
              Explore All My Repositories
              <ExternalLinkIcon />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
