// mesmo cenário anterior, agora aplicando currying na validação
function textoComTamanhoEntre(max){
    return function(min){
        return function (erro){
            return function(texto){
                const tamanho = (texto || '').trim().length;
                if(tamanho < min || tamanho > max){
                    throw erro;
                }
            }
        }
    }
}
// encapsulando o tratamento de erro
function aplicarValidacao(fn){
    return function(valor){
        // Lazy Evaluation
        try{
            fn(valor)
        } catch(e){
            return {error: e}
        }
    }
    
}

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)

// agora como o currying foi aplicado ao encapsulamento da função que trata o erro
// podemos usar validações diferentes
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome inválido')
const forcarPrecoProdutoValido = forcarTamanhoPadrao('Preco inválido')

const validarNomeProduto = aplicarValidacao(forcarNomeProdutoValido)
const validarPrecoProduto = aplicarValidacao(forcarPrecoProdutoValido)

const produto1 = {nome:'A', preco:18.99, desconto: 0.05}
const produto2 = {nome:'B', preco:18.99, desconto: 0.05}
// até aqui não houve processamento, porque o último parâmetro ainda faltava
console.log(validarNomeProduto(produto1.nome));
console.log(validarPrecoProduto(produto1.nome));

// Currying é tão importante, que no lambda calculu, que é a base da programação funcional
// todas as funções necessariamente usam currying, nenhuma recebe 2 parâmetros ao mesmo tempo