import { useLoaderData } from "react-router";

export default function App() {
  const { dogs, user } = useLoaderData();

  console.log(dogs, user);

  return (
    <div className="wrapper home">
      <header className="home__header">
        <div className="spacebetween">
          <img className="profile" src={user.image} alt="profile picture" />
          <div className="svg">
            <img
              className="location__svg"
              src="./assets/location.svg"
              alt="location icon"
            />
            <address>{user.location}</address>
            <img
              className="arrow__svg"
              src="./assets/arrowDown.svg"
              alt="arrow down icon"
            />
          </div>
        </div>
        <div className="bell">
          <img src="./assets/bell.svg" alt="notification bell" />
        </div>
      </header>
      <main className="home__main">
        <nav>
          <ul className="main__navlinks">
            <li className="main__navlink">Cats</li>
            <li className="main__navlink">Dogs</li>
            <li className="main__navlink">Birds</li>
            <li className="main__navlink">Other</li>
          </ul>
        </nav>
      </main>
    </div>
  );
}
