// prendo un elemento su cui scrivere
const myRow = document.getElementById("row_square");
let fizzBuzzElements = "";

// Scrivi un programma che stampi in console i numeri da 1 a 100,
for (let i = 1; i <= 100; i++) {
  // creo una variabile per associare il risultato all ' output
  let risultato = i;
  let classe;

  if (i % 3 == 0 && i % 5 == 0) {
    // Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
    risultato = "FizzBuzz ";
    classe = "fizzbuzz";
  } else if (i % 3 == 0) {
    // per i multipli di 3 stampi "Fizz" al posto del numero
    risultato = "Fizz ";
    classe = "fizz";
  } else if (i % 5 == 0) {
    // per i multipli di 5 stampi "Buzz" al posto del numero
    risultato = "Buzz ";
    classe = "buzz";
  }

  // creo template literal
  fizzBuzzElements += `
  <div class="col">
    <div class="box ${classe}">${risultato}</div>
  </div>`;
}

// lo assegno alla row
myRow.innerHTML = fizzBuzzElements;
