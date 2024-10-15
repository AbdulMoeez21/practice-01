import React, { useState } from "react";
import './App.css'

import Counter from "./apps/Counter"


function App() {
  const [type, settype] = useState("Counter");


     if (type == "Counter") {
    return <Counter />;
  }
  


}

export default App
