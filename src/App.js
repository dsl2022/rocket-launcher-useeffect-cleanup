import "./App.css";
import { useEffect, useState } from "react";

function Launcher() {
  const [second, setSecond] = useState(3000);
  useEffect(() => {
    const timer = setInterval(() => {
      setSecond(second - 1);
      console.log(second);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [second]);
  return <div className="launcher">{second}</div>;
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
