window.cipher = {
  encode: (offset, string) => {
	let encodeArr = [];
	for(let i = 0; i < string.length; i++) {
    	const charCode = string.charCodeAt(i); //gets the ASCII code from the original character
    	const transf = (charCode - 32 + parseInt(offset)) % 95 + 32;//codes the character, gets the new ASCII code
    	encodeArr.push(String.fromCharCode(transf));//transforms the ASCII code to a character and pushes it into an array
    }
   	encodeResult = encodeArr.join("");//converts the result array into a string
   	return encodeResult;
  },
  decode: (offset, string) => {
	let encodeArr = [];
	for(let i = 0; i < string.length; i++) {
    	const charCode = string.charCodeAt(i); //gets the ASCII code from the original character
    	const transf = charCode - parseInt(offset) % 95;//encodes the character, gets the new ASCII code
    	//if transf gets out of the range (32-126), starts discounting from the end
    	if(transf < 32) {
    		const result = (127 - (32 - transf));
    		encodeArr.push(String.fromCharCode(result));//transforms the ASCII code to a character and pushes it into an array
    	}
    	else {
    		encodeArr.push(String.fromCharCode(transf));//transforms the ASCII code to a character and pushes it into an array	
    	}
    	
    }
   	encodeResult = encodeArr.join("");//converts the result array into a string
   	return encodeResult;
  }
};
