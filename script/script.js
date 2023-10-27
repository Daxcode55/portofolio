let navbar = document.querySelector("nav");
document.querySelector("#btn-menu").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};
