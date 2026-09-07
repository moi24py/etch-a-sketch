const grid = document.querySelector(".grid");

// Make 256 squared divs
for (let i = 0; i < 256; i++){
    const div = document.createElement("div");
    div.setAttribute("style", "width: 6.25%; aspect-ratio: 1; border: 1px solid red; padding: 0; margin: 0; box-sizing: border-box;");
    grid.appendChild(div);
}

