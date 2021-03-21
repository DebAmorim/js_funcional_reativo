// // criando função sem uso de currying

// // Currying é quando, ao invés de passar todos os argumentos de uma só vez
// // para a função, vc o faz de forma parcial


// function somar(a, b, c){
//     return a + b + c;
// }

// console.log(somar(1,2,3));

// // aplicando currying de forma simples pra entender o conceito

// function somarCurrying(a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         }
//     }
// }

// // chamando dessa forma, ganha-se flexibilidade
// // o que é difícil de se provar numa função muito pequena
// console.log(somarCurrying(1)(2)(6))

// //  outro exemplo mais complexo sem uso de curryng até então

function textoComTamanhoEntre(max, min, erro, texto){
    const tamanho = (texto || '').trim().length;
    if(tamanho < min || tamanho > max){
        throw erro;
    }
}

const produto1 = {nome:'A', preco:18.99, desconto: 0.05}
textoComTamanhoEntre(4,255,'Nome inválido', produto1.nome);

