function soma(){
    let result = parseFloat(document.getElementById("primeiro").value) + parseFloat(document.getElementById("segundo").value)
    alert("O resultado da soma é: "+ result)
}
function sub(){
    let result = parseFloat(document.getElementById("primeiro").value) - parseFloat(document.getElementById("segundo").value)
    alert("O resultado da subtração é: "+ result)
}
function multi(){
    let result = parseFloat(document.getElementById("primeiro").value) * parseFloat(document.getElementById("segundo").value)
    alert("O resultado da multiplicação é: "+ result)
}
function div(){
    let result = parseFloat(document.getElementById("primeiro").value) / parseFloat(document.getElementById("segundo").value)
    alert("O resultado da divisão é: "+ result)
}