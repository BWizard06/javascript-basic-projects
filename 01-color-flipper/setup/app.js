const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () =>{
    const randomNumber = getRandonNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerHTML = colors[randomNumber];
});

function getRandonNumber() {
    return Math.floor(Math.random() * colors.length);
}
