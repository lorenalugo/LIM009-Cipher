
/*vars*/
const encodeBtn = document.getElementById('encode');
const decodeBtn = document.getElementById('decode');
let result;
/*events*/
document.addEventListener("DOMContentLoaded", function(){
  	document.getElementById('form').reset(); 
S});

encodeBtn.addEventListener('click', () => {
	getValue('text-to-encode', 'offset');
	if(offset === '') {
		document.getElementById('error-message').classList.remove('none');
	}
	else {
		document.getElementById('error-message').classList.add('none');	
		cipher.encode(offset, text);
		printResults(result, 'text-to-decode');	
	}
	
});

decodeBtn.addEventListener('click', () => {
	getValue('text-to-decode', 'offset');
	if(offset === '') {
		document.getElementById('error-message').classList.remove('none');
	}
	else {
		document.getElementById('error-message').classList.add('none');
		cipher.decode(offset, text);
 		printResults(result, 'text-to-encode');	
	}
	
});
/*functions*/
//gets the input values (text and offset)
const getValue = (mytext, myoffset) => {
	text = document.getElementById(mytext).value;
	offset = document.getElementById(myoffset).value;
}
//prinst results DOM
const printResults = (str, id) => {
	document.getElementById(id).value = str;
}