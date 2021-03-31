//biblioteca do node para leitura de arquivo: file system
const fs = require('fs');
//biblioteca do node para caminhos de arquivos
const path = require('path');

//__dirname: dá o atual diretório
const caminho = path.join(__dirname, 'dados.txt');

function exibirConteudo(err, conteudo){
    console.log('Leitura assíncrona');
    console.log(conteudo.toString());
}


console.log('Início...');
fs.readFile(caminho, exibirConteudo);
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()));
console.log('Fim...');

console.log('Início Sync...');
//pra fazer a leitura de forma síncrona
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log('Fim Sync...');
