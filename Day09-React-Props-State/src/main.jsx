import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function Skill({ name }) { return <li>{name}</li>; }

function App() {
  const [count, setCount] = useState(0);
  return <div>
    <h1>Skills</h1>
    <ul><Skill name="React" /><Skill name="Node.js" /></ul>
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  </div>;
}
createRoot(document.getElementById("root")).render(<App />);
