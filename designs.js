// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    const widthValue = document.getElementById("inputWidth").value;
    const heightValue = document.getElementById("inputHeight").value;

    const table = document.getElementById("pixelCanvas");

    for (let width = 0; width < widthValue; width++){
        const trElement = document.createElement("tr");
        table.appendChild(trElement);
        for (let height = 0; height < heightValue; height++){
            const tdElement = document.createElement("td");
            tdElement.addEventListener("click", (event) =>{
                const colorValue = document.getElementById("colorPicker").value;
                event.target.style.backgroundColor = colorValue;
            })
            trElement.appendChild(tdElement);
        }
    }


}

function clearGrid(){
    const table = document.getElementById("pixelCanvas");
    let row = table.firstElementChild;
    while (row){
        row.remove();
        row = table.firstElementChild;
    }
}

document.addEventListener("submit", (event) =>{
    event.preventDefault();
    clearGrid();
    makeGrid();
});

