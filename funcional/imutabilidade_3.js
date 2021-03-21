const pessoa = {
    nome: 'Maria',
    cidade: 'Patiminas',
    endereco: {
        rua: 'Getúlio Vargas',
        numero: '45'
    }
}
console.log(pessoa);

// // Atribuição por referência
// const novaPessoa = pessoa;
// novaPessoa.nome = 'João';
// console.log(pessoa);

// // Passagem por referência 
// function alteraPessoa(novaPessoa){
//     novaPessoa.nome = 'José';
//     novaPessoa.cidade = 'Fortaleza';
// }
// alteraPessoa(pessoa);
// console.log(pessoa);

// transformando em uma função pura
function alteraPessoa2(pessoa){
    const novaPessoa = { ...pessoa}
    novaPessoa.nome = 'Zacarias';
    // dessa forma o original foi alterado também, porque a clonagem foi apenas no primeiro nível
    novaPessoa.endereco.rua = 'Brasil'
    return novaPessoa;
}

const novaPessoa = alteraPessoa2(pessoa);
console.log(novaPessoa);

console.log(pessoa);


// Uma outra forma é a passagem por valor
let a = 3;
let b = a; //atribuição por valor
// a diferença entre esse cenário e o do objeto, é que entende-se que o objeto ocupa mais memória
// o que torna interessante compartilhar. Mas aqui não.

a ++;
console.log(a);
console.log(b);