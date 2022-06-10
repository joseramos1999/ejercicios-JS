window.addEventListener("load", () => {
    let puntuacion = 0;

    let texto = document.getElementById("texto");

    const p1 = document.getElementById("preguntas1");
    const p2 = document.getElementById("preguntas2");
    const p3 = document.getElementById("preguntas3");

    const boton1 = document.getElementById("b1");
    const boton2 = document.getElementById("b2");
    const boton3 = document.getElementById("b3");
    const boton4 = document.getElementById("b4");

    const boton5 = document.getElementById("b5");
    const boton6 = document.getElementById("b6");
    const boton7 = document.getElementById("b7");
    const boton8 = document.getElementById("b8");

    const boton9 = document.getElementById("b9");
    const boton10 = document.getElementById("b10");
    const boton11 = document.getElementById("b11");
    const boton12 = document.getElementById("b12");

    boton1.onclick = function() {
        p1.style.display = "none";
        p2.style.display = "flex";
        texto.innerText = "Pregunta 2 de 3"
    };
    boton2.onclick = function() {
        p1.style.display = "none";
        p2.style.display = "flex";
        texto.innerText = "Pregunta 2 de 3"
    };
    boton3.onclick = function() {
        p1.style.display = "none";
        p2.style.display = "flex";
        texto.innerText = "Pregunta 2 de 3"
        puntuacion += 1;
    };
    boton4.onclick = function() {
        p1.style.display = "none";
        p2.style.display = "flex";
        texto.innerText = "Pregunta 2 de 3"
    };


    boton5.onclick = function() {
        p2.style.display = "none";
        p3.style.display = "flex";
        texto.innerText = "Pregunta 3 de 3"
    };
    boton6.onclick = function() {
        p2.style.display = "none";
        p3.style.display = "flex";
        texto.innerText = "Pregunta 3 de 3"
    };
    boton7.onclick = function() {
        p2.style.display = "none";
        p3.style.display = "flex";
        texto.innerText = "Pregunta 3 de 3"
    };
    boton8.onclick = function() {
        p2.style.display = "none";
        p3.style.display = "flex";
        texto.innerText = "Pregunta 3 de 3"
        puntuacion += 1;
    };


    boton9.onclick = function() {
        puntuacion += 1;
        alert("Tu puntuacion es: " + puntuacion)
    };
    boton10.onclick = function() {
        alert("Tu puntuacion es: " + puntuacion)
    };
    boton11.onclick = function() {
        alert("Tu puntuacion es: " + puntuacion)
    };
    boton12.onclick = function() {
        alert("Tu puntuacion es: " + puntuacion)
    };
});