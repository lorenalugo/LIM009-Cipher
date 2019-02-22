
/*vars*/
const generateBlock = document.getElementById('generateBlock');
const decodeBlock = document.getElementById('decodeBlock');
const generateBtn = document.getElementById('generate-btn');
const decodeBtn = document.getElementById('decode-btn');
const generateResult = document.getElementById('generate');
const decodeResult = document.getElementById('decodificar');
let encodeResult;
/*events*/
generateBtn.addEventListener('click', () => {
	show(generateBlock);
	hide(decodeBlock);
});

decodeBtn.addEventListener('click', () => {
	show(decodeBlock);
	hide(generateBlock);
});

generateResult.addEventListener('click', () => {
	getValue('originText', 'offset');
	cipher.encode(offset, text);
	printResults(encodeResult, "result");
});

decodeResult.addEventListener('click', () => {
	getValue('encText', 'encoffset');
	cipher.decode(offset, text);
	printResults(encodeResult, "result2");
});
/*functions*/
//displays a block
const show = (myBlock) => {
	myBlock.classList.remove('none');
}
//hides a block
const hide = (myBlock) => {
	myBlock.classList.add('none');
}
//gets the input values (text and offset)
const getValue = (mytext, myoffset) => {
	text = document.getElementById(mytext).value;
	offset = document.getElementById(myoffset).value;
}
//prinst results DOM
const printResults = (str, id) => {
	document.getElementById(id).innerHTML = str;
}
