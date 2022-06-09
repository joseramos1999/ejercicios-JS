function ejercicio1() {
    var nom = "JOSE";
    alert(nom);
}

function ejercicio2() {
    var nombre = prompt("Cual es tu nombre?");
    alert("Hola " + nombre + " !");
}

function ejercicio3() {
    var nombre = "Paco";
    let casado = true;
    const edad = 34;

    console.log("Nombre: " + nombre + typeof(nombre) + " Casado: " + casado + typeof(casado) + " Edad: " + edad + typeof(edad));
}

const ejercicio4 = () => {
    return "Jose Ramos";
}

console.log(ejercicio4);

function ejercicio4_2(comido) {
    console.log("Has comido? " + comido);
}

ejercicio4_2(true);

function ejercicio4_3(...num) {
    num.forEach(Element => {
        console.log(Element)
    });
}

ejercicio4_3(1, 2, 3, 4, 5, 6, 7, 8, 9);

function ejercicio5() {
    return Math.round(Math.random());
}

if (ejercicio5() != 0) {
    console.log("CRUZ");
} else {
    console.log("CARA");
}

function ejercicio6(num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log(ejercicio6(1, 5, 7));

function ejercicio6_2(nombre, apellido1, apellido2) {
    return "" + nombre + apellido1 + apellido2;
}

console.log(ejercicio6_2("Jose", "Ramos", "Rodriguez"));

function ejercicio6_3(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function