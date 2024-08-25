/*
escribe un programa que use console.log para imprimir todos los números del 1 al 100, con dos excepciones. 
Para los números divisibles por 3, imprime "Fizz" en lugar del número, y para los números divisibles por 5 (y no por 3), 
imprime "Buzz" en su lugar.

cuando tengas eso funcionando, modifica tu programa para que imprima "FizzBuzz" para los números que son divisibles por 3 y 5
*/

for (let i = 1; i <= 100; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  }else if(i % 3 === 0) {
    console.log('Fizz')
  }else if(i % 5 === 0) {
    console.log('Buzz')
  }
}
