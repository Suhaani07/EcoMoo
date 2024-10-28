import React, { useEffect } from "react";
import "./LoginPage.css";

function LoginPage() {
  useEffect(() => {
    // Any additional JavaScript logic can go here
  }, []);

  return (
    <div className="login-page">
      <header className="header">
        <h1 className="logo">EcoMoo</h1>
      </header>

      <div className="main-content">
        <div className="login-box">
          <div className="login-cat">
            <img src="cat.png" alt="Cute Cat" className="cat-img" /> {/* Add cat image */}
          </div>
          <h2 className="login-title">Log in</h2>
          <form className="login-form">
            <div className="placeholder">Email</div>
            <input type="email" placeholder="Email" className="input-field" />
            <div className="placeholder">Password</div>
            <input type="password" placeholder="Password" className="input-field" />
            <button type="submit" className="login-button">Log In</button>
          </form>
          <p className="register-text">
            Not Registered? <a href="/signup">Sign In</a>
          </p>
        </div>

        <div className="eco-section">
          <img src="hippo.png" alt="Hippo" className="hippo-img" /> {/* Add hippo image */}
          <div className="moo-text">Moo Moo</div>
          <div className="eco-info">
            <h1 className="eco-title">EcoMoo</h1>
            <p className="eco-subtitle">Adventure for a Greener Tomorrow</p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div id="three-container"></div> {/* Container for Three.js scene */}
        <div className="grass"></div>
        <img src="/bts-cats-cat.gif" alt="Walking Hippo" className="walking-hippo" /> {/* Add GIF */}
      </footer>
    </div>
  );
}

export default LoginPage;