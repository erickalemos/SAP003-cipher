window.cipher = {
  // ... 
  encode:
  
	function encode(codificar,offset){
		for (let i= 0;i < codificar.length;i++) {
			let alterar = codificar[i].charCodeAt();
			let teste =((alterar-65+offset )% 26)+65;
			let printar = String.fromCharCode(teste);
			return (console.log(printar));
			document.getElementById("mensagem").innerHTML +=` esta é a msg${exibir}`;
		}
  	}
  	decode:
  	function decode(decodificar,offset){
  		for (let i= 0;i < codificar.length;i++) {
  		let alterar2 = decodificar[i];charCodeAt();
  		let teste2 = ((alterar2+65-offset)%26)+65;
  		let printar2 = String.fromCharCode(teste2);
  		return (console.log(printar2));

  		}
  	}


  }