import icon from './80sIcon.png'
import './App.css';

function App() {


  const bopsFromThe80s = [
    { songTitle: 'Jump', artist: 'Van Halen'},
    { songTitle: 'Ghostbusters Theme', artist: 'Ray Parker Jr.'},
    { songTitle: 'Girls Just Want to Have Fun', artist: 'Cyndi Lauper'},
    { songTitle: 'I Melt with You', artist: 'Modern English'},
    { songTitle: 'Should I Stay or Should I Go', artist: 'The Clash'},
    { songTitle: 'Africa', artist: 'TOTO'},
    { songTitle: 'Don\'t Dream It\'s Over', artist: 'Crowded House'},
    { songTitle: 'Jessie\'s Girl', artist: 'Rick Springfield'}
  ]


    const songsWithTheLetterG = bopsFromThe80s.filter(item => item.songTitle.includes('G'));
    console.log(songsWithTheLetterG)



  return (
    <div className="App">
      <header className="App-header">
        <img src={icon} className="App-logo" alt="logo" />
        {/* <img src={grid} className="App-background" alt="logo"/> */}
        { bopsFromThe80s.map(item => <p>{item.songTitle + ", " + item.artist}</p>) }
        {/* <p>
         {JSON.stringify(bopsFromThe80s)}
        </p> */}
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
