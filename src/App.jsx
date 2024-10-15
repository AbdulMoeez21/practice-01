import React, { useState } from "react";
import "./App.css";

import Counter from "./apps/Counter";

function App() {
  const [type, setType] = useState("Counter");

  if (type == "Counter") {
    return <Counter />;
  }
}

export default App;
