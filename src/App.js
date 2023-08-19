import "./App.css";
import { useEffect, useState } from "react";

function Launcher() {
  const [second, setSecond] = useState(10);
  useEffect(() => {
    const timer = setInterval(() => {
      setSecond(second - 1);
      console.log(second);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [second]);
  return <div className="launcher">{second <= 0 ? <Explosion /> : second}</div>;
}

function Explosion() {
  return (
    <div styles={"width=880px"}>
      <iframe
        title="explosion"
        allow="fullscreen"
        frameBorder="0"
        height="200"
        src="https://giphy.com/embed/8qNxiy6qwTABW6NpmX/video"
        width="480"
      ></iframe>
    </div>
  );
}

function App() {
  const [launch, setLaunch] = useState(true);
  console.log({ launch });
  return (
    <div className="App">
      {launch ? <Launcher /> : null}
      <button onClick={() => setLaunch(!launch)}>
        {launch ? "stop" : "start"}
      </button>
    </div>
  );
}

export default App;
