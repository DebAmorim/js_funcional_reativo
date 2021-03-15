// declaração da promessa
// A promise recebe como parâmetro uma função que será chamada quando quisermos
// cumprir a promessa. Quando a promise é cumprida temos a criação de um novo objeto.
// Neste momento temos apenas o objeto e não o seu valor.

// let objeto = new Promise(funcaoArgumento(funcaoChamadaAoCumprirPromessa){
//     funcaoChamadaAoCumprirPromessa(valorArguemnto);
// });

// acessando o valor da promessa
// objeto.then(funcaoArgumento(valorArguemnto)){
//     console.log(valorArguemnto);
// }

// o valorArgumento pode ser uma lista, um objeto, mas somente um valor retornado é
// acessado. Se mais de um valor for passado, o segundo em diante ficará indisponível

// concatenando .then

// objeto.then(valorArguemnto => valorArguemnto[0])
//         .then(primeiroObjeto => primeiroObjeto.valor)
//         .then(console.log)

// o resultado de um .then é passado para o próximo, como trabalhado acima
// ou seja, ao chamar .then, estou acessando o valor devolvido pela promise ou
// função anterior a ele

// isso torna o código mais legível do que callback hell
// uma boa utilização é para códigos assíncronos, trabalhar com assincronismo

// exemplo de código mais limpo

const primeiroElemento = arrayOuString => arrayOuString[0];
const letraMinuscula = letra => letra.toLowerCase();

new Promise(function(resolve){
    resolve(['Ana', 'Bia', 'Caio']);
})
.then(primeiroElemento)
.then(primeiroElemento)
.then(letraMinuscula)
.then(console.log)
