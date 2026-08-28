document.getElementById("btn").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  document.getElementById("result").textContent =
    name ? "Hello " + name + "!" : "Please enter your name.";
});
