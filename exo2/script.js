"use strict"; //from slide 52


//declaring varialbes from  slide 38 ;
const etudiant = [ "Etudiant1", "Etudiant2", "Etudiant3"];   // using arrays from slde 39   
const etudiants = { nom:"John", prenom:"DOE", age:30 };     // using objects from slide 40
const etudiantss = [                                        // Tableau d’Objets from slide 41
    { nom:"nom1", prenom: "prenom1", age:21 },
    { nom:"nom2", prenom: "prenom2", age:22 },
    { nom:"nom3", prenom: "prenom3", age:23 }
];


function f1() {                          // declaring function from slide 47
    for (const e of etudiant) {          // using for...of loops from slide 45
        console.log(e);
    }
}

                                         
function f2() {                          
    console.log(etudiants);
}   


function f3() {
    for (const e of etudiantss) {
        console.log(`${e.nom}-${e.prenom}-${e.age}`);               // affichage formaté from slide 38    using direct access from slide 40
      //console.log(e.nom + "-" + e.prenom + "-" + e.age);             affichage elaboré from slide 38
    }
}