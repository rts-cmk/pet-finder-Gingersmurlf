import { Link } from "react-router";

export default function LandingPage() {
  localStorage.setItem("visited", "true");
  return (
    <div className="wrapper landing">
      <figure className="landing__figure">
        <img
          className="landing__img"
          src="./assets/Animal.svg"
          alt="Animal logo"
        />
        <figcaption className="landing__figcaption">
          <h1 className="landing__title">My Pets</h1>
          <p className="landing__text">
            Taking care of a pet is my favorite, it helps me to gaimr stress and
            fatigue.
          </p>
        </figcaption>
      </figure>
      <Link to="/Home">
        <button className="button">Skip</button>
      </Link>
    </div>
  );
}
