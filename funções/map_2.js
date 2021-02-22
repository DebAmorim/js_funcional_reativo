// Array
// const nums = [1, 2, 3, 4];
// Função
// const dobro = (n => n*2);
// Chamada map
// console.log(nums.map(dobro));


/*
* A função map é uma callback. Ela espera receber 3 valores: value, index e array
*/

// Usando o index

// Array
// const nums = [1, 2, 3, 4];
// Função
// const dobro = (n, i) => n*2 + i;
// Chamada map
// console.log(nums.map(dobro));


// Usando o array

// Array
const nums = [1, 2, 3, 4];
// Função
const dobro = (n, i, a) => n*2 + i + a.length;
// Chamada map
console.log(nums.map(dobro));


