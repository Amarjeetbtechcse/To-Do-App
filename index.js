let btn = document.querySelector("button");
let ol = document.querySelector("ol");
let inp = document.querySelector("input");

btn.addEventListener("click", function(event) {
    let item = document.createElement("li");
    item.innerText = inp.value;
    ol.appendChild(item);
    inp.value = "";

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
});

// Event delegation on ul to handle all delete buttons
ol.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    }
});
