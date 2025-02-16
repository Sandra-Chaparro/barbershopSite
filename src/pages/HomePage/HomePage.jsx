import { Helmet } from "react-helmet";
import "./HomePage.css"; // Import the CSS file
import  ImageSlider from "./ImgSlider/ImageSlider"
import Review from "./ Reviews/Reviews"
import {useLoadScript  } from '@react-google-maps/api';
import React, {useRef} from "react";
import GoogleMapReact from "google-map-react";

const IMAGES = [
  { url: "client1.jpg", alt: "Client 1 - Haircut" },
  { url: "client10.jpg", alt: "Client 2 - Beard" },
  { url: "client2.jpg", alt: "Client 3 - Haircut and Beard" },
  { url: "client3.jpg", alt: "Client 1 - Haircut" },
  { url: "client4.jpg", alt: "Client 2 - Beard" },
  { url: "client5.jpg", alt: "Client 3 - Haircut and Beard" },
  { url: "client7.jpg", alt: "Client 1 - Haircut" },
  { url: "client8.jpg", alt: "Client 2 - Beard" },
  { url: "client9.jpg", alt: "Client 3 - Haircut and Beard" },
]
const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '400px',
};
const center = {
  lat: 33.101060,  // default latitude
  lng: -96.652077, // default longitude
};

const AnyReactComponent = ({ text }) => (
  <div style={{ color: "red", fontWeight: "bold" }}>{text}</div>
);

export default function HomePage() {
  const scrollContainer = useRef(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
    console.log("API Loaded:", map, maps);
  };

  const defaultProps = {
    center: { lat: 33.101087, lng: -96.652313 },   
    zoom: 15,
  };


  const handleScroll = (direccion) =>{
    if(direccion == "left"){
      scrollContainer.current.scrollBy({left: -300, behavior: "smooth"})
    }
    else{
      scrollContainer.current.scrollBy({left: 300, behavior: "smooth"})
    }
  }
  const services = [
    {
      imgSrc: "/images/clien11.jpg",
      title: "Haircut"
    },
    {
      imgSrc: "/images/client3.jpg",
      title: "Beard Trim"
    }
    // {
    //   imgSrc: "/images/client2.jpg",
    //   title: "Head Shave"
    // },
    // {
    //   imgSrc: "/images/client9.jpg",
    //   title: "Design"
    // },
    // {
    //   imgSrc: "/images/client1.jpg",
    //   title: "Kids haircut"}
    // ,
    // {
    //   imgSrc: "/images/client1.jpg",
    //   title: "Beard Shave"
    // },
  ]

  return (
    <div className="homepage bg-slate-950">
      <Helmet>
        <title>
          Barber in Allen, Texas. | Men haircuts and Beard Grooming in
          North Dallas.
        </title>
        <meta
          name="description"
          content="Discover the best barbershop in North Dallas. Padour Barbershop offers expert haircuts, beard grooming, to make you look and feel your best."
        />
      </Helmet>
      <div className="HeroSection">
        <button
          className="BookApptButton"
          onClick={() =>
            (window.location.href =
              "https://book.squareup.com/appointments/dfgljw70mpc8dx/location/9PV6DKFGH39H7/services")
          }
        >
          Book Appointment
        </button>
        <h1 className="ParaHeroSection">Barber in Allen, TX</h1>
        <p className="SubParaHeroSection">Accepting new clients.</p>
      </div>

      <div className="servicesHPContainer bg-slate-700">
        <h2 className="servicesHPTitle">Barbershop Services</h2>
        <div className="servicesHPGrid">
          <div className="serviceHPItem">
          <img src="/images/scissorIcon.png" alt="services bullet" className="serviceIcon"></img>
            <h3>Haircuts</h3>
          </div>
          <div className="serviceHPItem">
          <img src="/images/scissorIcon.png" alt="services bullet" className="serviceIcon"></img>
            <h3>Beard</h3>
            
          </div>
          <div className="serviceHPItem">
          <img src="/images/scissorIcon.png" alt="services bullet" className="serviceIcon"></img>
            <h3>Head Shave</h3>
          </div>
          <div className="serviceHPItem">
          <img src="/images/scissorIcon.png" alt="services bullet" className="serviceIcon"></img>
            <h3>Beard Shave</h3>
          </div>
          <div className="serviceHPItem">
          <img src="/images/scissorIcon.png" alt="services bullet" className="serviceIcon"></img>
            <h3>Designs</h3>
          </div>
          <div className="serviceHPItem">
          <img src="/images/scissorIcon.png" alt="services bullet" className="serviceIcon"></img>
            <h3>Kids Haircut </h3>
          </div>
        </div>
      </div>


      <div className="gallery">
        <div className="galleryTitleContainer">
          <p className="titles">Gallery</p>
        </div>
        
        <button className="scroll-btn left-btn" onClick={() => handleScroll("left")}>←</button>
        <div className='gridContainer' ref={scrollContainer}>
          {services.map((service, index)=>(
            <div key={index} className='servicesGridCard'>
              <img
                src={service.imgSrc}
                alt={service.title}
                className='galleryCardImg '
              />
              <div className="gallery-card-text">
                <h2>
                  {service.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-btn right-btn" onClick={() => handleScroll("right")}>→</button>
      </div>
      <div className="reviewsAndLocationContainer">
        <div className="reviewsContainer">
          <Review/>
        </div>
        <div className="mapContainer" >

        <iframe  className="mapItem" loading="lazy" allowfullscreen
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJpQ8rgggVTIYRbmXkl5evCLA&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
        ></iframe>
   
        </div>

      </div>



    </div>
  );
}

