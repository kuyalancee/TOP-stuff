const container = document.querySelector("#container");

const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!";
container.appendChild(paragraph);

const header3 = document.createElement("h3");
header3.style.color = "blue";
header3.textContent = "I'm a blue h3!";
container.appendChild(header3);

const container2 = document.createElement("div");
container.appendChild(container2);
container2.classList.add("content2");
container2.style.backgroundColor = "pink";
container2.style.borderColor = "black";

const header1 = document.createElement("h1");
container2.appendChild(header1);
header1.textContent = "I'm in a div";

const p2 = document.createElement("p");
container2.appendChild(p2);
p2.textContent = "ME TOO!";

//  method2
const button = document.querySelector("#btn");
button.onclick = () => alert("Hello World");

//  method3
//  allows multiple event listeners if the need arises (more flexible n powerful)
const bttn = document.querySelector("#bttn");
//bttn.addEventListener("click", () =>{
//    alert("Hello World");
//});

let alertFunction = () => {
    alert("Hello World");
}

//method 2 alternative
//bttn.onclick = alertFunction;

bttn.addEventListener("click", alertFunction);
bttn.addEventListener("click", function(e) {
    //  "e" parameter references itself
    console.log(e.target);
    e.target.style.background = "red";
});

/*
//  attaching listeners to group of nodes
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});
*/