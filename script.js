let resultElement = document.getElementById('result');

function santhosh(value) {
    resultElement.innerText += value;
    
}
function clearDisplay(){
    resultElement.innerText = "0"
}
function equal(){
    let result = eval(resultElement.innerText);
    resultElement.innerText = result;
}
 function backspace(){
    resultElement.innerText = resultElement.innerText.slice(0,1);
 }