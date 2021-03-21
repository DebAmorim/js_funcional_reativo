// forma 1 - dados mutáveis, forma imperativa
// não modifica o array original, mas depende de muitos valores externos
const nums = [1,5,2,4,7,34,678];

let total = 0;

for(let i = 0; i<nums.length; i++){
    total += nums[i];
}

console.log(total); 

// forma 2 - usando reduce (ele não modifica o array original)
// programação funcional e mais declarativo
const somar = (a, b) => a + b;
const total2 = nums.reduce(somar)

console.log(total2);

// forma 3 - usando recursividade: substitui laço e mutabilidade a partir de um método recursivo
//Aspectos importantes da recursividade: a função chama a si mesma e deve ter uma condição de parada

// nesse caso não há mutabilidade do array
function somarArray(array, total = 0){
    if(!array){
        return total;
    }
    return somarArray(array.slice(1), total + array[0])
}