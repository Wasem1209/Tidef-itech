import React from "react";
import "./About.css"; 


const boardMembers = [
    {
      name: "Engr. Okeke Eriba Elijah",
      title: "Founder, Tidef i-tech",
      image: "/images/Okeke.jpg",
    },
    {
      name: "Lina Eriba ",
      title: "Co-Founder, Tidef i-tech",
      image: "/images/lina.jpg",
    },
    
  ];

const teamMembers = [
    
    {
      name: "Kater Kenneth",
      title: "Managing Director",
      image: "/images/Ken.jpg",
    },

    {
      name: "Rapheal Oryiman",
      title: "Operation Support/Developer",
      image: "/images/devo.jpg"
    },

    {
      name: "Acham Kenneth Omadi",
      title: "Operations Support",
      image: "/images/Omadi.jpg",
    },

    {
        name: "Wasem Philip",
        title: "Chief Technology Officer",
        image: "/images/22555.jpg",
      },
  ];

const About = () => {
  return (
    <div className="about-page">
        <p className="about-intro">
  <strong><em>At Tidef I-tech,</em></strong> we are committed to leveraging technology to drive innovation, 
  build successful careers, and provide top-tier digital services. Our goal is to 
  advance society through technology, empowering individuals and businesses with 
  the tools they need to thrive in the digital era.
</p>

      {/* Vision & Mission */}
      <section className="about-page" style={{borderBottom: "150px"}}>
       
      </section>

      <section className="about-sectio">
      <h2 style={{marginRight:"20px", color:"#f35b04"}}>Our Vision</h2>
        <p>
          To be a leading technology hub that fosters innovation, career development, and digital transformation.
        </p>
        <h2 className="h2-m">Our Mission</h2>
        <ul>
          <li>Empower individuals and businesses with cutting-edge digital solutions.</li>
          <li>Provide career-building opportunities through mentorship and skills training.</li>
          <li>Bridge the gap between technology and society.</li>
          <li>Deliver top-tier software and digital services.</li>
        </ul>
      </section>

      {/* Objectives */}
      <section className="about-ob" style={{borderBottom: "150px"}}>
        <h2 className="h2-ob">Our Objectives</h2>

        <div className="objective">
          <h3>Technology Innovation</h3>
          <p>AI, Blockchain, Fintech, Cloud Computing, and Cybersecurity advancements.</p>
        </div>

        <div className="objective">
          <h3>Career Building & Skill Development</h3>
          <p>Training, mentorship, internships, and job placements in tech.</p>
        </div>

        <div className="objective">
          <h3>Software & Digital Services</h3>
          <p>Web & app development, IT consultancy, e-commerce solutions, and cloud security.</p>
        </div>

        <div className="objective">
          <h3>Advancing Society with Technology</h3>
          <p>Tech training for rural areas, Agri-Tech, Women in Tech, and sustainable solutions.</p>
        </div>
      </section>
      
      {/* Meet Our Team */}
      <section className="board-section" style={{marginBottom: "110px"}}>
        <h2 className="boar-of"><span>Board of Director's</span> 
        </h2>
        <div className="board-container">
          {boardMembers.map((member, index) => (
            <div className="board-member" key={index}>
              <img src={member.image} alt={member.name} className="board-image" />
              <h4>{member.name}</h4>
              <p>{member.title}</p>
            </div>
          ))}
        </div>
      </section>
      

      {/* Meet Our Team */}
      <section className="team-section">
        <h2 className="mot"><span>Meet Our Team</span></h2>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.image} alt={member.name} className="team-image" />
              <h4>{member.name}</h4>
              <p>{member.title}</p>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default About;