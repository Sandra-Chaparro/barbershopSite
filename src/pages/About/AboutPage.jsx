import React from "react";
import Layout from "../Layout/Layout";
import "./About.css"

export default function AboutPage () {
  return (
    <Layout>
          <h3 className="aboutPageTitle">About me</h3>
  <div className="about-container">

    <div className="about-text">
      <p className="aboutPara"> I’m thrilled to introduce myself to you. Cutting hair isn’t just a job for me; my
       true passion, and I can’t imagine doing anything else. <br></br><br></br>
       With over two decades of experience, I have honed my skills to provide you
        with the highest quality grooming services.<br></br><br></br>
Book your seat in the chair and let your confidence stand out. This is more than a cut; it’s your signature look.

      Step into a world of expert craftsmanship, tailored to suit your unique personality. 
      </p>
      </div>
      <div className="about-image">
        <img src="/images/aboutImg.jpg"></img>
        <button
          className="bookApptButton"
          onClick={() =>
            (window.location.href =
              "https://book.squareup.com/appointments/dfgljw70mpc8dx/location/9PV6DKFGH39H7/services")
          }
        >
          Book Appointment
        </button>
      </div>
    
    </div>
</Layout>
  );
};

