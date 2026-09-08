const grid = document.querySelector(".grid");
const promptBtn = document.querySelector("#prompt-btn");

// Randomize the squares’ RGB values with each interaction
function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

// Make a NxN grid with square divs
function makeGrid(cellsQty){
    for (let i = 0; i < cellsQty**2; i++){
        const cell = document.createElement("div");
        cell.setAttribute("style", "aspect-ratio: 1; background-color: teal; border: 1px solid white; box-sizing: border-box;");
        let width = 100/squarePerSide;
        cell.style.width = `${width}%`;
        cell.classList.add(".cell");
    
        // Set a minimum opacity level to the cell
        let opacity = 0.1;
        
        cell.addEventListener("mouseenter", () => {
            // Increase the opacity of a cell after each interaction
            opacity += 0.1;
            cell.style.opacity = opacity;
            // Change the cell color on mouse enter 
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            cell.style.backgroundColor = randomColor();
        });

        grid.appendChild(cell);
    }
}

// Ask the user the number of cells per side
let squarePerSide = 0;
promptBtn.addEventListener("click", () => {
    grid.replaceChildren(); // Clear the grid before creating a new one
    do {
        squarePerSide = Number(prompt("Squares per side ( 1 < x < 100 ): "));
    }
    while(
        !Number.isInteger(squarePerSide) || 
        squarePerSide < 1 ||
        squarePerSide > 100
        );
    
    makeGrid(squarePerSide);
});