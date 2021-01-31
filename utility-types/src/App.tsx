import logo from "./logo.svg";
import "./App.css";

interface Starship {
  name: string;
  enable5gBurn: boolean;
}

// Pick<T, K>: this picks only one property from the interface
type StarshipNameOnly = Pick<Starship, "name">;
// Omit<T,K> : don't include certain properties
type OmitNameFromStarship = Omit<Starship, "name">;

// Partial<T>: we get a new type with all properties optional
const updateStarship = (id: number, starship: Partial<Starship>) => {};

updateStarship(1, {
  name: "Rocinante",
});

// Record<K, T> ... generic type which takes 2 generic type params

const starships: Record<string, Starship> = {
  Razorback: {
    name: "Razorback",
    enable5gBurn: true,
  },
  Chetzemoka: {
    name: "Chetzemoka",
    enable5gBurn: false,
  },
  Nauvoo: {
    name: "Nauvoo",
    enable5gBurn: false,
  },
};

// Exclude<T, U> : allows us to subtract one union type U from another one T

type SpaceBeverages =
  | "Ganymede Gin"
  | "Tea"
  | "Glen Eyre Scotch"
  | "Lagavulin Scotch"
  | "Halpenny Premium Malt Whiskey"
  | "Ceres Whiskey"
  | "McGlenton's Scotch"
  | "Coffee";

let HoldensDrink: SpaceBeverages;
HoldensDrink = "Lagavulin Scotch";

type DrinksNaomiDoesntLike = "Tea" | "Glen Eyre Scotch";
type DrinksNaomiLikes =
  | "Ceres Whiskey"
  | "Coffee"
  | "Lagavulin Scotch"
  | "Water";

// we leave out the drinks she doesn't like
// let NaomisDrink: Exclude<SpaceBeverages, DrinksNaomiDoesntLike>;

// we can't do this now!
// NaomisDrink = 'Tea';

/* we extract the drinks she likes. 
 water isn't in space bevs so it doesn't get extracted! */
let NaomisDrink: Extract<SpaceBeverages, DrinksNaomiLikes>

// NaomisDrink = 'Ceres Whiskey'
// console.log(NaomisDrink)

interface StarshipProperties {
  color?: "purple" | "mint" | "light blue";
}

const paintStarship = (
  id: number,
  color: NonNullable<StarshipProperties["color"]>
) => {return {id, color}};

// we can't assign null to A bc it's a string
// const A: string = null;

// can't assign undefined bc color is non-nullable
paintStarship(1, 'purple');

// extracts the return type of the function
type PaintStarshipReturn = ReturnType<typeof paintStarship>;



/* Required<T>: when we apply this to an interface, 
we get a new type with all properties required */

// Readonly<T>: takes an interface an creates a new type with all properties being Readonly

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Utility Types!
        </p>
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
