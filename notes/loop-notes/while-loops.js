// while loops
// let count = 10; //initializer
// while (count > 0){
//     console.log('Count: ' + count);
//     count--;
// }
// code that happens after while loop

let guess = 0;

while (guess !== 7) {
     guess = Math.floor(Math.random() * 10); // generate a random number between 0 and 9
     console.log('You guessed: ' + guess);
}
console.log('Congats! You guessed the number!');
