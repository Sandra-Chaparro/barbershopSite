import { Helmet } from "react-helmet";
import "./HomePage.css"; // Import the CSS file
import  ImageSlider from "./ImgSlider/ImageSlider"
import Review from "./ Reviews/Reviews"
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

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

export default function HomePage() {
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

  return (
    <div className="homepage">
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
        <h1 className="ParaHeroSection">Barbershop in Allen, TX</h1>
      </div>

      <div className="servicesContainer bg-white">
        <h2 className="servicesTitle">Barber Services</h2>
        <div className="servicesGrid">
          <div className="serviceItem">
          <img src="/images/scissorIcon.png" alt="services bullet" className="serviceIcon"></img>
            <h3>Haircuts</h3>
          </div>
          <div className="serviceItem">
          <img src="/images/scissorIcon.png" alt="services bullet" className="serviceIcon"></img>
            <h3>Beard</h3>
            
          </div>
          <div className="serviceItem">
          <img src="/images/scissorIcon.png" alt="services bullet" className="serviceIcon"></img>
            <h3>Head Shave</h3>
          </div>
          <div className="serviceItem">
          <img src="/images/scissorIcon.png" alt="services bullet" className="serviceIcon"></img>
            <h3>Beard Shave</h3>
          </div>
          <div className="serviceItem">
          <img src="/images/scissorIcon.png" alt="services bullet" className="serviceIcon"></img>
            <h3>Designs</h3>
          </div>
          <div className="serviceItem">
          <img src="/images/scissorIcon.png" alt="services bullet" className="serviceIcon"></img>
            <h3>Kids Haircut </h3>
          </div>
        </div>
      </div>


      <div className="gallery bg-white">
      <p className="titles">Gallery</p>
      <ImageSlider images={IMAGES} />
        {/* <p className="titles">You’re not just getting a haircut, <br></br> you’re getting an experience. Your satisfaction is my top priority.</p> */}
      </div>
      <div className="reviewsAndLocationContainer">
        <div className="reviewsContainer">
          <Review/>
        </div>
        <div className="mapContainer">
        <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
        </div>

      </div>



    </div>
  );
}
