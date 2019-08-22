function clique(){
	
let codificar=document.getElementById("codificar").value;
let decodificar=document.getElementById("decodificar").value;
let offset=Number(document.getElementById("offset").value);
let exibir = cipher.encode(codificar,offset);
let exibir2 = cipher.decode(decodificar,offset);
document.getElementById("mensagem").innerHTML +=` esta é a msg${exibir}`;

}
