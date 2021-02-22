const pika = [9.0,8.0,4.0,5.0,12.0,0.5]; // Array 


let notasBaixas = [];
    notasBaixas = pika.filter(function(pika){
        return pika < 7
    })
    console.log(notasBaixas);

// usando Arraw
    let notabaixa2 = [];
    notasBaixas2 = pika.filter(nota => nota <7)
    console.log(notasBaixas2)
