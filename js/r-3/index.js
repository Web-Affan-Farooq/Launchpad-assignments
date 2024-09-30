let printButton = document.querySelector(".click");

const showDetails = (event) => {
    let firstname = document.querySelector("#firstname").value;
    let lastname = document.querySelector("#lastname").value;
    let age = document.querySelector("#age").value;

    if(firstname !== "" && lastname !== "" && age !== "" ) {
        alert(`Hello ${firstname} ${lastname} , you're ${age} years old`);
    }
}

printButton.addEventListener("click", showDetails);