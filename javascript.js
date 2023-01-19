const closeButton = document.querySelector(".close");
const printButton = document.querySelector(".print");
// const header = document.getElementById("header");
// const bsci = document.getElementById("bsci");
// const med = document.getElementById("medicine");
// const hs = document.getElementById("highschool");
// const reception = document.getElementById("reception");
// const syncs = document.getElementById("syncs");
// const sign = document.getElementById("signsoc");
// const pacman = document.getElementById("pacman");
// const cv = document.getElementById("cv");
// const monopoly = document.getElementById("monopoly");
// const shiny = document.getElementById("shiny");
const selectables = document.querySelectorAll(".entry");

function hover(e) {
    this.style.cursor = "help";
    this.style.backgroundColor = "rgba(19, 138, 35, 0.05)"
}

function noHover(e) {
    this.style.removeProperty("cursor");
    this.style.backgroundColor = "";
}

function showPanel(e) {
    console.log(e.target.classList);
}

selectables.forEach(function (selectable) {
    selectable.addEventListener("mouseover", hover);
    selectable.addEventListener("mouseout", noHover);
    selectable.addEventListener("click", showPanel);
});

closeButton.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.classList.add("hidden");
    setTimeout(() => {
        modal.style.display = "none";
    }, 500)
})

printButton.addEventListener("click", window.print)