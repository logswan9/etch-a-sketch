

let containerDiv = document.getElementById("container");


for (var i = 1; i < 17; i ++) {
    var innerContainerDiv = document.createElement("div");
    innerContainerDiv.className = "flex-container";
    containerDiv.appendChild(innerContainerDiv);
    for (var z = 1; z < 17; z ++) {
        var div = document.createElement("div");
        //div.className = "box";
        innerContainerDiv.appendChild(div);
        div.addEventListener('mouseover', (event) => {
            event.target.className = "box";
        });
       
    }
    
}
