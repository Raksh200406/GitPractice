const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ message: "API is working" });
});

app.post("/api/analyze", (req, res) => {
  res.json({ message: "Resume received", atsScore: 85 });
});

app.listen(5000, () => console.log("Express server running on port 5000"));
