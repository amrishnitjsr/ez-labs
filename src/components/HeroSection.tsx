import './HeroSection.css';
import BackgroundTexture from './BackgroundTexture.svg';
import LogoPng from '../assets/logo.png';

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Background Texture */}
      <div className="background-texture">
        <img src={BackgroundTexture} alt="" className="texture-svg" />
      </div>

      {/* Logo Section with Mandala */}
      <div className="logo-container">
        <div className="mandala-wrapper">
          <img 
            src="/image.png" 
            alt="Mandala Background" 
            className="mandala-image"
          />
          <img 
            src={LogoPng} 
            alt="V Films Logo" 
            className="vfilms-logo"
          />
        </div>
      </div>

      {/* Tagline Section */}
      <div className="tagline-container">
        <div className="tagline-box">
          <p className="tagline-text">
            Varnan is where stories find
             their voice and form
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-container">
        <h2 className="services-text">
          Films . Brands . Art
        </h2>
      </div>

      {/* Description Section */}
      <div className="description-container">
        <p className="description-text">
          Since 2009, V've been telling stories - stories of people,
          their journeys, and the places that shape them.
          Some begin in polished boardrooms, others in humble
          village squares. But every story starts the same way - by
          listening with intention. V believes it takes trust, patience,
          and an eye for the unseen to capture what truly matters.
          V doesn't just tell stories - V honors them.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
