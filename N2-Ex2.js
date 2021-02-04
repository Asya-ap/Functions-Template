'use strict'

var age = parseInt(prompt('Introduce your age', 27));

//tagged templates
function tagged(string, ...values){

    console.log(string);
    console.log(values);

}

 tagged`<h2> I'm ${age} years old </h2>`; //etiquetamos la función

 function text(){
     if(age >= 18){
         return 'You are an adult';
     }else{
         return 'You are too young';
     }
 }

 var Me = `Hello my age is ${age}, ${text()} `;

 document.write(Me);





