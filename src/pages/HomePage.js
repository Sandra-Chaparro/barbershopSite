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

      <div className="left-main-section">
        <h1 className="custom-heading">
          Look Good, <br />
          Feel Good, <br />
          Be Great.
        </h1>
      </div>

      <div className="right-main-section">
        <p className="ParaHeroSection">
          More than just a Haircut <br />– Crafting Strong First Impressions
          <br />
          with Style and Precision
          <br />
        </p>

        <button className="BookApptButton">Book Appointment</button>
      </div>
    </div>
  );
}
