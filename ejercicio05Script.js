
var estudiantes = [
    {nombre: "Rosa", apellido: "López", nota: 88},
    {nombre: "Shawn", apellido: "Mendez", nota: 92},
    {nombre: "Bella", apellido: "Hadid", nota: 78},
    {nombre: "Amanda", apellido: "González", nota: 98},
    {nombre: "Max", apellido: "Cabezas", nota: 100}
];

function mostrarEstudiantes() {
    var lista = document.getElementById("listaEstudiantes");
    var sumaNotas = 0;
    
  
    estudiantes.forEach(function(estudiante) {
        lista.innerHTML += `<p>${estudiante.nombre} ${estudiante.apellido}</p>`;
        sumaNotas += estudiante.nota;
    });

    var promedio = sumaNotas / estudiantes.length;

    var promedioElemento = document.getElementById("promedio");
    promedioElemento.innerHTML = `El promedio de las notas es: ${promedio.toFixed(2)}`;
}


window.onload = mostrarEstudiantes;
