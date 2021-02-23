// Atividade 1

function nome(nome,ola, ponto){
    return ola + nome + ponto
}
var mostrar = nome('Gabriel ', 'Ola, ','!')

console.log(mostrar)





// Atividade 2
function idadeEmDia(idade){
return  idade * 365
}

var idade = idadeEmDia(17) // Passe a idade aqui
console.log("Você viveu " + idade + ' dias');

// Atividade 3
function calcularSalario(hora,salario){
    return hora * salario
}

var ValorRecebido = calcularSalario(80,12.50)

console.log("Você rebera " + ValorRecebido + "R$")

//atividade 4
//Não terminado
/*
 function Mes(meses){
   var meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','desembro'];
 
for(i = 1, i++, i >= 12){
    return meses
}
  } 


var escolhaOmes = Mes(1)
console.log(escolhaOmes)
*/

function Numero(numero1, numero2){
     if(numero1 > numero2){
        console.log("O numero " + numero1 + " e maior quer " + numero2);
    }else if(numero1 == numero2){
        console.log("O numero " + numero1 + " e igual " +  numero2 );
    }else{
        console.log(" o numero " + numero1 + " e menor que " + numero2)
    }

   
}
var resultados = Numero(400,4)

console.log(resultados)