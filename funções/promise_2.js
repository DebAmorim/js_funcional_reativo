// callback hell
// setTimeout(function(){
//     console.log("Executando callback");

//     setTimeout(function(){
//         console.log("Executando callback");

//         setTimeout(function(){
//             console.log("Executando callback");
            
//         }, 2000);

//     }, 2000);

// }, 2000);

// um conceito central nas promises é conseguir composições

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){

        setTimeout(function(){
            console.log('Executando promise...')
            resolve()
        }, tempo);

    });
}

esperarPor().then(esperarPor).then(esperarPor);