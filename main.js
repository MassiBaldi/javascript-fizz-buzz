// Fizz Buzz test: Scrivi un programma che
// stampi i numeri da 1 a 100 ma per i multipli di
// 3 stampi “Fizz” al posto del numero e per i
// multipli di 5 stampi Buzz. Per i numeri che
// sono sia multipli di 3 che di 5 stampi
// FizzBuzz.

// utilizzo il for per creare la lista da 1 a 100
for(var i = 1; i <= 100; i++) {
  // console.log(i);
//imposto le variabili
//il ragionamento che ho seguito è: se un numero lo divido per un altro (che decido io, in questo caso 3,5) non mi da resto allora è divisibile
  var tre = (i % 3 == 0);
  var cinque = (i % 5 == 0);
//stesso concetto per dirgli che deve essere dividibile sia per 3 CHE per 5, 3*5=15
  var quindici = (i % 15 == 0);
// utilizzo (if e else if) per dire alla macchina cosa scrive e in quali valori, uso il metodo a cascata partendo da 15, essendo 15 divisibile per 3 che per 5

  if (quindici) {
    // console.log(quindici);
    document.writeln('fizzbuzz');
  }
  else if (cinque) {
    // console.log(cinque);
    document.writeln('buzz');
  }
  else if (tre) {
    // console.log(tre);
    document.writeln('fizz');
  }
  //else per far scrivere i numeri non divisibili
  else {
    // console.log(i);
    document.writeln(i);
  }
}
