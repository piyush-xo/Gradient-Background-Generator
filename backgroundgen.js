var h3=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementsByTagName("body")[0];

// console.log(h3,color1,color2,body);
// body.style.background="black";

function setgradient(){
	body.style.background="linear-gradient(to right, "+color1.value+", "+color2.value+")";
	h3.textContent=body.style.background;
}

color1.addEventListener("input",setgradient);

color2.addEventListener("input",setgradient);