import { Helmet } from "react-helmet";
import "./HomePage.css"; // Import the CSS file

export default function HomePage() {
  return (
    <div className="homepage">
      <Helmet>
        <title>
          Best barbershop in Allen, Texas. | Haircuts and Beard Grooming in
          North Dallas.
        </title>
        <meta
          name="description"
          content="Discover the best barbershop in North Dallas. Padour Barbershop offers expert haircuts, beard grooming, to make you look and feel your best."
        />
      </Helmet>

      <button className="BookApptButton">Book Appointment</button>

      <h1>
        “More Than Just a Haircut – Where Style and Craftsmanship Come Together”
      </h1>
      <p>
        {" "}
        Our goal is to ensure you leave the chair looking and feeling your best.
        We are convinced that a great haircut holds tremendous power—it goes
        beyond mere grooming; it boosts your confidence and reflects your unique
        style.
      </p>
    </div>
  );
}
