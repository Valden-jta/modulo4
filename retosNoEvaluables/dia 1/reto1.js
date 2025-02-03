//*  ------------------- RETO 1 ------------------- */

// Hacer que se imprima un mensaje que indique "Mensaje 1" nada más ejecutar el programa.
// Pasados 3 segundos, debe imprimir "Mensaje 2".
// Y después que se imprima este mensaje, que se imprima "Mensaje 3".

console.log('Mensaje 1');
setTimeout(()=>{
    console.log('Mensaje 2');
    console.log('Mensaje 3');
},3000);

