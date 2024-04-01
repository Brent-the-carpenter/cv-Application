import { useState } from "react";
import InputComponent from "./components/inputComponent";
import ViewPort from "./ViewPort";

import "./App.css";

function App() {
  const [inputHandler, setinputHandler] = useState({});
  return (
    <div className="App">
      <InputComponent
        inputHandler={inputHandler}
        setinputHandler={setinputHandler}
      />
      <ViewPort inputHandler={inputHandler} />
    </div>
  );
}

export default App;
