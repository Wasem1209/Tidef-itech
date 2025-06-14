import React from "react";
import { Link } from "react-router-dom"
import {  FaComputer,  FaTrain,FaRavelry, FaEthernet, FaSearchengin} from 'react-icons/fa6';



const items = [
  {
    title: "A special summer Bootscamp is coming up in July, 2025.",
    name: "What to expert;",
    frontend:"Front-end Web Development",
    backend:"Back-end Web Development",
    link:"",
    Fullstack:"Full-stack Web Development",
    analysis:"Data Analytics / Management",
    cyber:"Cyber Security Science",
  }

  
  
]


import "./Home.css";
const Home = () => {
  return (
    <div className="home-con">
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
    
    
    
    
    <div className="trend">
      <div className="tren">
      <h4 className="trend">Trending Courses</h4>
      <ul>
        <li>FrontEnd Web Development</li>
        <li>BackEnd Web Development</li>
        <li>Artificial Intelligent</li>
        <li>Data Analysis</li>
        <li>UI/UX Designing</li>
        <li>Full-Stack Development</li>
      </ul>
      </div>
    </div>
   
    <section>
    <h2 style={{fontStyle:"italic"}}className="known">We are known for;</h2>
    </section>
     <section className="features">
     <div class="feature">
            <img src="/images/quick.png" alt="Feature" className="trust" />
            <h3 style={{color:'#3d358b'}}>Fast Performance</h3>
            <p>Experience lightning-fast processing with our technology services.</p>
        </div>
             <div className="feature">
              <img src="/images/shield.png" alt="security" className="security" />
              <h3 className="trust">Trusted</h3>
              <p>Your data is protected with top-tier security measures during our cost of collaboration and partnership.</p>
            </div>
            <div class="feature">
            <img src="/images/piece.png" alt="Feature" className="trust" />
            <h3 style={{color:'#3d358b'}}>Easy Integration</h3>
            <p>Seamlessly connect with your existing workflow.</p>
        </div>
        {/* support */}
            </section>
        
        

        <section className="upcomingeven-section" style={{marginBottom: "110px"}}>
          <h2 className="upcomingevent"><span style={{color:'#f35b04'}}>Up</span> <span style={{color:'#3d348b'}}>Coming</span> <span style={{color:'#f35b04'}}>Events</span></h2>
          <div className="upcoming-container">
            {items.map((items, index) => (
              <div className="upcomingevent-t" key={index}>
                <h4>{items.title}</h4>
                <p>{items.name}</p>
                <p>{items.frontend}</p>
                <p>{items.backend}</p>
                <p>{items.Fullstack}</p>
                <p>{items.analysis}</p>
                <p>{items.cyber}</p>
                
                </div>
            ))}
          </div>
          
        <Link to="https://www.linkedin.com/in/tidef-itech-6877b1362/?trk=flagship3_open_to_hiring_creation_upsell&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B1eY4yYMAQ5eQiBHmDkUGQw%3D%3D"><button className=" boo">Reserve Space for Me</button></Link>
       
        </section>
    </div>
  );
};

export default Home;