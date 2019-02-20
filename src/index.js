
/*vars*/
const generateBlock = document.getElementById('generateBlock');
const decodeBlock = document.getElementById('decodeBlock');
const generateBtn = document.getElementById('generate-btn');
const decodeBtn = document.getElementById('decode-btn');
const generateResult = document.getElementById('generate');
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

/*functions*/
//displays a block
function show(myBlock) {
	myBlock.classList.remove('none');
}
//hides a block
function hide(myBlock) {
	myBlock.classList.add('none');
}

generateResult.addEventListener('click', () => {
	const text = document.getElementById('originText').value;
	const offset = document.getElementById('offset').value;
	cipher.encode(text, offset);
	printResults(encodeResult);
});
/*
function getValue(mytext, myoffset) {
	text = document.getElementById(mytext).value;
	offset = document.getElementById(myoffset).value;
	console.log(text);
}
*/

/*function encode(mytext, n) {
	let encodeArr = [];
	for(let i = 0; i < mytext.length; i++) {
    	const charCode = mytext.charCodeAt(i);
    	const transf = (charCode - 32 + parseInt(n)) % 95 + 32;
    	encodeArr.push(String.fromCharCode(transf));
    	encodeResult = encodeArr.join("")
    }
    console.log(encondeResult);
    return encondeResult;
}
*/
function printResults(str) {
	document.getElementById('result').innerHTML = str;
}