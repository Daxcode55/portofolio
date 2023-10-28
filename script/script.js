let navbar = document.querySelector("nav");
document.querySelector("#btn-menu").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};


const links = document.querySelectorAll(".link");
links.forEach((getlinks) => {
  getlinks.addEventListener("click", (e) => {
    const getHref = getlinks.getAttribute("href");
    const getElmHref = document.querySelector(getHref);
    let nilaiScrol = getElmHref.offsetTop;
    window.scrollTo(0, nilaiScrol - 70);
    e.preventDefault();
  })
})