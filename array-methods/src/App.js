import icon from "./80sIcon.png";
import "./App.css";

function App() {
  const bopsFromThe80s = [
    { title: "Jump", artist: "Van Halen", plays: 20 },
    { title: "Ghostbusters Theme", artist: "Ray Parker Jr.", plays: 59 },
    { title: "Girls Just Want to Have Fun", artist: "Cyndi Lauper", plays: 24 },
    { title: "I Melt with You", artist: "Modern English", plays: 24 },
    { title: "Should I Stay or Should I Go", artist: "The Clash", plays: 17 },
    { title: "Africa", artist: "TOTO", plays: 25 },
    { title: "Don't Dream It's Over", artist: "Crowded House", plays: 28 },
    { title: "Jessie's Girl", artist: "Rick Springfield", plays: 16 },
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

  // some method - checks condition and returns TRUE of some items satisfy the condition
  const Africa = bopsFromThe80s.some((bop) => bop.title === "Africa");
  if (Africa) {
    // 🎶 there's nothing that 100 men or more could ever do 🎶
    console.log("Bless the rains")
  }

  // every method - like the some method, except it's for all of them
  const hasApostrophe = bopsFromThe80s.every((bop) => bop.title.includes("'"))
  // false - not all songs have apostrophes :'(
  console.log(hasApostrophe)


  // reduce method - runs a function on every single item of the array
  const addingNumbers = bopsFromThe80s.reduce((currentTotal, bop) => {
   return bop.plays + currentTotal
  }, 0)
  console.log(addingNumbers)

  // includes method - ez pz
  const MadonnaSongs = ['Like A Prayer', 'Material Girl', 'Express Yourself']
  const materialGirl = MadonnaSongs.includes("Material Girl")
  console.log(materialGirl)

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
