function textoComTamanhoEntre(max){
    // a ordem dos parâmetros influencia no reuso, então o texto
    // sendo o último é conveniente, porque queremos aplicar a lógica
    // apenas quando de fato tivermos o texto
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

// quando passamos parâmetros utilizando currying, uma característica que 
// se fará presente é a de lazy evaluation, que é uma avaliação tardia do código
// justamente porque temos versões parciais da função, porque ela passa a ter
// diferentes formas de ser chamada. Então o processamento é atrasado pra quando realmente importa

// criando uma versão intermediária da função
// isso permite maior reuso pq vc "salva" versões parciais da função pra cada necessidade

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome inválido')

const produto1 = {nome:'A', preco:18.99, desconto: 0.05}
forcarNomeProdutoValido(produto1.nome);

