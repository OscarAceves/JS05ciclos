/* 
Condiciones : alteran el orden natural del código
Estructura de control: controlar la ejecucion del código


///////////////////////////
/// Estructuras de control
///////////////////////////


Ciclos o bucles (Loops)

Tambien conocidos como bucles, son estructuraas de control que nos van a permitir ejecutar un bloque de código de forma repetida, hasta que se cumpla una condición específica.

Es importante usar ciclos para optimizar tareas repetitivas


En JS existen los ciclos:

    - while
    - do while
    - for



Iteración: proceso de repetir una secuencia de instrucciones
Estructura de control: herramienta especial para crear algoritmos o programas más dinámicos y flexibles.

*/

/* While: Ejecuta un bloque de código mientras se cumpla una condición específica. Este ciclo se repite mientras la condición sea verdadera, y el bloque de código se ejecuta siempre y cuando la condición se mantenga. La condicion de evalua antes de cada iteración.

while (condición){
    //codigo que se ejecuta
}

*/

// while (crushMeQuiere){
//     console.log("Feliz");
// }

//Ejemplo de un consultorio

let capacidadPacientes = 50;
let pacientesEnConsultorio = 15;

while(pacientesEnConsultorio < capacidadPacientes){
    console.log("Seguimos dando servicio");
    pacientesEnConsultorio++;
}
//Mientras sea verdadera, se ejecuta la instrucción



/* Do while (hacer mientras)

    Se ejecuta la instrucción, luego se evalúa en el while

    El bucle do while se diferencía del while ya que se ejecuta la instrucción al menos una vez, y luego se pregunta para saber si se sigue ejecutando o no.

    do {
        //código a ejecutar
    } while (condición);{
        //codigo que se ejecuta
    }

*/

var contadorPacientes = 0;

do{
    var nombre = prompt("Ingrese el nombre del paciente");
    if (nombre){
        contadorPacientes ++;
    }
}while (confirm("Desea registrar otro paciente?") && contadorPacientes <5);

console.log("Numero de pacientes: " , contadorPacientes);



/*

For (para)

Se utiliza cuando conocemos el número exacto de iteraciones vamos a realizar
Consiste de 3 partes fundamentales:
    
    - inicialización: se ejecuta antes de que el bucle comience y se usa para establecer una variable de control (variable de inicio).
    - condición: es el detonante que verificamos antes de cada iteración, para saber si se sigue ejecutando o no (siempre y cuando sea verdadera).
    - expresión de iteración (contador): tiene la finalidad de modificar la variable de inicio y poder tener un punto de cierre.


    for (inicialización; condición; expresion de iteración){
        //bloque de código a ejecutar
    }

*/

//Crea un código que imprima los numeros del 0 al 4

for(var i =0; i < 5; i++){
    console.log(i);
}


//Consultorio dental registro de citas con un for

let cantidadCitasDiarias = 5;

for (let i = 1; i <= cantidadCitasDiarias; i++) {
    var nombre = prompt("Nombre de paciente " + i);

    console.log("Paciente con cita " +i);
}