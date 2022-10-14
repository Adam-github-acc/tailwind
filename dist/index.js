const burger = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");
const close = document.getElementById("close");
burger.classList.toggle("hidden");

burger.addEventListener('click', () => {
  sidebar.classList.toggle("hidden");
  burger.classList.toggle("hidden");
});

close.addEventListener('click', () => {
  sidebar.classList.toggle("hidden");
  burger.classList.toggle("hidden");
});