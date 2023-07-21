// prendo un elemento su cui scrivere
const myRow = document.getElementById("row_square");

// Scrivi un programma che stampi in console i numeri da 1 a 100,
for (let i = 1; i <= 100; i++) {
  // creo una variabile per associare il risultato all ' output
  let risultato = i;

  if (i % 3 == 0 && i % 5 == 0) {
    // Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
    risultato = "FizzBuzz ";
  } else if (i % 3 == 0) {
    // per i multipli di 3 stampi "Fizz" al posto del numero
    risultato = "Fizz ";
  } else if (i % 5 == 0) {
    // per i multipli di 5 stampi "Buzz" al posto del numero
    risultato = "Buzz ";
  }

  // creo un div per ogni elemento
  const myDiv = document.createElement("div");
  // scrivo in html cosa ci sarà all'interno del div
  myDiv.innerHTML = risultato;
  // aggiungo la classe che mi permetterà di modificare il div
  myDiv.classList.add("square");
  //collego il div creato all'elemento già esistente richiamato antecedentemente
  myRow.append(myDiv);
}
