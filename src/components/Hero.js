// src/components/Hero.js
import React from "react";
import { Container } from "reactstrap";
import coverImage from "../assets/university-cover.png"; // Replace with your image path or use an external URL

const Hero = () => (
  <div className="hero-section">
    <Container className="text-center">
      {/* Cover Image */}
      <img
        src={coverImage} // Use external URL like "https://example.com/image.jpg" if not using a local image
        alt="University Cover"
        className="img-fluid mb-4 rounded"
        style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
      />
      
      {/* University Title */}
      <h1>Oktackle University</h1>
      
      {/* Attribution Text */}
      <p className="text-muted">Made by Sohini</p>
    </Container>
  </div>
);

export default Hero;



// import React from "react";

// import logo from "../assets/logo.svg";

// const Hero = () => (
//   <div className="text-center hero my-5">
//     <h1 className="mb-4">NovaEd University</h1>
//   </div>
// );

// export default Hero;
