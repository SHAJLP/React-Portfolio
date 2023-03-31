import React from 'react';
import profileimage from "../../assets/Large/Profile/Profile_Pic.png";
function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i>
        </div>
        <p>
        Hello!
        My name is Sophia Altaf.  I am currently studying Full Stack Web Developing at the University of Birmingham, UK.  I have a background in financial sales and insurance.  
        </p>
        <p>
        I live in a village in the West Midlands, with my partner and two cats.
        </p>
      </div>
    </section>
  );
}

export default About;
