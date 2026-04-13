import Hero from '@/features/hero/Hero'
import About from '@/features/about/About'
import Skills from '@/features/skills/Skills'
import Projects from '@/features/projects/Projects'
import Talks from '@/features/talks/Talks'
import Contact from '@/features/contact/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Talks />
      <Contact />
    </>
  )
}
