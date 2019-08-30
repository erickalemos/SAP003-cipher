
document.getElementById("btn").addEventListener("click", pressEncode);
document.getElementById("btn2").addEventListener("click", pressDecode);

function pressEncode() {
  let offset = Number(document.getElementById("offset").value);
  let codeMsg = document.getElementById("codeMsg").value;
  let resultShowMsg = window.cipher.encode(offset, codeMsg);
  document.getElementById("msgOne").innerHTML = `<p> ${resultShowMsg} </p>`;
}

function pressDecode() {
  let offset = Number(document.getElementById("offset").value);
  let decodeMsg = document.getElementById( "decodeMsg").value;
  let resultShowMsgTwo = window.cipher.decode(offset, decodeMsg);
  document.getElementById("msgTwo").innerHTML = `${resultShowMsgTwo}`;	
}
