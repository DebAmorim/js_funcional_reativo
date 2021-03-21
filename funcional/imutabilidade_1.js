// Uma das vantagens é trabalhar com múltiplas threads

const nums = [3,1,7,4,9,6];

function ordenar (array){
    return array.sort();
}

// console.log(nums);
// console.log(ordenar(nums));
// console.log(nums);

// nesse caso, o array original foi alterado. 
// Então é uma função impura, gerou efeito colateral.

// Abaixo, ordenação sem alteração do array original
// Esta função abaixo é pura. A maioria das funções de arrays são puras, 
// mas não a sort.
function ordenar2(array){
    return [...array].sort();
}


console.log(nums);
console.log(ordenar2(nums));    
console.log(nums);
