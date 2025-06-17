let resultElement = document.getElementById('result');

function leeLa(value) {
    resultElement.innerText += value;
}
function equal(){
    let result = eval(resultElement.innerText);
    resultElement.innerText = result;
}
