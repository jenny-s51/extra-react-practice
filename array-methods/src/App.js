import icon from "./80sIcon.png";
import "./App.css";

function App() {
  const bopsFromThe80s = [
    { title: "Jump", artist: "Van Halen" },
    { title: "Ghostbusters Theme", artist: "Ray Parker Jr." },
    { title: "Girls Just Want to Have Fun", artist: "Cyndi Lauper" },
    { title: "I Melt with You", artist: "Modern English" },
    { title: "Should I Stay or Should I Go", artist: "The Clash" },
    { title: "Africa", artist: "TOTO" },
    { title: "Don't Dream It's Over", artist: "Crowded House" },
    { title: "Jessie's Girl", artist: "Rick Springfield" },
  ];

  // filter method - doesn't change the underlying array!
  const songsWithTheLetterG = bopsFromThe80s.filter((bop) =>
    bop.title.includes("G")
  );
  console.log(songsWithTheLetterG);

  // find method - when we want to find a single item in an array
  // we are looking for Rick Springfield
  const findRickSpringfield = bopsFromThe80s.find(
    (bop) => bop.artist === "Rick Springfield"
  );
  console.log(findRickSpringfield);

  // forEach - when we want to do something to all of the items
  bopsFromThe80s.forEach((bop) => console.log(bop.title));

  return (
    <div className="App">
      <header className="App-header">
        <img src={icon} className="App-logo" alt="logo" />
        {/* map takes a single parameter and returns what we want in the new array */}
        {bopsFromThe80s.map((bop) => (
          <p>{bop.title + ", " + bop.artist}</p>
        ))}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
