// a vantagem de uma função pura é que ela é fácil de testar,
// fácil de manipular, de dar manutenção

// no caso de funções impuras surge o conceito de mock, que é quando se tenta simular
// a dependência externa da função

// função pura
function somar(a, b){
    return a + b;
}

console.log(somar(68, 31));

let numeroExecucoes = 0;

function somarImpura(a, b){
    // aqui foi alterado algo que está fora da função
    // ou seja, efeito colateral observável
    numeroExecucoes ++;
    return a + b;
}

console.log(numeroExecucoes);
console.log(somarImpura(53, 46));
console.log(somarImpura(53, 46));
console.log(somarImpura(53, 46));
console.log(somarImpura(53, 46));
console.log(numeroExecucoes);

// quanto mais impura, maior a dificuldade de reuso da função
// uma função de leitura de arquivo é impura, pq ele pode ter sido
// modificado, excluído... Então não dá pra inferir o resultado dessa função

// é invevitável usar uma função impura (leitura de banco de dados, por exemplo)
// mas a partir daí pode-se tentar usar funções puras na manipulação desses dados,
// mas ainda assim, é difícil...