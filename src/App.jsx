import React, { useState } from "react";
import "./App.css";

import Counter from "./apps/Counter";
import Props from "./apps/Props";
import Bgchanger from "./apps/Bgchanger";

function App() {
  const [type, setType] = useState("Bgchanger");

  if (type == "Counter") {
    return <Counter />;
  }
  else  if (type == "Props") {
    return <Props /> ;
  }
  else  if (type == "Bgchanger") {
    return <Bgchanger /> ;
  }

}

export default App;
