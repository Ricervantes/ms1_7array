console.log("Entro al main.js");


let nombre_persona="juan";
 //console.log(nombre);
 

 /*let nombre="manuel";
 console.log(nombre);

 let nombre="juan";
 console.log(nombre);*/
 let nombre=`juan`;
 let apellido="perez";

 console.log(`mi nombre es:${nombre},mi apellido es:${apellido}`);
 

 //objetos en javaScript
let array_perro=["willy","negro"];
console.log(array_perro[1]);


 let perro=    {
    "nombre":"willy",
    "color":"negro",
    "raza":"labrador",
    "edad":4,
    "paises":8,

 };
 console.log("el nombre es :",perro.nombre);
 console.log("la raza es :",perro.raza);
 console.log(perro["color"]);

 let keys= object.keys(perro);
 console.log(keys);
 keys.forEach(llave => {
    console.log(perro[llave]);
    console.log(llave);

 });
 let perro2=    {
    "nombre":"willy",
    "color":"negro",
    "raza":"labrador",
    "edad":4,
    "paises":8,

 };

 const {raza,edad}=perro2;
console.log(raza);
console.log(edad);



 const nombre_perro=perro2

