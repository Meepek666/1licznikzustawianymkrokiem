import { useState } from "react";
import ButtonsPanel from "./components/ButtonsPanel";
import Display from "./components/Display";
import "./Counter.css";
import Step from "./components/Step";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.counterInitValue);
  const [step, setStep] = useState(1);

  const updateCounter = (action) => {
    if (action === "add") {
      setCounter(counter + step);
    } else if (action === "reset") {
      setCounter(props.counterInitValue);
    } else {
      setCounter(0);
    }
  };


  return (
    <div className="counter">
      <Display counter={counter} />
      <ButtonsPanel updateCounter={updateCounter} />
      <Step step={step} setStep={setStep}/>
    </div>
  );
};

export default Counter;