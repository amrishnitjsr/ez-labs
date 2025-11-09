import './AboutTeam.css';
import BackgroundTexture from './BackgroundTexture.svg';

const AboutTeam = () => {
  return (
    <section className="about-team" id="our-story">
      {/* Background Texture */}
      <div className="about-team-background">
        <img src={BackgroundTexture} alt="" className="about-team-texture" />
      </div>
      
      <div className="about-team-container">
        {/* Left Side - Building Icon and Sticky Note */}
        <div className="about-team-left">
          <div className="building-icon">
            <svg width="180" height="200" viewBox="0 0 180 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="40" y="40" width="100" height="160" fill="#E8B4A0" opacity="0.3"/>
              <rect x="60" y="80" width="25" height="30" fill="#D84315" opacity="0.4"/>
              <rect x="95" y="80" width="25" height="30" fill="#D84315" opacity="0.4"/>
              <rect x="60" y="120" width="25" height="30" fill="#D84315" opacity="0.4"/>
              <rect x="95" y="120" width="25" height="30" fill="#D84315" opacity="0.4"/>
              <path d="M 70 170 Q 90 150 110 170 L 110 200 L 70 200 Z" fill="#D84315"/>
            </svg>
          </div>
          
          <div className="sticky-note">
            <p className="sticky-note-text">
              Some craft films. Some build brands.<br/>
              Some curate art. We bring it all together - a<br/>
              collective of storytellers driven by one<br/>
              belief: every project deserves to be more<br/>
              than just a message; it should become a<br/>
              masterpiece.<br/><br/>
              From first spark to final frame, from raw<br/>
              ideas to timeless visuals - we shape stories<br/>
              that stay with you.
            </p>
          </div>

          <div className="branding-badge">
            <div className="badge-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#E91E63"/>
              </svg>
            </div>
            <span className="badge-number">2</span>
            <p className="badge-label">Branding Experts</p>
          </div>
        </div>

        {/* Right Side - Team Silhouettes */}
        <div className="about-team-right">
          <div className="team-silhouettes">
            <svg width="100%" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="100" cy="370" rx="40" ry="10" fill="#2C3E50" opacity="0.15"/>
              <ellipse cx="200" cy="370" rx="40" ry="10" fill="#2C3E50" opacity="0.15"/>
              <ellipse cx="300" cy="370" rx="45" ry="10" fill="#2C3E50" opacity="0.15"/>
              <ellipse cx="400" cy="370" rx="40" ry="10" fill="#2C3E50" opacity="0.15"/>
              <ellipse cx="500" cy="370" rx="40" ry="10" fill="#2C3E50" opacity="0.15"/>
              
              <g transform="translate(60, 80)">
                <ellipse cx="40" cy="25" rx="22" ry="25" fill="#2C3E50"/>
                <path d="M 20 55 Q 15 80 12 120 Q 10 160 8 200 Q 7 240 10 280 L 30 280 Q 32 240 33 200 Q 34 160 35 120 Q 38 80 40 55 Z" fill="#2C3E50"/>
                <path d="M 40 55 Q 42 80 45 120 Q 46 160 47 200 Q 48 240 50 280 L 70 280 Q 73 240 72 200 Q 71 160 68 120 Q 65 80 60 55 Z" fill="#2C3E50"/>
                <path d="M 20 80 Q 5 100 2 130 Q 0 145 5 155 Q 8 150 12 140 Q 18 120 22 100 Z" fill="#2C3E50"/>
                <path d="M 60 80 Q 75 100 78 130 Q 80 145 75 155 Q 72 150 68 140 Q 62 120 58 100 Z" fill="#2C3E50"/>
              </g>
              
              <g transform="translate(160, 90)">
                <ellipse cx="40" cy="25" rx="22" ry="25" fill="#2C3E50"/>
                <path d="M 22 55 Q 18 85 15 130 Q 13 180 12 230 Q 11 260 15 280 L 35 280 Q 37 250 38 220 Q 39 180 40 140 Q 42 90 43 55 Z" fill="#2C3E50"/>
                <path d="M 43 55 Q 44 90 46 140 Q 47 180 48 220 Q 49 250 51 280 L 71 280 Q 75 260 74 230 Q 73 180 70 130 Q 67 85 63 55 Z" fill="#2C3E50"/>
                <path d="M 22 85 Q 10 105 8 135 L 10 145 Q 15 140 20 125 Q 25 105 26 90 Z" fill="#2C3E50"/>
                <path d="M 63 85 Q 75 105 77 135 L 75 145 Q 70 140 65 125 Q 60 105 59 90 Z" fill="#2C3E50"/>
              </g>
              
              <g transform="translate(255, 70)">
                <ellipse cx="45" cy="28" rx="25" ry="28" fill="#2C3E50"/>
                <path d="M 25 60 Q 20 95 17 145 Q 15 195 14 245 Q 13 275 17 300 L 40 300 Q 42 265 43 230 Q 44 190 45 150 Q 47 100 48 60 Z" fill="#2C3E50"/>
                <path d="M 48 60 Q 49 100 51 150 Q 52 190 53 230 Q 54 265 56 300 L 79 300 Q 83 275 82 245 Q 81 195 78 145 Q 75 95 70 60 Z" fill="#2C3E50"/>
                <path d="M 25 95 Q 12 115 10 150 Q 8 165 13 175 Q 17 168 22 150 Q 28 120 29 100 Z" fill="#2C3E50"/>
                <path d="M 70 95 Q 83 115 85 150 Q 87 165 82 175 Q 78 168 73 150 Q 67 120 66 100 Z" fill="#2C3E50"/>
              </g>
              
              <g transform="translate(360, 85)">
                <ellipse cx="40" cy="25" rx="22" ry="25" fill="#2C3E50"/>
                <path d="M 23 55 Q 19 90 16 140 Q 14 190 13 240 Q 12 265 16 285 L 36 285 Q 38 255 39 225 Q 40 185 41 145 Q 43 95 44 55 Z" fill="#2C3E50"/>
                <path d="M 44 55 Q 45 95 47 145 Q 48 185 49 225 Q 50 255 52 285 L 72 285 Q 76 265 75 240 Q 74 190 71 140 Q 68 90 64 55 Z" fill="#2C3E50"/>
                <path d="M 23 90 Q 11 110 9 140 L 11 150 Q 16 145 21 130 Q 26 110 27 95 Z" fill="#2C3E50"/>
                <path d="M 64 90 Q 76 110 78 140 L 76 150 Q 71 145 66 130 Q 61 110 60 95 Z" fill="#2C3E50"/>
              </g>
              
              <g transform="translate(460, 75)">
                <ellipse cx="40" cy="25" rx="23" ry="26" fill="#2C3E50"/>
                <path d="M 21 55 Q 17 88 14 135 Q 12 185 11 235 Q 10 270 14 295 L 34 295 Q 36 260 37 225 Q 38 185 39 145 Q 41 93 42 55 Z" fill="#2C3E50"/>
                <path d="M 42 55 Q 43 93 45 145 Q 46 185 47 225 Q 48 260 50 295 L 70 295 Q 74 270 73 235 Q 72 185 69 135 Q 66 88 62 55 Z" fill="#2C3E50"/>
                <path d="M 21 88 Q 8 108 6 138 Q 5 153 10 163 Q 14 156 19 138 Q 24 113 25 93 Z" fill="#2C3E50"/>
                <path d="M 62 88 Q 75 108 77 138 Q 78 153 73 163 Q 69 156 64 138 Q 59 113 58 93 Z" fill="#2C3E50"/>
              </g>
            </svg>
            
            <div className="team-label film-makers">
              <span className="label-text">Film Makers</span>
            </div>
            
            <div className="team-badge-group">
              <div className="team-badge">
                <div className="badge-icon-small">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" fill="#00BCD4"/>
                  </svg>
                </div>
                <div className="badge-icon-small">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" fill="#FFC107"/>
                  </svg>
                </div>
                <span className="badge-number-small">3</span>
              </div>
            </div>
            
            <div className="team-label art-curators">
              <span className="label-text">Art Curators</span>
            </div>
          </div>

          <div className="team-cta">
            <p className="team-cta-text">
              Take a closer look at the stories V bring to life.
            </p>
            <button className="view-portfolio-btn">View Portfolio</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
