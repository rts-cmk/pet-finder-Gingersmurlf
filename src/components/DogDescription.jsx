import { Link, useLoaderData } from "react-router";

export default function DogDescription() {
  const { dog } = useLoaderData();

  return (
    <div className="description">
      <div className="description__image flex">
        <img src={dog.image} alt={dog.breed} />
      </div>
      <main className="description__main">
        <h1 className="description__title">{dog.breed}</h1>
        <div className="flex gap-5">
          <img src="../assets/location.svg" alt="location icon" />
          <h2 className="description__title2">{dog.location}</h2>
        </div>
        <ul className="description__lists flex">
          <li className="description__list flex">
            <figure className="description__figure flex">
              <div className="description__figure__icon flex">
                <img src="../assets/pawprint.svg" alt="paw icon" />
              </div>
              <figcaption className="description__caption">
                <h3>{dog.breed}</h3>
              </figcaption>
            </figure>
          </li>
          <li className="description__list flex">
            <figure className="description__figure flex">
              <div className="description__figure__icon flex">
                <img src="../assets/gender.svg" alt="gender icon" />
              </div>
              <figcaption className="description__caption">
                <h3>{dog.gender}</h3>
              </figcaption>
            </figure>
          </li>
        </ul>
        <p className="description__text">{dog.long_description}</p>
        <Link to="/"><button className="button">Back</button></Link>
      </main>
    </div>
  );
}
