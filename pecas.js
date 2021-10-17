let peso = 100

if(peso >= 100) {
    console.log("A peça possui o peso adequado, pode ser cadastrada!")
}else {
    console.log("A peça não possui o peso adequado")
}

let listapecas = ["Amortecedor" , "Vels" , "Radiador" , "Disco de freio" , "Ignição" , "Suspenção" , "Virabrequin" , "Radiador" , "Correia" , "Bomba de combustivel"]
if (listapecas.length < 10) {
    console.log ("A lista ainda possui espaço para mais peças")
} else {
    console.log ("Não há espaço disponivel na lista, a capacidade maxima foi atingida")
} 

let nomedepecas = "Disco de freio"
 if (nomedepecas.length < 3) {
     console.log ("Nome de peça valido")
 } else {
    console.log ("Nome esta invalido, tente novamente") 
 }