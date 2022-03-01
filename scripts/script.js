/*
var deButton = document.querySelector("header nav button");
var closeButton = document.querySelector("header div button");

var dropdownButton = document.querySelector("main section:nth-of-type(1) div button");
 
function doeFormNeerEnOp(){
   let hetFormulier = document.querySelector("header div");
   hetFormulier.classList.toggle("toonMenu");
}

function dropdownUitklappen(){
	let dropdownList = document.querySelector("main section:nth-of-type(1) div ul");
	dropdownList.classList.toggle("dropdown");
}

deButton.addEventListener("click", doeFormNeerEnOp);
closeButton.addEventListener("click", doeFormNeerEnOp);

dropdownButton.addEventListener("click", dropdownUitklappen);
*/



const button = document.querySelector('header nav button');
const close = document.querySelector('header div button');
const menu = document.querySelector('header div');

button.addEventListener('click', (element) => {
   menu.classList.toggle("toonMenu");
})

close.addEventListener('click', (element) => {
   menu.classList.toggle("toonMenu");
})

const dropdown = document.querySelector('main section:nth-of-type(1) div button');
const dropdownlist = document.querySelector('main section:nth-of-type(1) div ul');

dropdown.addEventListener('click', (element) => {
   dropdownlist.classList.toggle('dropdown');
})