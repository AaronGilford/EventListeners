const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World!");  

// Best solution as you can add multiple onclick commands
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    alert("Hello World");
});

btn.addEventListener("click", function (e) {
    console.log(e.target);
    e.target.style.background = "blue";
});


// Attaching listeners to a group of nodes
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});