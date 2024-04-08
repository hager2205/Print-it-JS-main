const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

console.log(slides);
const dots = document.querySelector(".dots");
const arrowright = document.querySelector(".arrow_right");
const img = document.querySelector(".banner-img");

const p = document.querySelector("#banner p");
let index = 0
function displaydots(){
	for (let i = 0; i < slides.length; i++){
const dot = document.createElement("div")
dot.classList.add("dot");
dots.appendChild(dot);
if (i== index){
	dot.classList.add("dot_selected")
}
	}
}
displaydots();

function clickright(){
	arrowright.addEventListener("click", () => {
		index++;
		if (index > slides.length -1){
			index = 0;
		}
		img.src = slides [index].image;
		p.textContent= slides [index].tagLine
	});
}

clickright();