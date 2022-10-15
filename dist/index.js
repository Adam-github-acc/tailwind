const burger = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");
const close = document.getElementById("close");
const dropdown = document.getElementById("dropdown");
const travel = document.getElementById("travel");
const closeInfo = document.getElementById("close-info");
const travelBar = document.getElementById("travel-bar");

burger.addEventListener('click', () => {
  sidebar.classList.toggle("hidden");
  burger.classList.toggle("hidden");
});

close.addEventListener('click', () => {
  sidebar.classList.toggle("hidden");
  burger.classList.toggle("hidden");
});

travel.addEventListener('click', () => {
  dropdown.classList.toggle("hidden");
  travelBar.classList.toggle('w-[100%]')
});

closeInfo.addEventListener('click', () => {
  dropdown.classList.toggle("hidden");
  travelBar.classList.toggle('w-[100%]')
});
