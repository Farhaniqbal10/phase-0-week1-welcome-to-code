// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);


let SecondWord = word4.substring(4,14);

let SecondWordLength = SecondWord.length;

console.log('Second Word ' + SecondWord + ', with length: ' + SecondWordLength); 

let ThirdWord = word4.substring(15,17); 
let ThirdWordLength = ThirdWord.length;

console.log('Third Word : ' + ThirdWord + ', with length: ' + ThirdWordLength);

let FourthWord = word4.substring(18,20);
let FourthWordLength = FourthWord.length;


console.log('Fourth Word : ' + FourthWord + ', with length: ' + FourthWordLength);

let FifthWord = word4.substring(21,25);
let FifthWordLength = FifthWord.length;

console.log('Fifth Word : ' + FifthWord +  ', with length: ' + FifthWordLength);