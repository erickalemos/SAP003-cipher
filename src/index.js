
document.getElementById("btn").addEventListener("click", pressEncode);
document.getElementById("btn").addEventListener("click", pressDecode);
//Função que recebe as informações do usuário para codificar, articula com a função encode no cipher.js e retorna o resultado para o usuário.
function pressEncode() {
  let offset = Number(document.getElementById("offset").value);
  let codeMsg = document.getElementById("codeMsg").value;
  let showMsg = window.cipher.encode(offset, codeMsg);
  document.getElementById("msgOne").innerHTML = `<p> ${showMsg} </p>`;
}
//Função que recebe as informações do usuário para decodificar, articula com a função decode no cipher.js e retorna o resultado para o usuário.
function pressDecode() {
  let offset = Number(document.getElementById("offset").value);
  let decodeMsg = document.getElementById( "decodeMsg").value;
  let showMsgTwo = window.cipher.decode(offset, decodeMsg);
  document.getElementById("msgTwo").innerHTML = `${showMsgTwo}`;	
}
