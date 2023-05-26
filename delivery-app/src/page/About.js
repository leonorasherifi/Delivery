import React from "react";
import "./about.scss";


const About = () => {
  const paragraphOne =
    "Hellooooou! We are the Prishtina Food Delivery, a small delivery service in Prishtina."+
    "In the current evolution, we have thought about the best way to help people shop,"+
    "especially those who have difficulties shopping for themselves. ";


  const paragraphTwo =
    "We are here to offer you the best help we can. We buy goods from wholesalers from nearby"+
    "and we deliver them directly to your dorsteps."+
    "We are understaffed for now but we are thinking of expanding in the future due to the help"+
    "of other companies so that everyone is able to enjoy  the service.Stay tuned!
    "Email us for any question or simply getting connected!";

  return (
    <div className='about-content'>
      <p> {paragraphOne} </p>
      <br />
      <p> {paragraphTwo} &#128522;</p>
      <p>
        <a
          href='mailto:gentiana.mejzini@student.uni-pr.edu?subject=Inquiry About Seattle Shop Delivery'
          style={{ color: "red" }}
        >
          Email us
        </a>{" "}
        for inquiries or simply getting connected!
      </p>
    </div>
  );
};

export default About;
