let printButton = document.querySelector(".print");
let exampleText = "reverse that string";
function printText(event) {

    let number = Number(document.querySelector("#number").value);

    let word = exampleText.slice(0,Math.ceil(number));

    alert(word.split("").reverse().toString());
}

printButton.addEventListener("click", printText);