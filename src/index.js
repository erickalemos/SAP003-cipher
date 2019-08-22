


function clique(){
	let codificar=document.getElementById("codificar").value;
	let offset=Number(document.getElementById("offset").value);
	let exibir = cipher.encode(codificar,offset);
	document.getElementById("mensagem").innerHTML =`teste ${exibir}`;


}

function clique2(){
	let decodificar=document.getElementById("decodificar").value;
	let offset=Number(document.getElementById("offset").value);
	let exibir2 = cipher.decode(decodificar,offset);
	document.getElementById("mensagem2").innerHTML =`teste ${exibir2}`;	
}