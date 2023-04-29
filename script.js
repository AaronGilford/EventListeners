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