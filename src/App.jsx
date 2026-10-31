import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Internships from './components/Internships'
import Leadership from './components/Leadership'
import Navbar from './components/Navbar'
import Preloader from './components/Preloader'
import Projects from './components/Projects'
import Services from './components/Services'
import SoftSkills from './components/SoftSkills'
import SplashCursor from './components/SplashCursor'
import TechnicalSkills from './components/TechnicalSkills'
import {
  internshipsList,
  leadershipList,
} from './data/portfolioData'

function App() {
  return (
    <>
      <SplashCursor
        VELOCITY_DISSIPATION={3}
        SPLAT_FORCE={3500}
        COLOR_UPDATE_SPEED={18}
        COLOR="#ffffff"
        RAINBOW_MODE={false}
      />
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Services />
      <Projects />
      {internshipsList.length > 0 && <Internships />}
      {leadershipList.length > 0 && <Leadership />}
      <SoftSkills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
