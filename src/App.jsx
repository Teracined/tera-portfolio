import { usePremiumMotion } from './hooks/usePremiumMotion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Strengths from './components/Strengths'
import Contact from './components/Contact'

export default function App() {
  usePremiumMotion()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Strengths />
        <Contact />
      </main>
    </>
  )
}
