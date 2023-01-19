const closeButton = document.querySelector(".close");
const printButton = document.querySelector(".print");
const panel = document.querySelector(".panel");
const panelContent = document.querySelector(".panel-content");
const selectables = document.querySelectorAll(".entry");
const panelCloseButton = document.getElementById("close-panel");

function hover(e) {
    this.style.cursor = "help";
    this.style.backgroundColor = "rgba(19, 138, 35, 0.05)"
}

function noHover(e) {
    this.style.removeProperty("cursor");
    this.style.backgroundColor = "";
}

function showPanel(e) {
    panel.classList.remove("inactive");
    panel.classList.remove("hidden");
    if (panelContent.hasChildNodes()) {
        panelContent.replaceChildren();
    }
    let panelFrame = document.createElement("iframe");
    panelFrame.setAttribute("src", `/home/grace/repos/CV/pages/${this.id}.html`);
    panelContent.appendChild(panelFrame);
}

function hidePanel(e) {
    panel.classList.add("hidden");
    setTimeout(() => {
        panel.classList.add("inactive");
    }, 500)
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
    }, 510)
})

panelCloseButton.addEventListener("click", hidePanel);

printButton.addEventListener("click", window.print)