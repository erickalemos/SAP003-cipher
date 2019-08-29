
document.getElementById("btn").addEventListener( "click", press);
function press() {
  let offset = Number(document.getElementById( "offset").value);
  let codeMsg = document.getElementById( "codeMsg").value;
  let showMsg = cipher.encode( offset, codeMsg);
  document.getElementById( "msgOne").innerHTML = `${showMsg}`;
}
document.getElementById("btn").addEventListener( "click", pressTwo);
function pressTwo() {
  let offset = Number(document.getElementById( "offset").value);
  let decodeMsg = document.getElementById( "decodeMsg").value;
  let showMsgTwo = cipher.decode( offset, decodeMsg);
  document.getElementById( "msgTwo").innerHTML = `${showMsgTwo}`;	
}
