import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutPage from './components/AboutPage'
import AboutTeam from './components/AboutTeam'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutPage />
      </section>
      <AboutTeam />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
