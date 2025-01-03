import React from "react";
import "./Services.css"

const ServicesPage = () => {
  const services = [
    {
      icon: "/images/scissorIcon.png",
      name: "Haircuts",
      description: "Signature haircut which includes both shears and clipper work to fit your preference. Includes hair wash, razor neck shave and style.",
    },
    {
      icon: "/images/scissorIcon.png",
      name: "Beard",
      description: "Well groomed look that includes hot towels, hot lather, razor shave, beard oil. Also, adding a massage to face, head and shoulders to elevate your experience.",
    },
    {
      icon: "/images/scissorIcon.png",
      name: "Head Shave",
      description: "Performed with a straight razor that includes hot lather, hot towels, a straight razor neck shave, after shave and moisturizer.",
    },
    {
      icon: "/images/scissorIcon.png",
      name: "Beard Shave",
      description: "Precision clean shave, ensuring a polished and refreshed appearance. Includes hot lather, straight razor shave and moisturizer with massage.",
    },
    {
      icon: "/images/scissorIcon.png",
      name: "Designs",
      description: "Transform your haircut into a true work of art with our custom hair designs. Whether you have a specific pattern in mind or need inspiration, we’ll craft a unique style tailored to your vision.",
    },
    {
      icon: "/images/scissorIcon.png",
      name: "Kids Haircuts",
      description: "Treat your little ones to a delightful and expertly crafted Kids Haircut service. Haircut designs available.",
    },
   ];

  return(
    <div className="servicesContainerPage">
    {services.map((service, index) => 
      <div className="service-item" key={index}>
         <img
            src={service.icon}
            alt="barberpole image"
            className="service-icon"
          />
        <h2>{service.name} </h2>
        <p>{service.description}</p>
        </div>
    )}
  </div>
  ) 
  
};

export default ServicesPage;
