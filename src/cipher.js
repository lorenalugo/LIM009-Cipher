window.cipher = {
  encode: (mytext, n) => {
	let encodeArr = [];
	for(let i = 0; i < mytext.length; i++) {
    	const charCode = mytext.charCodeAt(i);
    	const transf = (charCode - 32 + parseInt(n)) % 95 + 32;
    	encodeArr.push(String.fromCharCode(transf));
    }
   encodeResult = encodeArr.join("");
   return encodeResult;
  },
  decode: () => {
    /* Acá va tu código */
  }
};
