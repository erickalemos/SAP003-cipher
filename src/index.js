
document.getElementById("btn").addEventListener( "click", clique);
function clique() {
  let offset = Number(document.getElementById( "offset").value);
  let codificar = document.getElementById( "codificar").value;
  let exibir = cipher.encode( offset, codificar);
  document.getElementById( "mensagem").innerHTML = `${exibir}`;
}
document.getElementById("btn").addEventListener( "click", clique2);
function clique2() {
  let offset = Number(document.getElementById( "offset").value);
  let decodificar = document.getElementById( "decodificar").value;
  let exibir2 = cipher.decode( offset, decodificar);
  document.getElementById( "mensagem2").innerHTML = `${exibir2}`;	
}