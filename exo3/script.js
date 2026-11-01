"use strict"; //from slide 52
   
  
//declaring varialbes from  slide 38 ;
const Students = [
  {id: 1000, nom:"JOHN",   prenom:"DOE",       moyenne: 14,  year: 5 },
  {id: 2000, nom:"BOB",    prenom:"CARLTON",   moyenne: 7,   year: 1 },
  {id: 3000, nom:"RAYANE", prenom:"SMITH",     moyenne: 13,  year: 3 }
];



function A() {                                                  // declaring function from slide 47
    for (const s of Students) {                                  // using for...of loops from slide 45
        const decision = B(s.moyenne)? "ADMIS" : "AJOURNÉ";      // Condition ternaire de slide 43
        console.log(s.id + ": " + decision);                     
    }   
}


function B(x) {                           // declaring function from slide 47
    return x >= 10;                             // Admis si moyenne >= 10 opérateur de comparaison in slide 42;                            
} 