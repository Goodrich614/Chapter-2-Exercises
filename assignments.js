// Looping a triangle
// const buildTriangle = () => {
//     /*
//      * Statement 1: let row = "#" --- initializes the variable
//      * Statement 2: row.length < 8 --- condition for the for loop to run (How many times, typically)
//      * Statement 3: row += "#" --- typically used to increment the iteration. 
//      *                In this case it adds '#' to the initial row value of '#' as long as the condition is true
//      */
//     for (let row = "#"; row.length < 8; row += "#") {
//         console.log(row);
//     }
//     for (let row = "#"; row.length > 1; row += "#") {
//         console.log(row);
//     }
// }

// buildTriangle();

// Fizz Buzz
// const fizzBuzz = () => {
//     for (let num = 1; num <= 100; num++) {
//         if (num % 3 === 0) console.log('Fizz');
//         if (num % 5 === 0) console.log('Buzz');
//         console.log(num);
//     }
// }

// fizzBuzz();

// Chessboard
const chessBoard = () => {
    let size = 8;

    let board = "";
    
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
          board += " ";
        } else {
          board += "#";
        }
      }
      board += "\n";
    }
    
    console.log(board);
}
chessBoard();