window.cipher = {
  encode: (offset, string) => {
  let encodeArr = [];
  for(let i = 0; i < string.length; i++) {
    const charCode = string.charCodeAt(i); //gets the ASCII code from the original character
    if(charCode >= 32 && charCode <= 126){
      const transf = (charCode - 32 + parseInt(offset)) % 95 + 32;//codes the character, gets the new ASCII code
      encodeArr.push(String.fromCharCode(transf));//transforms the ASCII code to a character and pushes it into an array  
    }
    if(charCode >= 161 && charCode <=256) {
      const transf = (charCode - 161 + parseInt(offset)) % 95 + 161;//codes the character, gets the new ASCII code
      encodeArr.push(String.fromCharCode(transf));//transforms the ASCII code to a character and pushes it into an array
    }
  }
  return encodeArr.join("");//converts the result array into a string
  },
  decode: (offset, string) => {
  let decodeArr = [];
  for(let i = 0; i < string.length; i++) {
    const charCode = string.charCodeAt(i); //gets the ASCII code from the original character
    const transf = charCode - parseInt(offset) % 95;//encodes the character, gets the new ASCII code
//if transf gets out of the range (32-126), starts discounting from the end
    if(transf < 32) {
      const code = (127 - (32 - transf));
      decodeArr.push(String.fromCharCode(code));//transforms the ASCII code to a character and pushes it into an array
    }
    if(transf >= 32 && transf <= 126 || transf >= 161 && transf <= 256) {
      decodeArr.push(String.fromCharCode(transf));//transforms the ASCII code to a character and pushes it into an array	
    }
    if(transf < 161 && transf > 126) {
      const code = (256 - (161 - transf));
      decodeArr.push(String.fromCharCode(code));//transforms the ASCII code to a character and pushes it into an array
    }
  }
    return decodeArr.join("");//converts the result array into a string
  }
};
