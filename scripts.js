



let numero = prompt("Ingrese un número dentro de los posibles (1, 2, 3)");
let correcto = true;

if (numero === "1") {
    console.log("El número elegido es 1");

} else if (numero === "2") {
    console.log("El número elegido es 2");

} else if (numero === "3") {
    console.log("El número elegido es 3");

} else {
    console.log("Número no válido, si no puede hacer esto bien... dudo que consiga trabajo XD");
    alert("Número no válido");
    correcto = false;
}

let color = "";
while (correcto) {
    color =  prompt("Ingrese un color en minúscula dentro de los posibles (azul, amarillo, rojo)");
    if (color == "azul"){
        console.log("El color elegido es Azul");
        correcto = false;

    } else if (color == "amarillo") {
        console.log("El color elegido es Amarillo");
        correcto = false;

    } else if (color == "rojo") {
        console.log("El color elegido es Rojo");
        correcto = false;

    } else {
        console.log("Color no válido, si no puede hacer esto bien... dudo que consiga trabajo XD");
        alert("Color no válido");
        correcto = false;
    }

}

for (let i = 4; i > 0; i--){
    if (i === 4) {
        console.log("Presentando su nuevo trabajo en...");
        continue;
    } else if (i === 3) {
        console.log("3...");
        continue;
    } else if (i === 2) {
        console.log("2...");
        continue;
    } else if(i === 1) {
        console.log("1!");
        continue;
    } else {
        break;
    }
}
let opcion = "";
function numcol(numero, color) {
    opcion = (numero + color);
}
numcol(numero,color);
switch (opcion) {
    case "1azul":
        console.log ("Serás Astronauta");
        break;
    case "1amarillo":
        console.log ("Serás Ingenier@");
        break;
    case "1rojo":
        console.log ("Serás Maestr@");
        break;
    case "2azul":
        console.log ("Serás Policía");
        break;
    case "2amarillo":
        console.log ("Serás Psicólog@");
        break;
    case "2rojo":
        console.log ("Serás Cantante");
        break;
    case "3azul":
        console.log ("Serás Taxista");
        break;
    case "3amarillo":
        console.log ("Serás Deportista");
        break;
    case "3rojo":
        console.log ("Serás Paleontólog@");
        break;
    default:
        console.log ("No consiguió trabajo, pruebe de nuevo");
        break;
}

    

