let calculateButton = document.querySelector(".calculate");

const calculate = (event) => {
    let number_1 = Number(document.querySelector("#number-1").value);
    let number_2 = Number(document.querySelector("#number-2").value);
    let operation = document.querySelector("#operations").value;
    let result;

    if (number_1 !== 0 && number_2 !== 0 && operation !== "") {
        if (operation === "+") {
            result = number_1 + number_2;
            alert(` ${number_1} ${operation} ${number_2} = ${result} `);
        }
        else if (operation === "-") {
            result = number_1 - number_2;
            alert(` ${number_1} ${operation} ${number_2} = ${result} `);
        }
        else if (operation === "*") {
            result = number_1 * number_2;
            alert(` ${number_1} ${operation} ${number_2} = ${result} `);
        }
        else if (operation === "/") {
            result = number_1 / number_2;
            alert(` ${number_1} ${operation} ${number_2} = ${result} `);
        } else {
            result = "";
            console.log(null);
        }
    } else {
        alert("Please complete operands")
    }
}

calculateButton.addEventListener("click", calculate);
