import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutTeam from './components/AboutTeam'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutTeam />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
