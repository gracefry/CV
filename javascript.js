const closeButton = document.querySelector(".close");
const printButton = document.querySelector(".print");

closeButton.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
})

printButton.addEventListener("click", window.print)