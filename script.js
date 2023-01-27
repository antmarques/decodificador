const textArea = document.querySelector(".text-area"); //Informando ao js quais as tags iremos utilizar.
const mensagem = document.querySelector(".mensagem");

 //Criamos uma matriz aonde armazenamos os valores de encriptação 
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e" , "enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e" , "enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}
function copiar(){
    const texto = mensagem;
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand("copy");
}
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    console.log(textoEncriptado);
}
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
    console.log(textoDesencriptado);
}