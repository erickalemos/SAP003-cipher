
document.addEventListener(clique);
function clique() {
  let offset = Number(document.getElementById( "offset").value);
  let codificar = document.getElementById( "codificar").value;
  let exibir = cipher.encode( codificar, offset);
  //let space = codificar.replace(" ", " "); 
  document.getElementById( "mensagem").innerHTML = `${exibir}`;
}
document.addEventListener(clique2);
function clique2() {
  let offset = Number(document.getElementById( "offset").value);
  let decodificar = document.getElementById( "decodificar").value;
  let exibir2 = cipher.decode( decodificar, offset);
  document.getElementById( "mensagem2").innerHTML = `${exibir2}`;	
}