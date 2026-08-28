import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [role, setRole] = useState("");
  return <div>
    <h1>Job Role</h1>
    <input value={role} onChange={e => setRole(e.target.value)} placeholder="Enter role" />
    <p>Selected role: {role}</p>
  </div>;
}
createRoot(document.getElementById("root")).render(<App />);
