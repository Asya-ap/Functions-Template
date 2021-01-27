'use strict'

function user(name='Anastasia', surname='Potapova'){
   var finalUser = name + ' ' + surname;
   return finalUser;
}


function user2 (){
    console.log(`Nom usuari: ${user()}`);
}

user2();