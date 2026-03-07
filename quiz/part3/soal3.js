// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

console.log("ganjil genap")

let i =1;
while(i <=100){
    if (i % 2 == 0){
        console.log("genap");
    } else {
        console.log("ganjil");
    }
    i++
}