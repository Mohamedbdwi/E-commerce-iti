// Start of Slider
var imgs = ["1.png", "2.png", "3.png"];

var index     = 0;
var nextImg   = document.getElementById("nextImg");
var centerImg = document.getElementById("centerImg");
var preImg    = document.getElementById("preImg");

function ShowImage(idx){
                        index         = idx;
                        nextImg.src   = "./imgs/" + imgs[0];
                        centerImg.src = "./imgs/" + imgs[1];
                        preImg.src    = "./imgs/" + imgs[2];
                    var popImg        = imgs.pop(-1);
                    var unshiftedImg  = imgs.unshift(popImg);
}

function next(){
    index++;
    if (index >= imgs.length){
        index = 0;
    };
    ShowImage(index);
};

function pre(){
    index--;
    if (index < 0){
        index = imgs.length - 1;
    };
    ShowImage(index);
};
// End of Silder


// Start of up page
var goUp         = document.getElementById("up");
    goUp.onclick = function(){
    window.scrollTo(0, 0);
}
// End of up page

// Start of products filter
const btns          = document.querySelectorAll(".filter-btn");
const storeProducts = document.querySelectorAll(".store-product");
for (i = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', (e) => {
        e.preventDefault()
        
        const filter = e.target.dataset.filter;
        console.log(filter);
        
        storeProducts.forEach((product)=> {
            if (filter === 'all'){
                product.style.display = 'block'
            } else {
                if (product.classList.contains(filter)){
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
};
// End of products Filter

// Start of Cart
var cartBrn = document.querySelectorAll('.cart-btn');
var spn     = document.getElementById('span');
let cwnt    = 0;
function counters(){
    cwnt          += 1;
    spn.innerHTML  = cwnt;
};

for (j=0; j <cartBrn.length; j++){
    cartBrn[j].addEventListener('click',counters);
};
// End of Cart


// Start of contact Us
'use strict'

let userName,
	userPassword,
	userEmail= [];

function checkIfValid(e) {
	let target		= e.target,
		initiator	= target.name,
		value		= target.value,
		status		= testValidity(initiator, value);
	highlightInput(target, status);
	setVariables(initiator, value, status, target);
}

function testValidity(initiator, value) {
	switch (initiator) {
		case 'name':
			return checkName(value);
		case 'email':
			return /^\S+@\S+\.com+$/.test(value);
		case 'password':
			return value.length >= 8;
	}
}

function checkName(value) {
	if( !(/^[a-zA-Z]+$/.test(value)) ) {
		return;
	}

	return value.length > 3;
}

function setVariables(initiator, value, status, target) {
	if(!status) {
		setVariable(initiator, undefined);
		showErrorMessage(target);
		return;
	}

	setVariable(initiator, value);
	hideErrorMessage(target);
}

function setVariable(initiator, value) {
	switch (initiator) {
		case 'name':
			userName = value;
			break;
		case 'email':
			userEmail = value;
			break;
		case 'password':
			userPassword = value;
			break;
	}
}

function showErrorMessage(target) {
	let errorMessage = target.nextElementSibling;

	errorMessage.classList.add('show');
}

function hideErrorMessage(target) {
	let errorMessage = target.nextElementSibling;

	errorMessage.className = 'error-message';
}

function highlightInput(target, status) {
	target.className = '';
	if( !status ) {
		target.classList.add('error');
		return;
	}
	target.classList.add('pass');
}


function checkIfErrorShown(target) {
	let errorMessage = target.nextElementSibling;

	return errorMessage.classList.contains('error-message');
}


function checkData(e) {
	e.preventDefault();
	if( !(userName && userEmail && userPassword) ) {
		displayCorrespondingMessage();
		return;
	}

	let form	= document.getElementById('user-data'),
		target	= document.getElementById('target');

	form.style.display = 'none';
	target.classList.add('display-data');
}

function displayCorrespondingMessage() {
	if (!userName) {
		let inputTarget		= document.getElementsByName('name')[0],
			errorMessage	= inputTarget.nextElementSibling;

		errorMessage.classList.add('show');
	}

	if (!userEmail) {
		let inputTarget		= document.getElementsByName('email')[0],
			errorMessage	= inputTarget.nextElementSibling;

		errorMessage.classList.add('show');
	}

	if (!userPassword) {
		let inputTarget		= document.getElementsByName('password')[0],
			errorMessage	= inputTarget.nextElementSibling;

		errorMessage.classList.add('show');
	}
}
// End of contact Us