// outro exemplo: suponha que não haja o interesse em gerar excessão em todas as funções
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
// encapsulando o tratamento de erro, porém não utilizando currying ainda
// então se quiser chamar uma validação específica não será possível
function aplicarValidacao(fn, valor){
    try{
        fn(valor)
    } catch(e){
        return {error: e}
    }
}

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome inválido')

const produto1 = {nome:'A', preco:18.99, desconto: 0.05}
const produto2 = {nome:'B', preco:18.99, desconto: 0.05}
// até aqui
console.log(aplicarValidacao(forcarNomeProdutoValido(produto1.nome)));
console.log(aplicarValidacao(forcarNomeProdutoValido(produto2.nome)));
