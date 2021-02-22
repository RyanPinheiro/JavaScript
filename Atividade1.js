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
function Mes(meses){
   var meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','desembro'];
 
for(i = 1, i++, i >= 12){
    return meses
}
  } 


var escolhaOmes = Mes(1)
console.log(escolhaOmes)