import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Overview from './components/Overview.jsx'
import Executor from './components/Executor.jsx'
import Client from './components/Client.jsx'
import Team from './components/Team.jsx'
import PMC from './components/PMC.jsx'
import Gallery from './components/Gallery.jsx'
import Timeline from './components/Timeline.jsx'
import Testimonial from './components/Testimonial.jsx'
import Certificate from './components/Certificate.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Executor />
        <Client />
        <Team />
        <PMC />
        <Gallery />
        <Timeline />
        <Testimonial />
        <Certificate />
      </main>
      <Footer />
    </div>
  )
}
