window.cipher = {
  // ... 
  encode: encode,
  decode: decode
};

function encode( offset, codeMsg ) {
  let showMsg = ""; 
  for (let i= 0;i < codeMsg.length;i++) {
    let letterNumber = codeMsg[i].charCodeAt();
    let calc =(( letterNumber-65+offset)%26)+65;
    showMsg += String.fromCharCode(calc);
  } 
  return showMsg;
}

function decode( offset, decodeMsg) {
  let showMsgTwo = "";
  for (let i= 0;i < decodeMsg.length;i++) {
    let letterNumberTwo = decodeMsg[i].charCodeAt();
    let calcTwo = ((letterNumberTwo-90-offset)%26)+90;
    showMsgTwo += String.fromCharCode(calcTwo);
  }
  return showMsgTwo;
}  

