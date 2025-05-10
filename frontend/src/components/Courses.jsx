import React from 'react';
import './Courses.css';
import { FaTelegram, FaEnvelope } from 'react-icons/fa6';



const Coursepage =() =>{
const course = [
  {
    name: 'Computer Appreciation', color:'#4b77be', link: 'https://forms.gle/MPofd684DRdQTSVA6' },
    {
      name: 'Desktop Publishing ',color:'#4b77be', link: 'https://forms.gle/MPofd684DRdQTSVA6'
    },
    {
      name:'Data Anlysis', color:'#4b77be', link: 'https://forms.gle/MPofd684DRdQTSVA6', 
    },
    {
      name:'FrontEnd Development', color:'#4b77be', link: 'https://forms.gle/MPofd684DRdQTSVA6'
    },

    {
      name:'BackEnd Development', color:'#4b77be', link:'https://forms.gle/MPofd684DRdQTSVA6'
    },

    {
      name:'Full-Stack Development', color:'#4b77be', link:'https://forms.gle/MPofd684DRdQTSVA6'
    },

    {
      name: 'Cyber Security', color:'#4b77be', link:'https://forms.gle/MPofd684DRdQTSVA6'
    }
];

return (
  <div style={{ padding: '2rem' }}>
    <h2 style={{ textAlign: 'center', color:'#f35b04' }}>Available Courses</h2>
    <p style={{ textAlign :'center', marginBottom:'2rem'}}>At <strong className='def'><em>Tidef iTech</em></strong>, our courses are designed to empower you with cutting-edge 
    knowledge and hands-on skills that meet global standards. Whether you are just starting or looking to upgrade, our training programs will ignite your path to success.</p>
    <p className='click'> Click on our Professional and Lifelong Learning Courses to complete your registration! </p>
    <div className="courses-container">
      {course.map((course, index) =>(
        <button
        key={index}
        className="course-btn"
        style={{ backgroundColor: course.color }}
        onClick={() => window.open(course.link, '_blank')}>
          {course.name}
        </button>
      ))}
    </div>
    
  </div>
);


};
export default Coursepage;