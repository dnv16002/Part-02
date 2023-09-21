//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  const [greeting, setGreeting] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    const getCurrentTime = () => {
      const now = new Date();
      const currentHour = now.getHours();

      if (currentHour >= 0 && currentHour < 12) {
        setGreeting("Good morning");
        setColor("red");
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting("Good afternoon");
        setColor("green");
      } else {
        setGreeting("Good evening");
        setColor("blue");
      }
    };
    getCurrentTime();
    const intervalId = setInterval(getCurrentTime, 60000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="App">
      <h1 style={{ color }}>{greeting}</h1>
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById("root"));
