// Footer updates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const menuButton = document.querySelector("#menu");
const navList = document.querySelector(".navigation");

menuButton.addEventListener("click", (e) => {
    e.preventDefault();
    menuButton.classList.toggle("show");
    navList.classList.toggle("show");
});
