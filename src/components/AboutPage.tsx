import './AboutPage.css';
import BackgroundTexture from './BackgroundTexture.svg';
import ImageCard1 from '../assets/image_card1.png';

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Background Texture */}
      <div className="about-background">
        <img src={BackgroundTexture} alt="" className="about-texture" />
      </div>

      {/* Stats Card 1 - Projects */}
      <div className="stats-card card-1">
        <h2 className="stats-number">85+</h2>
        <p className="stats-label">Projects</p>
      </div>

      {/* Stats Card 2 - Happy Clients */}
      <div className="stats-card card-2">
        <h2 className="stats-number">50+</h2>
        <p className="stats-label">Happy Clients</p>
      </div>

      {/* Stats Card 3 - Experts Team */}
      <div className="stats-card card-3">
        <h2 className="stats-number">10+</h2>
        <p className="stats-label">Experts Team</p>
      </div>

      {/* Sun Image */}
      <div className="sun-image-container">
        <img src="/sun.png" alt="Sun Mountain" className="sun-image" />
      </div>

      {/* Quote Text */}
      <div className="quote-container">
        <p className="quote-text">
          Every project is more than just a brief - it's a new chapter waiting to be written.
          Together, we've crafted tales that inspire, connect, and endure.
        </p>
      </div>

      {/* Montage Text */}
      <div className="montage-text-container">
        <p className="montage-text">
          A montage of familiar faces and names.
        </p>
      </div>

      {/* Stories Description */}
      <div className="stories-description-container">
        <p className="stories-description-text">
          Some stories come from the biggest names. Others begin with bold, rising voices.
          We've been fortunate to walk alongside both - listening, creating, and building stories that matter.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
