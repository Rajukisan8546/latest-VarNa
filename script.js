let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let divCopy = document.querySelector('.copyCode')
let rgb1 = "#9fe";
let rgb2 = "#4EF";
let rgb3 = "#FF1D58"

const hexValues = () =>{
  let myHexaValues = "0123456789abcdef";
  let randomColors = "#";
  for(let i=0; i<6; i++){
    randomColors = randomColors + myHexaValues[Math.floor(Math.random()*16)];
    // console.log(myHexaValues[11]);
  }
  return randomColors;
}
const handleButton1 = () => {
    rgb1 = hexValues();
    rgb3 = hexValues();
    console.log(rgb1);
    document.body.style.backgroundImage = `radial-gradient(ellipse , ${rgb1}, ${rgb2},${rgb3})`;
    divCopy.innerHTML =`background-image: radial-gradient(ellipse , ${rgb1}, ${rgb2},${rgb3})`;
    btn1.innerHTML = rgb1;
};

const handleButton2 = () => {
    rgb2 = hexValues();
    console.log(rgb2);
    document.body.style.backgroundImage = `radial-gradient(circle, ${rgb2}, ${rgb1},${rgb3})`;
    divCopy.innerHTML =`background-image: radial-gradient(circle, ${rgb2}, ${rgb1},${rgb3}))`;
    btn2.innerHTML = rgb2;
}

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);

divCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(divCopy.innerText);
})

