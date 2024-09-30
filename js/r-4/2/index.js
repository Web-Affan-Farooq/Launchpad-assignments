let calculateButton = document.querySelector(".calculate");

const calculatePercentage = (event) => {
    let marks1 = Number(document.querySelector("#marks-1").value);
    let marks2 = Number(document.querySelector("#marks-2").value);
    let marks3 = Number(document.querySelector("#marks-3").value);
    let marks4 = Number(document.querySelector("#marks-4").value);
    let marks5 = Number(document.querySelector("#marks-5").value);
    let totalMarks = Number(document.querySelector("#total-marks").value);

    if (marks1 !== 0 && marks2 !== 0 && marks3 !== 0 && marks4 !== 0 && marks5 !== 0 && totalMarks > 0) {
        let obtainedMarks = marks1 + marks2 + marks3 + marks4 + marks5;
        let percent = (obtainedMarks / totalMarks) * 100;

        alert(`Percentage: ${percent.toFixed(2)}%`);
    } else {
        alert("Please fill in all fields correctly.");
    }
};

calculateButton.addEventListener("click", calculatePercentage);
