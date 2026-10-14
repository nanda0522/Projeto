let numero1 = Number(prompt("Digite o primeiro número:"))
let numero2 = Number(prompt("Digite o segundo número:"))
let operaçao = prompt("Informe a operação: \n [+] \n [-] \n [*] \n [/]")

if( operaçao == "+"){
    alert (numero1 + numero2 )
}
else if( operaçao == "-"){
    alert (numero1 - numero2)
} 
else if( operaçao == "*"){
    alert (numero1 * numero2)
}
else if( operaçao == "/"){
    alert (numero1 / numero2)
}

