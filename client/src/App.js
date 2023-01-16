import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Test from './Test';


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>
      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  )
}

export default App;