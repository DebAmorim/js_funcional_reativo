// Functors são objetos que implementam a função map
// que também é um wrapper de um valor

const nums = [1,2,3,4,5,6]

// novoNums é um functor
const novoNums = nums.map((x => x+10)).map(x => x*2)

console.log(nums, novoNums)


function tipoSeguro(valor){
    return{
        valor,
        map(fn){
            return tipoSeguro(fn(this.valor ))
        }
    }
}