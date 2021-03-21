// let x = 3

// function somarXMais3(){
//     return x + 3;
// }

// module.exports = somarXMais3

//um outro exemplo: agora o escopo da função somarXMais3 é o que está dentro da função fora()

let x = 3;

function fora(){
    const x = 97;
    function somarXMais3(){
        return x + 3;
    }
    return somarXMais3;
}

module.exports = fora()