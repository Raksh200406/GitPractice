const skills = ["JavaScript", "React", "Node.js", "MongoDB"];
console.log(skills);
console.log(skills.length);
console.log(skills.includes("React"));

const upper = skills.map(skill => skill.toUpperCase());
console.log(upper);

const candidate = {
  name: "Candidate",
  skills: skills,
  atsScore: 85
};
console.log(candidate);
