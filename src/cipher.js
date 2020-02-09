window.cipher = {
  encode: encode,
  decode: decode
};

function encode(offset, codeMsg) {
  let showMsgCode = "";
  //let letterNumber transforma a variável em um número
  for (let i= 0;i < codeMsg.length;i++) {
    let letterNumber = codeMsg[i].charCodeAt();
    let calc =(( letterNumber-65+offset) %26) +65;
    // condicional if para pegar as letras maiúsculas, else if minúsculas e else para o espaço
    if (letterNumber >= 65 && letterNumber <= 90) {
      showMsgCode += String.fromCharCode(calc);
    } else if (letterNumber >= 97 && letterNumber <= 122) {
      calc =(( letterNumber-97+offset) %26) +97;
      showMsgCode += String.fromCharCode(calc);
    } else {
      calc =(( letterNumber-32+offset) %33) +32;
      showMsgCode += String.fromCharCode(calc);
    }
  }
  return showMsgCode;
}

function decode(offset, decodeMsg) {
  let showMsgDecode = "";
  for (let i= 0;i < decodeMsg.length;i++) {
    let letterNumberDecode = decodeMsg[i].charCodeAt();
    let calcDecode = ((letterNumberDecode-90-offset)%26)+90;
    if (letterNumberDecode >= 65 && letterNumberDecode <= 90) {
      showMsgDecode += String.fromCharCode(calcDecode);
    } else if (letterNumberDecode >= 97 && letterNumberDecode <= 122) {
      let calcDecode =(( letterNumberDecode-122-offset) %26) +122;
      showMsgDecode += String.fromCharCode(calcDecode);
    } else {
      let calcDecode =(( letterNumberDecode-64-offset) %33) +64;
      showMsgDecode += String.fromCharCode(calcDecode);
    }
  }
  return showMsgDecode;
}  

