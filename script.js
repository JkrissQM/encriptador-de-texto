function encriptar() {
    let textoIntroducido = document.getElementById("textoIntroducido").value;

    if (textoIntroducido === "") {
        alert("Debes, ingresar un texto.");
        return;
    }

    let encriptarTexto = textoIntroducido
        .replace(/a/g, "ai")    
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("textoResultado").value = encriptarTexto;  
    document.getElementById("botonCopiar").classList.add("mostrar");
    
        mostrarOcultarContenidoInicial();
        ajustarAlturaContenedor();
}

function desencriptar(){
    let textoIntroducido = document.getElementById("textoIntroducido").value;

    if (textoIntroducido === "") {
        alert("Por favor, introduce un texto.");
        return;
    }

    let desencriptarTexto = textoIntroducido
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("textoResultado").value = desencriptarTexto;
    document.getElementById("botonCopiar").classList.add("mostrar");

        mostrarOcultarContenidoInicial();
        ajustarAlturaContenedor();
}

function copiarTexto() {
    let textoResultado = document.getElementById("textoResultado");
    textoResultado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles.");
}

    document.getElementById('textoResultado').addEventListener('input', function() {
    mostrarOcultarContenidoInicial();
});

function mostrarOcultarContenidoInicial() {
    var contenidoInicial = document.querySelector('.contenido_textoresultado_contenidoInicial');
    var textoResultado = document.getElementById('textoResultado').value.trim();

    if (textoResultado) {
        contenidoInicial.style.opacity = '0';
        setTimeout(function() {
            contenidoInicial.style.display = 'none';
        }, 300); 
        
        document.getElementById('textoResultado').style.opacity = '1';
    } else {
        contenidoInicial.style.display = 'flex';
    }
}

function ajustarAlturaContenedor() {
    let textoResultado = document.getElementById("textoResultado").value.trim();
    let contenedorResultado = document.querySelector(".contenido_textoresultado");

    if (textoResultado) {
        contenedorResultado.classList.add("expandido");
    } else {
        contenedorResultado.classList.remove("expandido");
    }
}

ajustarAlturaContenedor();
