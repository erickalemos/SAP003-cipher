window.cipher = {
  // ... 
  encode: encode,
  decode: decode
};

function encode( offset, codificar ) {
  let exibir = " ";
  for (let i= 0;i < codificar.length;i++) {
    let alterar = codificar[i].charCodeAt();
    let teste =((alterar-65+offset )% 26)+65;
    exibir += String.fromCharCode(teste);
  }
  return exibir;
}
function decode( offset, decodificar) {
  let exibir2 = " ";
  for (let i= 0;i < decodificar.length;i++) {
    let alterar2 = decodificar[i].charCodeAt();
    let teste2 = ((alterar2-90-offset)%26)+90;
    exibir2 += String.fromCharCode(teste2);
  }
  return exibir2;
}  