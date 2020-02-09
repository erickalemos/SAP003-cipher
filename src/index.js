
document.getElementById("btn").addEventListener("click", pressEncode);
document.getElementById("btn").addEventListener("click", pressDecode);

function pressEncode() {
  let offset = Number(document.getElementById("offset").value);
  let codeMsg = document.getElementById("codeMsg").value;
  let showMsgCode = window.cipher.encode(offset, codeMsg);
  document.getElementById("msgOne").innerHTML = `<p> ${showMsgCode} </p>`;
}

function pressDecode() {
  let offset = Number(document.getElementById("offset").value);
  let decodeMsg = document.getElementById( "decodeMsg").value;
  let showMsgDecode = window.cipher.decode(offset, decodeMsg);
  document.getElementById("msgTwo").innerHTML = `${showMsgDecode}`;	
}
