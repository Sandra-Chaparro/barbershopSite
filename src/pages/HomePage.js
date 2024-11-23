import { Helmet } from "react-helmet";
import "./HomePage.css"; // Import the CSS file

export default function HomePage() {
  return (
    <div className="homepage">
      <Helmet>
        <title>
          Best barbershop in Allen, Texas. | Men haircuts and Beard Grooming in
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

      <div className="servicesContainer">
        <h2 className="servicesTitle">Men Grooming Services</h2>
        <div className="servicesGrid">
          <div className="serviceItem">
            <h3>Haircuts</h3>
          </div>
          <div className="serviceItem">
            <h3>Beard</h3>
            <img></img>
          </div>
          <div className="serviceItem">
            <h3>Head Shave</h3>
          </div>
          <div className="serviceItem">
            <h3>Beard Shave</h3>
          </div>
          <div className="serviceItem">
            <h3>Designs</h3>
          </div>
          <div className="serviceItem">
            <h3>Kids Haircut </h3>
          </div>
        </div>
      </div>

      <div className="reviewsContainer">
        <h2 className="titles">Reviews</h2>
      </div>

      <div className="Location-MapContainer">
        <h2 className="titles">Barbershop in Allen, Texas</h2>
      </div>
    </div>
  );
}
