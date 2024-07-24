document.getElementById("resetBtn").addEventListener('click', () => {
    deleteGrid();
    var size;
    while (isNaN(size) || size > 100 || size < 1) {
        size = prompt("Enter a new size for the grid:")
        if (isNaN(size) || size > 100 || size < 1) {
            alert("Invalid size. PLease enter a positive number below 100");
        }
    }
    setGrid(size);
});

setGrid(16);

function setGrid (gridSize) {
    let containerDiv = document.getElementById("container");

    for (var i = 0; i < gridSize; i ++) {
        var innerContainerDiv = document.createElement("div");
        innerContainerDiv.className = "flex-container";
        containerDiv.appendChild(innerContainerDiv);
        for (var z = 0; z < gridSize; z ++) {
            var div = document.createElement("div");
            //div.className = "box";
            innerContainerDiv.appendChild(div);
            div.addEventListener('mouseover', (event) => {
                event.target.className = "hovered";
            });
        
        }
        
    }
}

function deleteGrid() {
    document.getElementById("container").remove();
    var newDiv = document.createElement("div");
    newDiv.id = "container";
    document.getElementsByTagName("body")[0].appendChild(newDiv)
}

