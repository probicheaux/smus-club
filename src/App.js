import background1 from "./img/placeholder.jpg"
import background2 from "./img/background2.png"
import "./App.css";
import React, { useEffect } from "react";
import ASCII from 'react-rainbow-ascii'

function Block({header, body, image}) {
  return (
      <div className="Header-box" style={{backgroundImage: `url(${image})`}}>
        <div className="Content-box">
          <div className="App-header">
            <ASCII text={header} rainbow= {false}/>
            </div>
          <p>{body}</p>
        </div>
      </div>
  )
}

const body2 = "I (Peter) am smus. The name 'smus' is a reference to my tag in the SSBM scene. It's just generally what I go by online."
function App() {
  useEffect(() => {
    document.title = "smus";
  }, []);
  return (
    <div className="App">
      <Block header = "Welcome to the smus club!" body = "You have finally arrived home, at the best site on the web" image = {background1} />
      <Block header = "What is smus?" body = {body2} image = {background2} />
    </div>
  );
}

export default App;
