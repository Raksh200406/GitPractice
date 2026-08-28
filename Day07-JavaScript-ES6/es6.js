const skills = ["HTML", "CSS"];
const moreSkills = [...skills, "JavaScript", "React"];

const add = (a, b) => a + b;
console.log(add(10, 20));

const user = { name: "Candidate", role: "Developer" };
const { name, role } = user;
console.log(name, role);
console.log(moreSkills);
