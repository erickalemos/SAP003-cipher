window.cipher = {
  encode: encode,
  decode: decode
};

function encode(offset, codeMsg) {
  let resultShowMsg = "";
  
  for (let i= 0;i < codeMsg.length;i++) {
    let letterNumber = codeMsg[i].charCodeAt();
    let calc =(( letterNumber-65+offset) %26) +65;
    if (letterNumber >= 65 && letterNumber <= 90) {
      resultShowMsg += String.fromCharCode(calc);
    } else if (letterNumber >= 97 && letterNumber <= 122) {
      let calc2 =(( letterNumber-97+offset) %26) +97;
      resultShowMsg += String.fromCharCode(calc2);
    } else {
      let calc3 =(( letterNumber-32+offset) %33) +32;
      resultShowMsg += String.fromCharCode(calc3);
    }
  }
  return resultShowMsg;
}

function decode(offset, decodeMsg) {
  let resultShowMsgTwo = "";
  for (let i= 0;i < decodeMsg.length;i++) {
    let letterNumberTwo = decodeMsg[i].charCodeAt();
    let calcTwo = ((letterNumberTwo-90-offset)%26)+90;
    if (letterNumberTwo >= 65 && letterNumberTwo <= 90) {
      resultShowMsgTwo += String.fromCharCode(calcTwo);
    } else if (letterNumberTwo >= 97 && letterNumberTwo <= 122) {
      let calcThree =(( letterNumberTwo-122-offset) %26) +122;
      resultShowMsgTwo += String.fromCharCode(calcThree);
    } else {
      let calcFour =(( letterNumberTwo-64-offset) %33) +64;
      resultShowMsgTwo += String.fromCharCode(calcFour);
    }
  }
  return resultShowMsgTwo;
}  

