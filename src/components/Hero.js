import { FaExternalLinkAlt } from "react-icons/fa";

const Hero = (props) => {
  return (
    <div className="hero-container">
      <div className="hero-text-container">
        <div className="timestamp"></div>
        <div className="greeting">Welcome to team</div>
        <h1 className="heading">Devkraft</h1>
        <div className="link"></div>
      </div>
    </div>
  );
  // return (
  //   <div className="hero-container event">
  //     <div className="hero-text-container">
  //       <div className="timestamp">10 DEC 21</div>
  //       <div className="greeting">Join us at</div>
  //       <div className="heading">Oil Painting Workshop</div>
  //       <div className="link">
  //         Learn More <FaExternalLinkAlt />
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Hero;
