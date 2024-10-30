import React, { useEffect, useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [showThought, setShowThought] = useState(false);
  const [showPanda, setShowPanda] = useState(false);

  const handleMouseEnter = () => setShowThought(true);
  const handleMouseLeave = () => setShowThought(false);

  const handleOwlClick = () => {
    setShowPanda(true);
  };

  return (
    <div className="login-page">
      <header className="header">
        <h1 className="logo">EcoMoo</h1>
        <p className="tagline">Adventure Awaits! Join us to save the planet.</p>
      </header>

      <div className="main-content">
        <div className="login-box">
          <div className="login-cat">
            <img src="cat.png" alt="Cute Cat" className="cat-img" />
          </div>
          <h2 className="login-title">Start Your Quest</h2>
          <form className="login-form">
            <div className="placeholder">Email</div>
            <input type="email" placeholder="Enter Email" className="input-field" />
            <div className="placeholder">Password</div>
            <input type="password" placeholder="Enter Password" className="input-field" />
            <button type="submit" className="login-button">Begin Adventure</button>
          </form>
          <p className="register-text">
            New to EcoMoo? <a href="/signup">Sign Up</a> and pick your eco-friend!
          </p>
        </div>

        <div className="eco-section">
          <div className="hippo-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src="hippo.png" alt="Hippo" className="hippo-img" />
            {showThought && <div className="hippo-thought">"Ready to make a difference?"</div>}
          </div>
          <div className="eco-text">
            <h3 className="eco-title">EcoMoo</h3>
            <p className="eco-description">Adventure for a Greener Tomorrow</p>
          </div>
        </div>
      </div>

      <div className="falling-leaves">
        <div className="leaf" />
        <div className="leaf" />
        <div className="leaf" />
        <div className="leaf" />
        <div className="leaf" />
      </div>

      <footer className="footer">
        <div id="three-container"></div>
        <div className="grass"></div>
        <img src="/bts-cats-cat.gif" alt="Walking Hippo" className="walking-hippo" />
      </footer>

      {/* Owl and Panda Section */}
      <div className="owl-section" onClick={handleOwlClick}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHXCCh1WnfYN6vHN3efQxByFBtFIuK3FSvag&s" alt="Owl" className="owl-img" />
        <div className="owl-text">Welcome to EcoMoo! Choose the Owl as your companion to start!</div>
      </div>

      {showPanda && (
        <div className="panda-container">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/033/494/202/small_2x/cute-chibi-panda-clipart-ai-generative-png.png" alt="Panda" className="panda-img" />
          <div className="panda-text">Choose Me!</div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
