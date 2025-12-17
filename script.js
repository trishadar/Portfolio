const toggle = document.getElementById("theme-toggle");
const icon = toggle.querySelector(".icon");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  icon.textContent = "☀";
}

toggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  icon.textContent = isDark ? "☀" : "☾";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
