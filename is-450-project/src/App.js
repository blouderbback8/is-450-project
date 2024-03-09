import React from 'react';
import './App.css';
import QuizComponent from './Question'; // Import QuizComponent from Question.js

function App() {
  const [backgroundIndex, setBackgroundIndex] = React.useState(0);

  // Define the list of background colors
 const colors = [
    'darkslategray', // for background1
    'dimgrey',       // for background2
    'grey',          // for background3
    'lightgrey',     // for background4
    'gainsboro',     // for background5
    'lightblue',     // for background6
    'skyblue',       // for background7
    'deepskyblue',   // for background8
    'lightskyblue',  // for background9
    'aliceblue'      // for background10
];

  return (
    <div className="App" style={{backgroundColor: colors[backgroundIndex], height: '100vh', width: '100vw'}}>
      <header className="App-header">
        <p></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <QuizComponent setBackgroundIndex={setBackgroundIndex} />
    </div>
  );
}

export default App;
