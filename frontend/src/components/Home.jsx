import React from "react";
import { Link } from "react-router-dom"
import { FaTelegram, FaEnvelope, FaCircleNotch, FaStackExchange, FaComputer, FaDesktop, FaTrain, FaAlignJustify, FaAvianex, FaAnchorCircleCheck, FaAndroid, FaRavelry, FaEthernet, FaDartLang, FaSearchengin} from 'react-icons/fa6';

import "./Home.css"; // Link to your CSS file
const Home = () => {
  return (
    <>
    <section className="section-we>">
      <h1 className="h1"><em>Welcome to Tidef iTech!</em></h1>
      <p><strong><em>Tidef I-Tech Solution</em></strong> is a planned technology company that is anticipated to serve individuals and organizations with Information Technology services, digital skills and modern digital innovation.</p>
    </section>
    <div className="home-container">
        <div className="hero-content">
          <p> <span style={{color:"#f35b04", fontSize:"25px"}}><em>Tidef itech</em></span> is a company known for providing a learning community and services for individuals and organizations..</p>
          <div className="cta-btn">
          <Link to="/Services">
          <button className="cta">Explore Services</button> 
          </Link>
          <Link to="/courses">
        <button className="cta">Our courses</button>
        </Link>
        </div>
        </div>
        
    </div>
    {/* Featueres */}
   <section className="fe">
    <h4 className="serv">Featured</h4>
    </section>
    <div className="parent-div">
    <div className="section-1">
    <img src="/images/tch.jpeg" alt="software-development" className="circle-image" />
    <h4 className="na-course">Technology</h4>
    <a href="" target="_blank" rel="noopener noreferrer" className="computer">
    <FaComputer/>
  </a>
   <p> <span className="na-course">Online and Physical classes</span></p>
    <p className="pr">Unlock the power of technology! Explore our courses in Computer Appreciation, Desktop Publishing, Graphics Design, Software Development, UI/UX Design, and Information Technology. Discover the latest tools and techniques to succeed in the digital age.</p>
   </div>
    
    <div className="section-2">
      <img src="/images/ed.jpeg" alt="educational" className="circle-image" />
      <h4 className="na-course">Education and Training</h4>
      <a href="" target="_blank" rel="noopener noreferrer" className="computer">
    <FaTrain/>
  </a>
      <p className="pr">Enhance your teaching skills! Our CBT Training course will provide you with the knowledge and techniques to create engaging and effective learning experiences. Learn how to design and deliver high-quality training programs.</p>
    </div>
    <div className="section-3">
      <img src="/images/tat.jpeg" alt="data analysis and finance" className="circle-image" />
      <a href="" target="_blank" rel="noopener noreferrer" className="computer">
    <FaSearchengin/>
  </a>
      <h4 className="na-course">Data Analysis and Finance</h4>
      <p className="pr">Make informed decisions with data! Our Excel course will equip you with the skills to analyze and interpret data, driving business growth and success. Unlock the power of data analysis and take your career to new heights.</p>
    </div>
     <div className="section-4">
      <img src="/images/ai.jpeg" alt="artificial-intelligence" className="circle-image" />
      <h4 className="na-course">Artificial Intelligence</h4>
      <a href="" target="_blank" rel="noopener noreferrer" className="computer">
    <FaEthernet/>
  </a>
      <p className="pr">
      Explore the future of intelligence! Our AI course will introduce you to the latest concepts and technologies in artificial intelligence. Discover the possibilities and applications of AI in various industries.</p>
      </div>
    </div>
    <section className="top-c">
      <h4 className="trend">Trending Courses</h4>
      <ul>
        <li>FrontEnd Development</li>
        <li>BackEnd Development</li>
        <li>Artificial Intelligent</li>
        <li>Data Analysis</li>
        <li>UI/UX Designing</li>
        <li>Full-Stack Development</li>
      </ul>
    </section>
   
    
     <section className="features">
     <div class="feature">
            <img src="/images/quick.png" alt="Feature" className="trust" />
            <h3>Fast Performance</h3>
            <p>Experience lightning-fast processing with our technology.</p>
        </div>
             <div className="feature">
              <img src="/images/shield.png" alt="security" className="security" />
              <h3 className="trust">Trusted</h3>
              <p>Your data is protected with top-tier security measures.</p>
            </div>
            <div class="feature">
            <img src="/images/piece.png" alt="Feature" className="trust" />
            <h3>Easy Integration</h3>
            <p>Seamlessly connect with your existing workflow.</p>
        </div>
        {/* support */}
            </section>
          
    </>
  );
};

export default Home;