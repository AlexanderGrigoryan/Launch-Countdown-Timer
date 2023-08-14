import "./App.css";
import Title from "./Title/Title";
import Timer from "./Timer/Timer";
import Footer from "./Footer/Footer";
import { useState, useEffect } from "react";

const deadline = new Date("March, 18, 2024");
const startTime = deadline - new Date();

function App() {
  const [time, setTime] = useState(startTime);

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((time / 1000 / 60) % 60);
  const seconds = Math.floor((time / 1000) % 60);

  useEffect(() => {
    const interval = setInterval(() => setTime(time - 1000), 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="App">
      <div className="container">
        <Title />
        <div className="timer__container">
          <Timer text="Days">{days}</Timer>
          <Timer text="Hours">{hours}</Timer>
          <Timer text="Minutes">{minutes}</Timer>
          <Timer text="Seconds">{seconds}</Timer>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
