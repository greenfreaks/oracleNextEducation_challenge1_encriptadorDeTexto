const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function BtnEncriptar() {
    const textoEncriptado = Encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function BtnDesencriptar() {
    const textoEncriptado = Desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    
}



//console.table(matrizCodigo); //En la consola muestra una tabla, es este caso los arreglos que están adentro del arreglo de nuestra matriz

function Encriptar(stringEncriptada) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringEncriptada = stringEncriptada.toLowerCase();

    //Recorremos todos los elementos de nuestra matriz
    for (let i = 0; i < matrizCodigo.length; i++) {

        //includes sirve para verificar que los datos definidos entre su paréntesis exista.
        //En este caso vamos a verificar el índice y la posisción de la variable matrizCodigo: matrizCodigo[indice][posicion]
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            //El método "replace" nos ayuda a sustituir unos caracteres por otros (un sólo caracter)
            //En esta línea sustituimos la posicion 0 por la posiscion 1
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]) //"replaceAll" sustituye todos  lo caracteres y no sólo uno como lo hace "replace"
        }
    }
    return stringEncriptada; // Devolvemos la String Encriptada pero ya con todos los procesos realizados para lograr encriptar
}


function Desencriptar(stringDesencriptada) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    //Recorremos todos los elementos de nuestra matriz
    for (let i = 0; i < matrizCodigo.length; i++) {

        //Ya no vamos a revisar la posision 0, ahora revisaremos la posicion 1
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            //Invertimos las posiciones que se van a sustituir 
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]) //"replaceAll" sustituye todos  lo caracteres y no sólo uno como lo hace "replace"
        }
    }
    return stringDesencriptada; // Devolvemos la String Encriptada pero ya con todos los procesos realizados para lograr encriptar
}