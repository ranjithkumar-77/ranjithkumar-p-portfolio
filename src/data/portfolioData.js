export const personalInfo = {
  name: 'Ranjithkumar P',
  brandName: 'Ranjithkumar P',
  title: 'Java Full Stack Developer',
  location: 'Bengaluru, India',
  phone: '',
  emails: {
    primary: 'ranjithkumar75834@gmail.com',
  },
  resumeUrl: '/Ranjithkumar_P_Resume.pdf',
}

export const socialLinks = {
  github: '',
  linkedin: '',
  instagram: '',
}

export const academy = {
  name: 'TAP Academy',
  url: 'https://thetapacademy.com/',
}

export const heroContent = {
  greeting: "Hi, I'm Ranjithkumar P",
  titleHighlight: 'Java Full Stack Developer',
  subtitle:
    'Aspiring Java Full Stack Developer from Bengaluru, building practical applications with Java and Spring Boot.',
  ctaPrimary: { label: 'View My Work', href: '#projects' },
  ctaSecondary: { label: 'Get In Touch', href: '#contact' },
  ctaResume: personalInfo.resumeUrl,
}

export const aboutContent = {
  heading: 'A little about me',
  bio:
    'I completed my Bachelor’s degree in Computer Science and Engineering at Rathinam Technical Campus, Coimbatore. I’m currently completing placement training at <strong>TAP Academy</strong> to strengthen my technical skills and prepare for a career in software development.<br /><br />My main skills include Core Java, Spring Boot, JDBC, MySQL, and REST APIs. I enjoy solving programming problems and building practical applications. My key project, <strong>SmartFlow</strong>, matches service requests with suitable technicians based on skills, availability, location, and ratings. It also manages service requests and prevents multiple technicians from accepting the same request.',
}

export const technicalSkills = {
  categories: [
    {
      title: 'Programming',
      skills: [{ name: 'Core Java' }, { name: 'JavaScript' }, { name: 'SQL' }],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Spring Boot' },
        { name: 'JDBC' },
        { name: 'REST APIs' },
      ],
    },
    {
      title: 'Database & Tools',
      skills: [{ name: 'MySQL' }, { name: 'Git' }, { name: 'Maven' }],
    },
  ],
}

export const skillsContent = {
  badge: 'How I work',
  heading: 'Turning ideas into useful software',
  description:
    'A practical, thoughtful process keeps each project focused on real user needs.',
  cards: [
    {
      number: '01',
      title: 'Understand',
      text: 'Clarify the problem, users, and requirements before choosing a solution.',
    },
    {
      number: '02',
      title: 'Plan',
      text: 'Break the work into manageable tasks and shape a reliable application design.',
    },
    {
      number: '03',
      title: 'Build',
      text: 'Develop clean backend features and connect them to useful data flows.',
    },
    {
      number: '04',
      title: 'Improve',
      text: 'Test the result, learn from feedback, and make the experience more dependable.',
    },
  ],
  endText: 'Small steps, thoughtful software.',
}

export const projects = [
  {
    id: 'smartflow',
    number: '01',
    badge: 'Flagship Project',
    title: 'SmartFlow',
    description:
      'An intelligent service request and technician matching platform. SmartFlow connects customers with technicians based on skills, availability, location, and ratings, while protecting each request from duplicate acceptance.',
    techTags: ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
    links: { github: '', demo: '' },
    isFlagship: true,
  },
]

export const internshipsList = []

export const leadershipList = []

export const softSkillsList = [
  {
    name: 'Problem Solving',
    icon: '🧩',
    desc: 'Break challenges down and work toward practical solutions.',
  },
  {
    name: 'Adaptability',
    icon: '🌱',
    desc: 'Stay curious and keep learning new tools and techniques.',
  },
  {
    name: 'Teamwork',
    icon: '🤝',
    desc: 'Communicate clearly and contribute to shared outcomes.',
  },
  {
    name: 'Ownership',
    icon: '🎯',
    desc: 'Take responsibility for reliable, useful work.',
  },
]

export const currentYear = new Date().getFullYear()

export const footerContent = {
  taglines: ['Java Full Stack Developer', 'Building practical software'],
  credential: 'Computer Science & Engineering',
  copyright: `© ${currentYear} Ranjithkumar P`,
}

const emailjsFallbacks = {
  serviceId: 'YOUR_EMAILJS_SERVICE_ID',
  templateId: 'YOUR_EMAILJS_TEMPLATE_ID',
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
}

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || emailjsFallbacks.serviceId,
  templateId:
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || emailjsFallbacks.templateId,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || emailjsFallbacks.publicKey,
}

emailjsConfig.isConfigured =
  Boolean(emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey) &&
  emailjsConfig.serviceId !== emailjsFallbacks.serviceId &&
  emailjsConfig.templateId !== emailjsFallbacks.templateId &&
  emailjsConfig.publicKey !== emailjsFallbacks.publicKey
