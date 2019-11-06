let button = document.querySelector("#productBut");

let calProduct = ()=>
{
    let firstNumber = parseInt(document.querySelector("#num1").value);
    let secondNumber = parseInt(document.querySelector("#num2").value);
    
    let answer = firstNumber * secondNumber;

    alert(`The product of ${firstNumber} X ${secondNumber} =${answer}`);
}

button.addEventListener("click",calProduct);


let image = document.querySelector("#celeb");

let changeToJustinT= ()=>
{
    image.src="img/jt.jpg";
}

let changeToDonaldT= ()=>
{
    image.src="img/dt.jpg";
}

image.addEventListener("mouseover",changeToDonaldT);

image.addEventListener("mouseout",changeToJustinT);