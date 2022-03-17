const menu = document.querySelector(".hamburger-menu");
const sidebar = document.querySelector(".sidebar");
menu.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  menu.classList.toggle("active");
});

const scrollBtn = document.querySelector(".scroll-btn");
scrollBtn.addEventListener("click", () => {
  const html = document.querySelector("html");
  html.style.scrollBehavior = "smooth";
  setTimeout(() => {
    html.style.scrollBehavior = "unset";
  }, 1000);
});

window.onload = () => {
  setTimeout(() => {
    const container = document.querySelector(".container");
    const spinnerContainer = document.querySelector(".spinner-container");
    container.classList.add("display");
    spinnerContainer.classList.add("hide");
  }, 1500);
};
