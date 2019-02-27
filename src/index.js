
/*vars*/
const encodeBtn = document.getElementById('encode');
const decodeBtn = document.getElementById('decode');
let result;
/*events*/
document.addEventListener("DOMContentLoaded", function(){
  	document.getElementById('form').reset(); 
S});

encodeBtn.addEventListener('click', () => {
	toggleActiveClass(encodeBtn, decodeBtn);
	getValue('input-text', 'offset');
	if(offset === '') {
		document.getElementById('error-message').classList.remove('none');
	}
	else {
		document.getElementById('error-message').classList.add('none');	
		cipher.encode(offset, text);
		result = cipher.encode(offset, text);
		printResults(result, 'result');	
	}
	
});

decodeBtn.addEventListener('click', () => {
	toggleActiveClass(decodeBtn, encodeBtn);
	getValue('input-text', 'offset');
	if(offset === '') {
		document.getElementById('error-message').classList.remove('none');
	}
	else {
		document.getElementById('error-message').classList.add('none');
		cipher.decode(offset, text);
		result = cipher.decode(offset, text);
 		printResults(result, 'result');	
	}
	
});
/*functions*/
//gets the input values (text and offset)
const getValue = (mytext, myoffset) => {
	text = document.getElementById(mytext).value;
	offset = document.getElementById(myoffset).value;
}
//prints results DOM
const printResults = (str, id) => {
	document.getElementById(id).innerHTML = str;
}
//toggles active class
const toggleActiveClass = (add, remove) => {
	add.classList.add('active');
	remove.classList.remove('active');
}