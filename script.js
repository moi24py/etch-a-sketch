const grid = document.querySelector(".grid");

// Make 256 squared divs
for (let i = 0; i < 256; i++){
    const cell = document.createElement("div");
    cell.setAttribute("style", "width: 6.25%; aspect-ratio: 1; border: 1px solid red; padding: 0; margin: 0; box-sizing: border-box;");
    cell.classList.add(".cell");
    
    cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = "white";
    });

    grid.appendChild(cell);
}
