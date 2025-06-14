import {  FaWhatsapp, FaEnvelope, FaGraduationCap } from "react-icons/fa6";
import "./Services.css";

const Services = () => {
  return(
    <>
    <section className="our-serv">
      <h4 className="serv">Our services</h4>
      <p>Get the most and best of our services, we ensure our customer's satisfactions as it is priorities, not just that, the time rate at which we deliver our services is superb!</p>
    </section>
    <h4 className="offer">What we offer!</h4>
    <p className="pr">You are always welcome at Tidef iTech, we offer the following services at affordable rate</p>
     
    
    <div className="services">
      <div className="graphics">
        <a href=""><h2>Graphics designs</h2></a>
        <p>Get your standout designs for all activities, from logos to brochures,with our expert graphics design services that brings your brand to life with creativity and precision.</p>
      </div>
      <div className="grap-p">
        <img src="/images/4213056.png" alt="graphic icon" className="graph-ic" />
      </div>
    </div>
   
    <div className="services">
    <div className="grap-p">
        <img src="/images/2645742.png" alt="graphic icon" className="graph-ic" />
      </div>
      <div className="graphics">
        <a href=""><h2>Web Application Development</h2></a>
        <p>Take your business to the next level with our scalable and secure web application Development services, tailored to meet your unique needs and drive results.</p>
      </div>
    </div>
    <div className="services">
      <div className="graphics">
        <a href=""><h2>Cyber Cafe</h2></a>
        <p>Get high-speed internet access and services as both your online and offline activities becomes more easier.</p>
      </div>
      <div className="grap-p">
        <img src="/images/4661316.png" alt="graphic icon" className="graphic" />
      </div>
    </div>
    <div className="services">
    <div className="grap-p">
        <img src="/images/6188094.png" alt="graphic icon" className="graph-ic" />
      </div>
      <div className="graphics">
        <a href=""><h2>Website Development </h2></a>
        <p>Launch your online presence with our custom websites Development services, designed to drive engagement, conversion, and growth for your business with responsive and user friendly design.</p>
      </div>
      
    </div>
    <div className="services">
    
      <div className="graphics">
      <a href=""><h2>Work Space</h2></a>
        <p>Boost your productivity and collaboration with our comfortable, flexible, and well-equipped workspaces, designed to help you acheive your goals and succeed.</p>
      </div>
      <div className="grap-p">
        <img src="/images/3063849.png" alt="Work space icon" className="graphic" />
      </div>
    </div>
    <div className="services">
    <div className="grap-p">
        <img src="/images/1625576.png" alt="graphic icon" className="graph-ic" />
      </div>
      <div className="graphics">
      <a href=""><h2>E-payment</h2></a>
        <p>Make secure,fast, and convenient online payment with our e-payment services, designed to simplify transaction and enhance your digital experience.</p>
      </div>
    </div>
    <div className="services">
    
      <div className="graphics">
      <a href=""><h2>Internet Services</h2></a>
        <p>Stay connected with our reliable, fast, and uninterupted internet services, perfect for work, entertainment, or staying in touch with loved ones.</p>
      </div>
      <div className="grap-p">
        <img src="/images/8445962.png" alt="graphic icon" className="graphic" />
      </div>
    </div>
    <div className="services">
      <div className="grap-p">
        <img src="/images/8976488.png" alt="" className="graphic" />
      </div>
      <div className="graphics">
        <a href=""><h2>Consultation</h2></a>
        <p>Get expert advice and personalized solutions with our consultation services, design to help you navigate challenges and achieve your goals with confidence and clarity.</p>
      </div>
    </div>
    </>
  );
};

export default Services;