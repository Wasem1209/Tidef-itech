import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services"
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Courses from "./components/Courses";
import { FaFacebookF, FaXTwitter, FaTelegram,  FaLinkedinIn, FaWhatsapp, FaEnvelope } from 'react-icons/fa6';





const App = () => {
  return (
    <Router>
      <div>
        {/* Header */}
        <header className="header">
          <div className="logo-section">
            <img src="/images/tidef.png" alt="Tidef Itech" className="logo" />
            <div className="branding">
              <h1>Tidef i<span className="i-tech">Te</span>ch</h1>
              <p>Advance with Technology</p>
            </div>
          </div>
         {/* Dropdown Menu */}
         <nav className="menu">
            <div className="dropdown">
          <button className="dropdown-btn">&#9776;
          </button>
          <div className="dropdown-content">
            <ul className="dropdowqn-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            </div>
          </div>
            </nav>
        </header>

  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/courses" element={<Courses />} />

          <Route path="*" element={<Navigate to="/" />} />
          
        </Routes>
         <div className="community">
              <p className="cha">Join our community channel on telegram to interact with experts, liked minded people and stay updated day-to-today skills building and sustaining individuals!</p>
              <a href="https://t.me/+0QlN4ojRvxVmMWRk" target="_blank" rel="noopener noreferrer" className="social-circle telegram">
            <FaTelegram />
          </a>
            </div>
        <h4 className="need">Need Help?</h4>
    <section className="support">
      <p>Reach out to our support team</p>
      <a href="mailto: tidefitech@gmail.com">tidefitech@gmail.com</a>
            <p>Phone: +234 9027772815</p>
            <p>Address: No. 5, Sevida Plaza, opposite Corporate Affairs Commission, George Akume Way, New GRA, Makurdi,Benue State </p>
    </section>
       
        <footer className="footer">
          <div className="social-links">
            <p className="pr">You can follow us on our social media handles to stay connected with latest updates!</p>
            <div className="social-icons">
  <a href="https://www.facebook.com/TidefiTech" target="_blank" rel="noopener noreferrer" className="social-circle facebook">
    <FaFacebookF />
  </a>
  <a href="https://x.com/tdefITech?t=WGsAkIyNTJxXN6rceHiQWA&s=09" target="_blank" rel="noopener noreferrer" className="social-circle x">
    <FaXTwitter />
  </a>
  
  <a href="https://www.linkedin.com/in/tidef-itech-6877b1362/?trk=flagship3_open_to_hiring_creation_upsell&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B1eY4yYMAQ5eQiBHmDkUGQw%3D%3D" target="_blank" rel="noopener noreferrer" className="social-circle linkedin">
    <FaLinkedinIn />
    
  </a>
  <a href="https://wa.me/2349027772815" target="_blank" rel="noopener noreferrer" className="social-circle whatsapp">
    <FaWhatsapp />
  </a>
</div>
          </div>
          <div className="footer-links">
    <Link to="/privacy-policy">Privacy Policy</Link>
      <span>|</span>
      <a href="/terms-and-conditions">Terms and Conditions</a>
    </div>
    <p className="footer-copy"><em>© 2025 Tidef I-tech. All rights reserved.</em></p>
        </footer>
      
        
      </div>
    </Router>
  );
};

export default App;