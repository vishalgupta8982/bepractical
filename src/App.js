 
import "./App.css";
import logo from "./Images/cyber-security.png";
import main from "./Images/main.png";
import React from "react";
import { useSpring, animated } from "react-spring";
function App() {
 const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1500 },
  });
 const animationImage = useSpring({
   translateY: 0,
   opacity: 1,
   from: { translateY: 500,opacity:0 },
   config: { duration: 1000 },
 });
  return (
    <div>
      {/* code for header */}
      <header>
        <nav className="navbar">
          <div>
            <img className="logo" src={logo} alt="logo" />
            <a className="navbar-brand" href="/">
              BePractical
            </a>
          </div>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Try Now</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li className="Login">
              <a className="log" href="/Login">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* code for home */}

      <div className="home">
       <animated.div style={animationProps} className="text">
          <h1 className="wc">Welcome to our website!</h1>
          <h1 className="wc">BePractical !</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pharetra tellus enim, sit amet sollicitudin urna lobortis vel.
          </p>
          <a className="start" href="/Login">
            Start Free now
          </a>
        </animated.div>
        <animated.img
          style={animationImage}
          className="home_img"
          src={main}
          alt="logo"
        />
      </div>

      {/* code for about screen */}
      <div className="about"></div>
    </div>
  );
}

export default App;
