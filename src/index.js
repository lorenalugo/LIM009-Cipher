/*vars*/
const encodeBtn = document.getElementById('encode');
const decodeBtn = document.getElementById('decode');
let text;
let offset;
let result;
/*events*/
document.addEventListener("DOMContentLoaded", function(){
	document.getElementById('form').reset(); 
});
encodeBtn.addEventListener('click', () => {
  toggleActiveClass(encodeBtn, decodeBtn);
  getValue('input-text', 'offset');
  showErrorMessage(offset);
  if(offset > 0) {
    cipher.encode(offset, text);
    result = cipher.encode(offset, text);
    printResults(result, 'result');
  }
  if(offset < 0) {
    offset = Math.abs(offset);
    cipher.decode(offset, text);
    result = cipher.decode(offset, text);
    printResults(result, 'result');
  }
});
decodeBtn.addEventListener('click', () => {
  toggleActiveClass(decodeBtn, encodeBtn);
  getValue('input-text', 'offset');
  showErrorMessage(offset);
  if(offset > 0) {
    cipher.decode(offset, text);
    result = cipher.decode(offset, text);
    printResults(result, 'result');
  }
  if(offset < 0) {
    offset = Math.abs(offset);
    cipher.encode(offset, text);
    result = cipher.encode(offset, text);
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
  document.getElementById(id).classList.add('color-result');
}
//toggles active class
const toggleActiveClass = (add, remove) => {
	add.classList.add('active');
	remove.classList.remove('active');
}
//shows or hides error message when offset is missing
const showErrorMessage = (offset) => {
  if(offset === '') {
    document.getElementById('error-message').classList.remove('none');
  }
  else {
    document.getElementById('error-message').classList.add('none');
  }
}