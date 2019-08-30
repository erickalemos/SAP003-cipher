window.cipher = {
  encode: encode,
  decode: decode
};
//Função de codificação
function encode(offset, codeMsg) {
  let showMsg = "";
  //loop for que prossegue codificando até a ultima letra digitada
  //let showMsg é a variavél que vai printar a msg na tela
  //let letterNumber transforma a variável em um número
  //let calc aplica o cálculo da cifra de César 
  for (let i= 0;i < codeMsg.length;i++) {
    let letterNumber = codeMsg[i].charCodeAt();
    let calc =(( letterNumber-65+offset) %26) +65;
    // condicional if para pegar as letras maiúsculas, else if minúsculas e else para o espaço
    if (letterNumber >= 65 && letterNumber <= 90) {
      showMsg += String.fromCharCode(calc);
    } else if (letterNumber >= 97 && letterNumber <= 122) {
      calc =(( letterNumber-97+offset) %26) +97;
      showMsg += String.fromCharCode(calc);
    } else {
      calc =(( letterNumber-32+offset) %33) +32;
      showMsg += String.fromCharCode(calc);
    }
  }
  return showMsg;
}
//Função de decodificação
function decode(offset, decodeMsg) {
  let showMsgTwo = "";
  //loop for que prossegue decodificando até a ultima letra digitada
  for (let i= 0;i < decodeMsg.length;i++) {
    let letterNumberTwo = decodeMsg[i].charCodeAt();
    let calcTwo = ((letterNumberTwo-90-offset)%26)+90;
    if (letterNumberTwo >= 65 && letterNumberTwo <= 90) {
      showMsgTwo += String.fromCharCode(calcTwo);
    } else if (letterNumberTwo >= 97 && letterNumberTwo <= 122) {
      let calcTwo =(( letterNumberTwo-122-offset) %26) +122;
      showMsgTwo += String.fromCharCode(calcTwo);
    } else {
      let calcTwo =(( letterNumberTwo-64-offset) %33) +64;
      showMsgTwo += String.fromCharCode(calcTwo);
    }
  }
  return showMsgTwo;
}  

