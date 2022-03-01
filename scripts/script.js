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
