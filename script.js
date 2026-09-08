const grid = document.querySelector(".grid");
const promptBtn = document.querySelector("#prompt-btn");


// Make a NxN grid with square divs
function makeGrid(cellsQty){
    for (let i = 0; i < cellsQty**2; i++){
        const cell = document.createElement("div");
        cell.setAttribute("style", "aspect-ratio: 1; background-color: teal; border: 1px solid white; box-sizing: border-box;");
        let width = 100/squarePerSide;
        cell.style.width = `${width}%`;
        cell.classList.add(".cell");
    
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = "white";
        });

        grid.appendChild(cell);
    }
}



