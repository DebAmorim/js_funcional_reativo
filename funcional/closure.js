// Closure é quando uma função "lembra" do seu escopo léxico
// mesmo quando é executada fora desse escopo léxico

// Escopo léxico: é o escopo onde a função foi definica fisicamente
// dentro do código

const somarXMais3 = require('./closure_escopo');

const x = 1000;
console.log(somarXMais3());

// toda função em javascript lembra de onde foi definida, seja uma classe, 
// um módulo do node...