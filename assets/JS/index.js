// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((response) => response.json())
// .then((json) => console.log(json));

// let avisoUno = console.log("Este es el primer aviso declarado después de la función con promesa. Aparecerá antes de su resultado")
// let avisoDos = console.log("Este es el segundo aviso declarado después de la función con promesa. Aparecerá antes de su resultado y después de avisoUno");

// Trabajando con objetos:

var mascotasJson = [
    {
    "nombre": "fluffy",
    "mascota": "true",
    "animal": "gato",
    "edadHumana": "7"
    },
    {
    "nombre": "Balto",
    "mascota": "true",
    "animal": "perro",
    "edadHumana": "11"
    },
    {
        "nombre": "Mandibulas",
        "mascota": "false",
        "animal": "tiburon",
        "edadHumana": "50"
        }
]

let objetoNuevoUno = {
    "nombre": "Ferrolio",
    "mascota": "true",
    "animal": "Canario",
    "edadHumana": "35"
}

let objetoNuevoDos = {
    "nombre": "Germandio",
    "mascota": "false",
    "animal": "libélula",
    "edadHumana": "30000"
}

console.log(`La cantidad inicial de objetos del array es: ${mascotasJson.length}`);

mascotasJson.push(objetoNuevoUno, objetoNuevoDos);

console.log(`La cantidad final de objetos del array es: ${mascotasJson.length}`);

console.log(mascotasJson);